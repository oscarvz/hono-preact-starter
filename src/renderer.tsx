import type { Context } from "hono";
import type { MiddlewareHandler } from "hono/types";
import { createContext, createElement } from "preact";
import type { ReactElement } from "preact/compat";
import { renderToString } from "preact-render-to-string";
import { Document } from "./components";

type Props = { c: Context };

export const RequestContext = createContext<Context | null>(null);

function createRenderer(c: Context, component?: React.FC<Props>) {
  return async (children: ReactElement, props?: Props) => {
    const node = component ? component({ children, c, ...props }) : children;
    const element = createElement(RequestContext.Provider, { value: c }, node);
    const body = `<!DOCTYPE html>${renderToString(element)}`;
    return c.html(body);
  };
}

const preactRenderer = (component?: React.FC<Props>): MiddlewareHandler =>
  function preactRenderer(c, next) {
    const renderer = createRenderer(c, component);
    c.setRenderer(renderer);
    return next();
  };

export const renderer = preactRenderer(Document);

declare module "hono" {
  interface ContextRenderer {
    // biome-ignore lint/style/useShorthandFunctionType: intended signature
    (children: React.ReactElement, props?: Props): Response | Promise<Response>;
  }
}
