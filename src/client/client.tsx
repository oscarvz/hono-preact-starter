import { hydrate } from "preact";
import { Router } from "wouter-preact";
import { App } from "./App";
import "./style.css";

hydrate(
  <Router>
    <App />
  </Router>,
  document.body,
);
