Vishnu's Personal Portfolio

## Development

Run `pnpm dev` for the development server.

## Production

`pnpm build` generates the client assets, then prerenders the same React components
into `dist/index.html` and `dist/404.html`. Content updates in `src` are included
automatically on each build; no separate HTML copy needs maintenance.

The client hydrates this HTML to enable animations and interactions. A no-JavaScript
style fallback makes the content visible without running the animations.
`public/llms.txt` remains a separate static profile and should be kept in sync.

Use `pnpm preview` to inspect the production homepage locally. Vercel serves
`404.html` for missing routes with a 404 status; Vite preview instead uses an SPA
fallback, so visit `/404.html` directly to inspect the prerendered error page.

Run `pnpm test:prerender` after building to check the generated HTML and static profile.
