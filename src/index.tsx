import { Hono } from "hono";
import { Home } from "./components";
import { renderer } from "./renderer";

const app = new Hono();

app.use(renderer);

app.get("/", (c) => c.render(<Home />));

export default app;
