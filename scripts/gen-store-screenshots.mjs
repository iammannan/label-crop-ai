import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer-core';

const root = process.cwd();
const browserPath = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
].find(p => fs.existsSync(p));

if (!browserPath) {
  console.error('No Chrome or Edge found to render screenshots');
  process.exit(1);
}

const outDir = path.join(root, 'store-assets', 'screenshots');
const publicOutDir = path.join(root, 'public', 'store-assets');

const svgLogo = fs.readFileSync(path.join(root, 'src', 'static', 'favicon.svg'), 'utf8');

// HTML templates for 1280x800 store promo screenshots
const shots = [
  {
    file: 'screenshot-1-flipkart-label-crop-quick-crop.png',
    title: 'Flipkart Label Crop & Quick Label Crop Tool',
    subtitle: 'Auto-Crop A4 PDF Labels to 4×6 Thermal Printer Size in 1 Click',
    badge: '⚡ Quick Label Crop',
    pills: ['Flipkart Labels', 'Auto-Invoice Cut', '4×6 Thermal', '100% Free'],
    accent: '#2563EB',
    cardTitle: 'Flipkart Auto-Detected (5 Labels Ready)',
    cardDetail: 'Ekart Logistics · COD 5 · Prepaid 0 · 4×6 in (100×150 mm)'
  },
  {
    file: 'screenshot-2-smart-detect-remove-invoices.png',
    title: 'Smart Crop: Remove Invoices Automatically',
    subtitle: 'Separate Shipping Labels from Invoices with Zero Manual Cropping',
    badge: '🤖 Smart AI Detect',
    pills: ['Invoice Remover', 'Courier Sorter', 'SKU Picklist', 'Batch PDF'],
    accent: '#C6F432',
    cardTitle: 'Smart Detect Reading Your PDF...',
    cardDetail: 'Extracts 4×6 shipping tag, deletes invoice, generates clean print roll'
  },
  {
    file: 'screenshot-3-meesho-amazon-flipkart-multi-crop.png',
    title: 'Quick Label Crop for All E-Commerce Marketplaces',
    subtitle: 'One Tool for Meesho, Flipkart, Amazon & Snapdeal Dispatch',
    badge: '📦 Multi-Marketplace',
    pills: ['Meesho 4×6', 'Flipkart 4×6', 'Amazon 4×6', 'Snapdeal 4×6'],
    accent: '#9333EA',
    cardTitle: 'Multi-Batch Marketplace Sorter',
    cardDetail: 'Upload combined dispatches · Auto-sorts by marketplace and courier'
  },
  {
    file: 'screenshot-4-thermal-printer-ready-formats.png',
    title: 'Print-Ready for All 4×6 Thermal Printers',
    subtitle: 'Perfect 203 & 300 DPI Output for TVS, TSC, Zebra, Gprinter & Xprinter',
    badge: '🖨️ Thermal Roll Ready',
    pills: ['4×6 inch (100×150mm)', '4×4 & 3×5 inch', 'A4 Sticker Sheets', 'No Blurriness'],
    accent: '#10B981',
    cardTitle: 'High-Resolution Barcode & QR Output',
    cardDetail: 'Zero pixelation · Scans 100% reliably at courier dispatch pickup'
  }
];

