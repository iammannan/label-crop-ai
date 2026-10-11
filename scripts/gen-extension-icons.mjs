import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer-core';

const root = process.cwd();
const browserPath = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
].find(p => fs.existsSync(p));

if (!browserPath) {
  console.error('No Chrome or Edge found to render icons');
  process.exit(1);
}

const svg = fs.readFileSync(path.join(root, 'src', 'static', 'favicon.svg'), 'utf8');
const iconHtml = (pad) => `<!doctype html><html><body style="margin:0;background:${pad ? '#0E1116' : 'transparent'}">
<div style="width:100vw;height:100vh;display:grid;place-items:center">${svg.replace('<svg ', `<svg style="width:${pad ? 78 : 100}vw;height:${pad ? 78 : 100}vw" `)}</div></body></html>`;

const browser = await puppeteer.launch({ executablePath: browserPath, headless: true });
const page = await browser.newPage();
for (const s of [16, 48, 128]) {
  await page.setViewport({ width: s, height: s, deviceScaleFactor: 1 });
  await page.setContent(iconHtml(true), { waitUntil: 'load' });
  await page.screenshot({ path: path.join(root, 'extension', 'icons', `icon-${s}.png`), omitBackground: false });
  console.log(`Generated icon-${s}.png`);
}
await browser.close();
console.log('All extension icons successfully generated!');
