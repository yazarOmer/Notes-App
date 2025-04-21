import { db } from "@/lib/db";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const notes = new Hono().get(
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
);

export default notes;