const renderHtml = (item) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1280px;
    height: 800px;
    background: #0B0E14;
    color: #F3F4F6;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 60px 80px;
  }
  .glow {
    position: absolute;
    top: -150px;
    right: -100px;
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, ${item.accent}33 0%, transparent 65%);
    pointer-events: none;
  }
  .glow2 {
    position: absolute;
    bottom: -200px;
    left: -150px;
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, rgba(198, 244, 50, 0.12) 0%, transparent 65%);
    pointer-events: none;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 28px;
    font-weight: 800;
  }
  .brand svg { width: 44px; height: 44px; }
  .brand span { color: #fff; }
  .brand b { color: #C6F432; }
  .top-badge {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 8px 18px;
    border-radius: 999px;
    font-size: 15px;
    font-weight: 600;
    color: #C6F432;
  }
  .main-content {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 60px;
    align-items: center;
    z-index: 2;
    margin: 20px 0;
  }
  .headline-group .kicker {
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: ${item.accent};
    margin-bottom: 16px;
  }
  .headline-group h1 {
    font-size: 46px;
    line-height: 1.15;
    font-weight: 800;
    letter-spacing: -1.2px;
    color: #FFFFFF;
    margin-bottom: 20px;
  }
  .headline-group p {
    font-size: 20px;
    color: #9CA3AF;
    line-height: 1.45;
    margin-bottom: 32px;
  }
  .pills {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .pill {
    background: #171B22;
    border: 1px solid #28303F;
    color: #E5E7EB;
    font-size: 15px;
    font-weight: 600;
    padding: 10px 18px;
    border-radius: 10px;
  }
  .preview-card {
    background: #151922;
    border: 1.5px solid #262D3D;
    border-radius: 20px;
    padding: 32px;
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.6);
    position: relative;
  }
  .card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid #232A38;
  }
  .card-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${item.accent};
  }
  .card-title {
    font-size: 17px;
    font-weight: 700;
    color: #fff;
  }
  .mock-labels {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 24px;
  }
  .mock-label {
    background: #FFFFFF;
    color: #111;
    border-radius: 8px;
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
    box-shadow: 0 4px 14px rgba(0,0,0,0.25);
  }
  .mock-barcode {
    height: 36px;
    background: repeating-linear-gradient(90deg, #111 0 3px, #fff 3px 5px, #111 5px 8px, #fff 8px 11px);
    border-radius: 3px;
  }
  .mock-line {
    height: 8px;
    background: #E5E7EB;
    border-radius: 3px;
  }
  .mock-qr {
    width: 32px;
    height: 32px;
    background: #111;
    border-radius: 3px;
    align-self: flex-end;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: #9CA3AF;
  }
  .card-btn {
    background: #C6F432;
    color: #0E1116;
    font-size: 14px;
    font-weight: 700;
    padding: 10px 20px;
    border-radius: 8px;
    border: none;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #1F2430;
    padding-top: 24px;
    font-size: 15px;
    color: #9CA3AF;
    z-index: 2;
  }
  .security-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #10B981;
    font-weight: 600;
  }
</style>
</head>
<body>
  <div class="glow"></div>
  <div class="glow2"></div>
  
  <header>
    <div class="brand">
      ${svgLogo}
      <span>LabelCrop <b>AI</b></span>
    </div>
    <div class="top-badge">${item.badge}</div>
  </header>

  <div class="main-content">
    <div class="headline-group">
      <p class="kicker">Chrome Extension · E-Commerce Utility</p>
      <h1>${item.title}</h1>
      <p>${item.subtitle}</p>
      <div class="pills">
        ${item.pills.map(p => `<span class="pill">${p}</span>`).join('')}
      </div>
    </div>

    <div class="preview-card">
      <div class="card-header">
        <div class="card-dot"></div>
        <div class="card-title">${item.cardTitle}</div>
      </div>
      <div class="mock-labels">
        <div class="mock-label">
          <div class="mock-line" style="width: 70%;"></div>
          <div class="mock-barcode"></div>
          <div class="mock-line" style="width: 50%;"></div>
          <div class="mock-qr"></div>
        </div>
        <div class="mock-label">
          <div class="mock-line" style="width: 80%;"></div>
          <div class="mock-barcode"></div>
          <div class="mock-line" style="width: 45%;"></div>
          <div class="mock-qr"></div>
        </div>
      </div>
      <div class="card-footer">
        <span>${item.cardDetail}</span>
        <button class="card-btn">Download 4×6 PDF</button>
      </div>
    </div>
  </div>

  <footer>
    <div class="security-badge">
      🔒 100% Client-Side In-Browser Privacy — Zero File Uploads
    </div>
    <div>Official Tool: <strong>labelcropai.web.app</strong></div>
  </footer>
</body>
</html>`;

const browser = await puppeteer.launch({ executablePath: browserPath, headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });

for (const s of shots) {
  await page.setContent(renderHtml(s), { waitUntil: 'load' });
  const p1 = path.join(outDir, s.file);
  const p2 = path.join(publicOutDir, s.file);
  await page.screenshot({ path: p1, omitBackground: false });
  fs.copyFileSync(p1, p2);
  console.log('Generated screenshot (1280x800):', s.file);
}

await browser.close();
console.log('All store screenshots generated successfully!');
