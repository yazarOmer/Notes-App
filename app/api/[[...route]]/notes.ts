import { db } from "@/lib/db";
import { Hono } from "hono";

const notes = new Hono().get("/", async (c) => {
    const notes = await db.note.findMany({
        include: {
            tags: true,
        },
    });
    return c.json(notes);
});

export default notes;
