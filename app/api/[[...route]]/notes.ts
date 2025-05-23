import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { CreateNoteSchema, UpdateNoteSchema } from "@/lib/schema";
import { zValidator } from "@hono/zod-validator";
import { getSession } from "better-auth/api";
import { Hono } from "hono";
import { headers } from "next/headers";
import { z } from "zod";

const notes = new Hono()
    .get(
        "/",
        zValidator(
            "query",
            z.object({
                mode: z.enum(["all", "archived", "search"]),
                query: z.string().optional(),
                tag: z.string().optional(),
            })
        ),
        async (c) => {
            const session = await auth.api.getSession({
                headers: await headers(),
            });

            const userId = session?.user.id;
            const { mode, query, tag } = c.req.valid("query");

            let where: any = { userId };
            let notes = [];

            if (mode === "all") {
                if (query) {
                    where = {
                        ...where,
                        OR: [
                            { title: { contains: query, mode: "insensitive" } },
                            {
                                content: {
                                    contains: query,
                                    mode: "insensitive",
                                },
                            },
                        ],
                    };
                } else if (tag) {
                    where = {
                        ...where,
                        tags: {
                            some: {
                                name: tag,
                            },
                        },
                    };
                } else {
                    where = { userId };
                }
            }

            if (mode === "archived") {
                if (query) {
                    where = {
                        ...where,
                        OR: [
                            { title: { contains: query, mode: "insensitive" } },
                            {
                                content: {
                                    contains: query,
                                    mode: "insensitive",
                                },
                            },
                        ],
                    };
                } else {
                    where = { ...where, isArchived: true };
                }
            }

            if (mode === "search" && query) {
                where = {
                    ...where,
                    OR: [
                        { title: { contains: query, mode: "insensitive" } },
                        {
                            content: {
                                contains: query,
                                mode: "insensitive",
                            },
                        },
                    ],
                };
            }

            notes = await db.note.findMany({ include: { tags: true }, where });

            return c.json(notes);
        }
    )
    .get(
        "/:id",
        zValidator("param", z.object({ id: z.string() })),
        async (c) => {
            const { id } = c.req.valid("param");

            const note = await db.note.findUniqueOrThrow({
                include: { tags: true },
                where: { id },
            });

            return c.json(note, 200);
        }
    )
    .post("/", zValidator("json", CreateNoteSchema), async (c) => {
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        if (!session) {
            return c.json({ error: "Unauthorized" }, 401);
        }

        const userId = session?.user.id;
        const { title, tags, content } = c.req.valid("json");

        const tagsArray = tags.split(", ");

        const note = await db.note.create({
            data: {
                title,
                content,
                tags: {
                    connectOrCreate: tagsArray.map((tag) => {
                        return {
                            where: { name: tag, userId },
                            create: { name: tag, userId },
                        };
                    }),
                },
                user: {
                    connect: { id: userId },
                },
            },
        });

        return c.json({ message: "Note created", data: note });
    })
    .delete(
        "/:id",
        zValidator("param", z.object({ id: z.string() })),
        async (c) => {
            const { id } = c.req.valid("param");

            const note = await db.note.delete({ where: { id } });

            return c.json({ message: "Note deleted", data: note });
        }
    )
    .patch("/", zValidator("json", UpdateNoteSchema), async (c) => {
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        if (!session) {
            return c.json({ error: "Unauthorized" }, 401);
        }

        const userId = session?.user.id;

        const { content, isArchived, tags, title, id } = c.req.valid("json");

        const tagsArray = tags && tags.split(", ");

        const updatedNote = await db.note.update({
            where: {
                id,
            },
            data: {
                content,
                isArchived,
                tags:
                    Array.isArray(tagsArray) && tagsArray?.length
                        ? {
                              connectOrCreate: tagsArray.map((tag) => {
                                  return {
                                      where: { name: tag, userId },
                                      create: { name: tag, userId },
                                  };
                              }),
                          }
                        : undefined,
                title,
            },
            include: {
                tags: true,
            },
        });

        return c.json({ message: "Note updated", data: updatedNote });
    });

export default notes;
