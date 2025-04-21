import { db } from "@/lib/db";
import { CreateNoteSchema } from "@/lib/schema";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const notes = new Hono()
    .get(
        "/",
        zValidator("query", z.object({ mode: z.enum(["all", "archived"]) })),
        async (c) => {
            const { mode } = c.req.valid("query");

            let where = {};

            if (mode == "archived") {
                where = {
                    isArchived: true,
                };
            }
            const notes = await db.note.findMany({
                include: {
                    tags: true,
                },
                where,
            });
            return c.json(notes);
        }
    )
    .post("/", zValidator("json", CreateNoteSchema), async (c) => {
        const { title, tags, content } = c.req.valid("json");

        const tagsArray = tags.split(", ");

        const note = await db.note.create({
            data: {
                title,
                content,
                tags: {
                    connectOrCreate: tagsArray.map((tag) => {
                        return {
                            where: { name: tag },
                            create: { name: tag },
                        };
                    }),
                },
            },
        });

        return c.json({ message: "Note created", data: note });
    });

export default notes;
