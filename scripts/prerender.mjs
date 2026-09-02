import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'vite';

// Keep the server bundle outside dist so only static assets are deployed.
const serverDirectory = resolve('node_modules/.cache/portfolio-prerender');
await build({
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: serverDirectory,
    emptyOutDir: true,
    copyPublicDir: false,
    rollupOptions: { output: { entryFileNames: 'entry-server.mjs' } },
  },
});

const { render } = await import(pathToFileURL(resolve(serverDirectory, 'entry-server.mjs')).href);
const template = await readFile('dist/index.html', 'utf8');
const placeholder = '<div id="root"></div>';
assert.ok(template.includes(placeholder), 'Missing prerender root in built HTML');

for (const [pathname, filename, page] of [
  ['/', 'index.html', 'home'],
  ['/404', '404.html', 'not-found'],
]) {
  const content = render(pathname);
  assert.ok(content.length > 0, `Empty prerender for ${pathname}`);
  let html = template.replace(placeholder, () => `<div id="root" data-page="${page}">${content}</div>`);
  if (page === 'not-found') {
    html = html.replace('<title>Vishnu Kadaba</title>', '<title>Page not found | Vishnu Kadaba</title><meta name="robots" content="noindex" />');
  }
  await writeFile(resolve('dist', filename), html);
  console.log(`Prerendered ${filename}`);
}
