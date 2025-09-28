import { Hono } from "hono";
import { App } from "./client/";
import { renderer } from "./middleware";

const client = new Hono();

client.use(renderer);
client.get("*", (c) => c.render(<App />));

export { client };
