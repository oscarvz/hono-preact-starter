import { Hono } from "hono";
import { App } from "./client/App";
import { renderer } from "./middleware";

const client = new Hono();

client.use(renderer);
client.get("*", (c) => c.render(<App />));

export { client };
