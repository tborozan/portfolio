// scripts/purgecss.mjs
// Runs after `ng build` to strip unused Bootstrap CSS rules from the output.
import { PurgeCSS } from 'purgecss';
import { readdir, writeFile, stat } from 'fs/promises';
import { join } from 'path';

const BROWSER_DIR = 'dist/portfolio/browser';

// Find the emitted CSS file (hashed filename)
const files = await readdir(BROWSER_DIR);
const cssFile = files.find(f => f.endsWith('.css'));
if (!cssFile) {
  console.error('No CSS file found in browser output.');
  process.exit(1);
}
const cssPath = join(BROWSER_DIR, cssFile);

const beforeStat = await stat(cssPath);
console.log(`Purging CSS: ${cssFile} (${(beforeStat.size / 1024).toFixed(1)} KB)`);

const result = await new PurgeCSS().purge({
  content: [
    `${BROWSER_DIR}/index.html`,
    `${BROWSER_DIR}/*.js`,
    'src/**/*.html',
    'src/**/*.ts',
  ],
  css: [cssPath],
  safelist: {
    // Keep dynamic Bootstrap classes used via Angular [class] bindings and responsive utilities
    pattern: /^(show|collapse|navbar|bi-.+|d-|flex-|justify-|align-|col-|row|gap-|g-|container|py-|mb-|mt-|me-|ms-|pb-|pt-|pe-|ps-|fw-|fs-|h-|w-|text-|bg-|border|rounded|shadow|btn|badge|card|img-fluid|list-|small|lead|display-|navbar-|nav-|fixed-top|fa|p-)/,
  },
  variables: true,
});

if (result.length === 0) {
  console.error('PurgeCSS returned no results.');
  process.exit(1);
}

await writeFile(cssPath, result[0].css);
const afterStat = await stat(cssPath);
console.log(`Done. ${(beforeStat.size / 1024).toFixed(1)} KB → ${(afterStat.size / 1024).toFixed(1)} KB (-${((1 - afterStat.size / beforeStat.size) * 100).toFixed(0)}%)`);
