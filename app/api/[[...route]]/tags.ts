import { db } from "@/lib/db";
import { Hono } from "hono";

const tags = new Hono().get("/", async (c) => {
    const tags = await db.tag.findMany();
    return c.json(tags);
});

export default tags;
