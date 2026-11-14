// Renders each CV profile page to its PDF in public/.
//   npm run cv:pdf                          all profiles
//   node scripts/cv-pdf.mjs technical-lead  one profile
// Start the site first (npm run dev), or set CV_BASE to another origin.
import { chromium } from 'playwright';

const base = process.env.CV_BASE ?? 'http://localhost:4321/cv/';
const files = {
  'technical-lead': 'Sammy Deveille - Technical Lead - CV.pdf',
  'head-of-engineering': 'Sammy Deveille - Head of Engineering - CV.pdf',
};
const slugs = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(files);

const browser = await chromium.launch();
for (const slug of slugs) {
  if (!files[slug]) throw new Error(`Unknown profile: ${slug}`);
  const out = `public/${files[slug]}`;
  const page = await browser.newPage();
  await page.goto(base + slug, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: out, preferCSSPageSize: true, printBackground: true });
  await page.close();
  console.log(`Wrote ${out}`);
}
await browser.close();
