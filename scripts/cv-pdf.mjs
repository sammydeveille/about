// Renders the /cv page to public/Sammy-Deveille-Technical-Lead-CV.pdf
// 1. npm run dev        (in one terminal)
// 2. npm run cv:pdf     (in another)
import { chromium } from 'playwright';

const url = process.env.CV_URL ?? 'http://localhost:4321/cv';
const out = 'public/Sammy Deveille - Technical Lead - CV.pdf';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(url, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: out, preferCSSPageSize: true, printBackground: true });
await browser.close();
console.log(`Wrote ${out}`);
