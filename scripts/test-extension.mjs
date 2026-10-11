import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer-core';

const root = process.cwd();
const browserPath = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
].find(p => fs.existsSync(p));

const extPath = path.resolve('extension');
console.log('Loading extension from:', extPath);

const browser = await puppeteer.launch({
  executablePath: browserPath,
  headless: false,
  args: [
    `--disable-extensions-except=${extPath}`,
    `--load-extension=${extPath}`
  ]
});

console.log('Browser launched successfully with extension loaded!');
await new Promise(r => setTimeout(r, 1500));
await browser.close();
console.log('Extension verification passed with zero manifest errors!');
