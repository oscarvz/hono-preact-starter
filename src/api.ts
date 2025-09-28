import { Hono } from "hono";
import { hc } from "hono/client";
import { logger } from "hono/logger";

export const api = new Hono()
  .use(logger())
  .get("/hello", (c) => c.json({ message: "Hello from the server!" }));

export const apiClient = hc<typeof api>("/api");
