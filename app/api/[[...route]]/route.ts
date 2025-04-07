import { Hono } from "hono";
import { handle } from "hono/vercel";
import tags from "./tags";

const app = new Hono().basePath("/api");

const routes = app.route("/tags", tags);

export const GET = handle(app);

export type AppType = typeof routes;
