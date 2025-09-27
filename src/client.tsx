import { hydrate } from "preact";
import { Home } from "./components";
import "./style.css";

hydrate(<Home />, document.body);
