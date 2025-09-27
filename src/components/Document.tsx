import type { PropsWithChildren } from "preact/compat";
import { Script, ViteClient } from "vite-ssr-components/react";

export function Document({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <ViteClient />
        <Script type="module" src="/src/client.tsx" />
      </head>
      <body>{children}</body>
    </html>
  );
}
