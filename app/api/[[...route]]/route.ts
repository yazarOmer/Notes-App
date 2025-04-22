import { Hono } from "hono";
import { handle } from "hono/vercel";
import tags from "./tags";
import notes from "./notes";

const app = new Hono().basePath("/api");

const routes = app.route("/tags", tags).route("/notes", notes);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
