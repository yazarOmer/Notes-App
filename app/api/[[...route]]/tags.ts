import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { Hono } from "hono";
import { headers } from "next/headers";

const tags = new Hono().get("/", async (c) => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        return c.json({ error: "Unauthorized" }, 401);
    }

    const userId = session?.user.id;

    const tags = await db.tag.findMany({ where: { userId } });
    return c.json(tags);
});

export default tags;
