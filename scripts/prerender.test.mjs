import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('homepage ships profile, involvements, projects, and links in initial HTML', async () => {
  const html = await readFile('dist/index.html', 'utf8');
  assert.ok(html.includes('data-page="home"'));
  for (const section of ['about', 'work', 'involvements', 'projects']) {
    assert.ok(html.includes(`id="${section}"`), `Missing section: ${section}`);
  }
  for (const text of ['Vishnu Kadaba', 'AI Mode', 'NightShift', 'Vice President', 'ML researcher']) {
    assert.ok(html.includes(text), `Missing content: ${text}`);
  }
  assert.ok(html.includes('href="/llms.txt"'));
  assert.match(html, /<noscript>[\s\S]*opacity:\s*1\s*!important/);
  assert.match(html, /<script[^>]*type="module"[^>]*src="\/assets\//);
});

test('404 is prerendered without the homepage header', async () => {
  const html = await readFile('dist/404.html', 'utf8');
  assert.ok(html.includes('data-page="not-found"'));
  assert.ok(html.includes('page not found.'));
  assert.ok(html.includes('content="noindex"'));
  assert.ok(!html.includes('<nav'));
  assert.ok(!html.includes('id="projects"'));
});

test('agent profile remains available as an unchanged static asset', async () => {
  assert.equal(await readFile('dist/llms.txt', 'utf8'), await readFile('public/llms.txt', 'utf8'));
});
