# Hono Preact Starter

Starter template for a Hono app on Cloudflare Workers with Preact frontend.
Get going fast with a simple, minimalistic setup. No magic, no bloat shipped.

## Features

- **Hono** - Fast web framework for Cloudflare Workers
- **Preact** - Lightweight React alternative
- **Wouter** - Minimalist but powerful routing
- **SSR & client-side hydration**

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Deploy to Cloudflare Workers
pnpm deploy
```

## Project Structure

- `src/api.ts` - API routes
- `src/client/` - Frontend application
- `src/middleware/` - SSR middleware
- `src/index.ts` - Main app entry point

## Limitations

Can't have it all, can we?

> [!WARNING]
> Currently doesn't support server-side data fetching & hydration for passed
> down props. This will likely be addressed soon.
