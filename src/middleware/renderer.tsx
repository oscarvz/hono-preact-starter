import type { Context } from "hono";
import type { MiddlewareHandler } from "hono/types";
import { createContext, type ComponentChildren } from "preact";
import { renderToString } from "preact-render-to-string";
import { Script, ViteClient } from "vite-ssr-components/react";
import { Router } from "wouter-preact";

export const RequestContext = createContext<Context | null>(null);

export const renderer: MiddlewareHandler = (c, next) => {
  c.setRenderer((children) => {
    function Html() {
      return (
        <html lang="en">
          <head>
            <title>Hono Preact Starter</title>
            <ViteClient />
            <Script type="module" src="/src/client/client.tsx" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </head>

          <body>
            <RequestContext.Provider value={c}>
              <Router ssrPath={c.req.path}>{children}</Router>
            </RequestContext.Provider>
          </body>
        </html>
      );
    }

    // Preact doesn't have `use()` implemented yet; go with the `renderToString`
    // approach for now
    const body = `<!DOCTYPE html>${renderToString(<Html />, c)}`;
    return c.html(body);
  });

  return next();
};

declare module "hono" {
  interface ContextRenderer {
    /* biome-ignore lint/style/useShorthandFunctionType: intended signature.
       Props can be typed, such as page title etc. */
    (app: ComponentChildren, props?: unknown): Response | Promise<Response>;
  }
}
