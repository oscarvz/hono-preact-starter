import { Hono } from "hono";
import { hc } from "hono/client";

export const api = new Hono().get("/hello", (c) =>
  c.json({ message: "Hello from the server!" }),
);

export const apiClient = hc<typeof api>("/api");
