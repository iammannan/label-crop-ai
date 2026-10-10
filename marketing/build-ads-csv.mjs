// Generates Google Ads Editor import files from the plan below.
// Run: node marketing/build-ads-csv.mjs
//
// Outputs (import each in Google Ads Editor -> Account -> Import -> From file):
//   google-ads-keywords.csv   keywords with match type, bid and landing page
//   google-ads-negatives.csv  campaign level negative keywords
//   google-ads-adgroups.csv   ad group default max CPC (clears "no bid" warnings)
//   google-ads-ads.csv        one responsive search ad per ad group
//   google-ads-callouts.csv   callout assets
//   google-ads-sitelinks.csv  sitelink assets
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const SITE = 'https://labelcropai.web.app';
const CAMPAIGN = 'Label Crop AI | Search | India';
const LEADS = 'Label Crop AI | Search | Software Leads';

// Head terms get Exact + Phrase; long tail gets Phrase only (cheaper to manage).
const groups = [
  {
    campaign: CAMPAIGN, adGroup: 'Meesho label crop', landing: '/meesho-label-crop', cpc: 6,
    paths: ['label-crop', 'meesho'],
    head: ['meesho label crop', 'meesho crop label', 'crop meesho label', 'meesho label cropper'],
    tail: [
      'meesho label crop online', 'meesho label crop tool', 'meesho label crop free',
      'meesho shipping label crop', 'meesho label crop 4x6', 'meesho label crop pdf',
      'meesho supplier label crop', 'meesho label print 4x6', 'meesho thermal label print',
      'meesho label invoice separate', 'meesho label cutter', 'meesho label crop website',
      'meesho label crop without watermark', 'meesho label crop a4', 'meesho order label crop',
    ],
    headlines: [
      'Meesho Label Crop - Free', 'Crop Meesho Labels Fast', 'Meesho Label Crop 4x6',
      'Free Meesho Label Cropper', 'No Upload. No Signup.', 'Sort by SKU or Courier',
      'Print 4 Labels per A4', 'Works in Your Browser', 'Marketplace Label Crop', 'Seller Label Crop Tool',
    ],
    descriptions: [
      'Crop Meesho labels above the Fold Here line. 4x6 thermal or A4. Free, no signup.',
      'Runs in your browser - your PDFs never leave your device. Sort by SKU or courier.',
      'Free forever. No watermark, no page limit, no login. Works on mobile and laptop.',
    ],
  },
  {
    campaign: CAMPAIGN, adGroup: 'Flipkart label crop', landing: '/flipkart-label-crop', cpc: 8,
    paths: ['label-crop', 'flipkart'],
    head: ['flipkart label crop', 'flipkart crop label', 'flipkart label cropper', 'label crop flipkart'],
    tail: [
      'flipkart label crop online', 'flipkart label crop tool', 'flipkart label crop free',
      'flipkart shipping label crop', 'flipkart label crop 4x6', 'flipkart label crop pdf',
      'flipkart seller label crop', 'flipkart label print thermal', 'flipkart label invoice crop',
      'flipkart label crop website', 'flipkart label crop a4', 'crop flipkart shipping label',
      'shopsy label crop', 'shopsy label crop online', 'flipkart label cutter',
    ],
    headlines: [
      'Flipkart Label Crop Free', 'Crop Flipkart Labels Fast', 'Flipkart Label Crop 4x6',
      'Split Label & Tax Invoice', '4 Labels per A4 Sheet', 'Free Flipkart Cropper',
      'Shopsy Labels Too', 'No Login Needed', 'Marketplace Label Crop', 'Seller Label Crop Tool',
    ],
    descriptions: [
      'Crop Flipkart and Shopsy labels to 4x6 or A4. Invoice split automatically. Free.',
      'No upload, no login. Barcodes stay sharp on 203 dpi thermal printers.',
      'Sort by SKU or courier, print a picklist, export orders to CSV. All free.',
    ],
  },
  {
    campaign: CAMPAIGN, adGroup: 'Amazon label crop', landing: '/amazon-label-crop', cpc: 8,
    paths: ['label-crop', 'amazon'],
    head: ['amazon label crop', 'amazon crop label', 'amazon label cropper'],
    tail: [
      'amazon shipping label crop', 'amazon label crop online', 'amazon label crop tool',
      'amazon label crop 4x6', 'amazon easy ship label crop', 'amazon label crop pdf',
      'amazon seller label crop', 'amazon label invoice separate', 'crop amazon shipping label',
      'amazon label crop free', 'amazon self ship label crop',
    ],
    headlines: [
      'Amazon Label Crop Free', 'Crop Amazon Labels to 4x6', 'Easy Ship Label Cropper',
      'Keep or Skip Invoices', 'Print 4 Labels per A4', 'No Signup Required',
      'Trim Labels in Seconds', 'Works in Your Browser', 'Marketplace Label Crop', 'Seller Label Crop Tool',
    ],
    descriptions: [
      'Trim Amazon shipping labels to 4x6 or print 4 per A4. Invoices kept or removed.',
      'Free and private - cropping happens in your browser, not on a server.',
      'Drop your PDF and get print-ready labels in seconds. No signup needed.',
    ],
  },
  {
    campaign: CAMPAIGN, adGroup: 'Generic label crop', landing: '/', cpc: 6,
    paths: ['label-crop', 'free'],
    head: ['label crop', 'label cropper', 'label crop tool', 'label crop online', 'quick label crop'],
    tail: [
      'shipping label crop', 'shipping label cropper', 'crop shipping label pdf',
      'label crop pdf', 'pdf label crop', 'label crop free', 'label cropping tool',
      'ecommerce label crop', 'seller label crop tool', 'crop label online free',
      'online label crop tool india', 'label crop software', 'courier label crop',
    ],
    headlines: [
      'Free Label Crop Tool', 'Crop Shipping Labels Free', 'Label Crop for 4x6 & A4',
      'Meesho, Flipkart & Amazon', 'No Upload. No Signup.', 'Print 4 Labels per A4',
      'Sort by SKU or Courier', 'Works in Your Browser', 'Seller Label Crop Tool', 'Ready in Seconds',
    ],
    descriptions: [
      'Crop marketplace shipping labels for thermal or A4 printers. Free and private.',
      'Drop your PDF and get print-ready labels in seconds. Nothing is uploaded.',
      'Free forever - no watermark, no page limit, no login required.',
    ],
  },
  {
    campaign: CAMPAIGN, adGroup: 'Thermal 4x6 sizing', landing: '/', cpc: 7,
    paths: ['label-crop', '4x6'],
    head: ['4x6 label crop', 'crop label to 4x6'],
    tail: [
      '4x6 thermal label crop', 'a4 to 4x6 label converter', 'shipping label resize 4x6',
      'label resize for thermal printer', 'label crop for thermal printer', '100x150 label crop',
      'thermal label print pdf', '4x6 label print pdf', 'convert a4 label to 4x6',
      'shipping label resize tool', 'label size change 4x6 online',
    ],
    headlines: [
      'A4 to 4x6 in Seconds', 'Resize Labels for Thermal', '4x6 Thermal Label Crop',
      'Free Label Resize Tool', 'Fits 100x150 mm Rolls', 'Barcodes Stay Scannable',
      'No Upload. No Signup.', 'Works in Your Browser', 'Seller Label Crop Tool', 'Print 4 Labels per A4',
    ],
    descriptions: [
      'Turn full A4 label pages into 4x6 thermal stickers. Barcodes stay scannable.',
      'Works with TVS, Xprinter, Zebra and TSC printers. Free, no signup.',
      'Crop, rotate and resize labels in your browser. Nothing is uploaded.',
    ],
  },
  {
    campaign: CAMPAIGN, adGroup: 'Invoice split and sorting', landing: '/', cpc: 5,
    paths: ['label-crop', 'invoices'],
    head: ['separate label and invoice pdf'],
    tail: [
      'remove invoice from label pdf', 'label invoice separate tool', 'sku wise label sort',
      'courier wise label sorting', 'picklist generator for sellers', 'meesho picklist generator',
      'sort shipping labels by sku', 'bulk shipping label print tool',
    ],
    headlines: [
      'Split Label & Invoice PDF', 'Remove Invoice Pages', 'Sort Labels by SKU',
      'Courier Wise Sorting', 'Free Picklist PDF', 'Export Orders to CSV',
      'Seller Label Crop Tool', 'No Upload. No Signup.', 'Free Label Crop Tool', 'Ready in Seconds',
    ],
    descriptions: [
      'Separate labels from tax invoices, or print both. Sort by SKU, courier or COD.',
      'Get a SKU wise picklist and an orders CSV with every batch. Free.',
      'Runs in your browser - customer addresses never touch a server.',
    ],
  },
  {
    campaign: LEADS, adGroup: 'Custom software for sellers', landing: '/#software-enquiry', cpc: 25,
    paths: ['business', 'software'],
    head: ['ecommerce seller software india', 'custom software for small business'],
    tail: [
      'inventory software for meesho sellers', 'order management software for flipkart sellers',
      'billing software for online sellers', 'ecommerce automation software india',
      'custom software development for retail business', 'seller panel automation software',
      'inventory and billing software for ecommerce', 'software developer for small business india',
    ],
    headlines: [
      'Custom Software for Sellers', 'Inventory, Billing, Orders', 'Built for Indian Sellers',
      'Tell Us What You Need', 'Free Quote, No Obligation', 'Ecommerce Automation',
      'Dashboards and Reports', 'Websites and Mobile Apps', 'Talk to a Developer', 'Software for Your Business',
    ],
    descriptions: [
      'Custom inventory, billing and order software for ecommerce sellers. Free quote.',
      'Tell us what you need - we reply on email or WhatsApp.',
      'From the team behind Label Crop AI, the free label crop tool for sellers.',
    ],
  },
];

const NEGATIVES = [
  // wrong product or intent
  'apk', 'crack', 'mod apk', 'download software', 'free download', 'template', 'templates',
  'design', 'designer', 'maker', 'generator', 'barcode generator', 'barcode design',
  'sticker printing service', 'sticker paper buy', 'label printer price', 'thermal printer price',
  'printer buy', 'printer repair', 'ribbon', 'label roll price',
  // marketplaces and couriers we do not support yet
  'usps', 'ups', 'fedex', 'dhl', 'royal mail', 'etsy', 'ebay', 'shopify', 'woocommerce',
  'aliexpress', 'temu', 'shein',
  // photo or image cropping, not shipping labels
  'photo crop', 'image crop', 'video crop', 'crop image online', 'passport photo',
  // jobs, learning, unrelated
  'job', 'jobs', 'vacancy', 'salary', 'internship', 'course', 'certification', 'wikipedia',
  'meaning', 'definition',
];

const CALLOUTS = ['100% free', 'No upload', '4x6 and A4', 'SKU sorting', 'Picklist PDF', 'No signup'];

const SITELINKS = [
  ['Meesho label crop', '/meesho-label-crop', 'Crop above the Fold Here line', '4x6 thermal or A4 sheets'],
  ['Flipkart label crop', '/flipkart-label-crop', 'Split label and tax invoice', 'Print 4 per A4 sheet'],
  ['Amazon label crop', '/amazon-label-crop', 'Easy Ship and Self Ship', 'Trim to 4x6 in seconds'],
  ['Usage stats', '/stats', 'Live counters from sellers', 'Labels cropped so far'],
];

// ---------------------------------------------------------------- checks
const problems = [];
const limit = (text, max, what) => { if (text.length > max) problems.push(`${what} is ${text.length} chars (max ${max}): ${text}`); };
for (const g of groups) {
  if (g.headlines.length < 3) problems.push(`${g.adGroup}: needs at least 3 headlines`);
  if (g.descriptions.length < 2) problems.push(`${g.adGroup}: needs at least 2 descriptions`);
  if (new Set(g.headlines).size !== g.headlines.length) problems.push(`${g.adGroup}: duplicate headline`);
  g.headlines.forEach(h => limit(h, 30, `${g.adGroup} headline`));
  g.descriptions.forEach(d => limit(d, 90, `${g.adGroup} description`));
  g.paths.forEach(p => limit(p, 15, `${g.adGroup} path`));
}
CALLOUTS.forEach(c => limit(c, 25, 'callout'));
SITELINKS.forEach(([text, , d1, d2]) => { limit(text, 25, 'sitelink text'); limit(d1, 35, 'sitelink description'); limit(d2, 35, 'sitelink description'); });
if (problems.length) {
  console.error('Google Ads limits exceeded:\n - ' + problems.join('\n - '));
  process.exit(1);
}

// ---------------------------------------------------------------- rows
const keywordRows = [['Campaign', 'Ad Group', 'Keyword', 'Criterion Type', 'Max CPC', 'Final URL']];
for (const g of groups) {
  for (const kw of g.head) {
    keywordRows.push([g.campaign, g.adGroup, `[${kw}]`, 'Exact', g.cpc, SITE + g.landing]);
    keywordRows.push([g.campaign, g.adGroup, `"${kw}"`, 'Phrase', (g.cpc * 0.8).toFixed(2), SITE + g.landing]);
  }
  for (const kw of g.tail) {
    keywordRows.push([g.campaign, g.adGroup, `"${kw}"`, 'Phrase', (g.cpc * 0.7).toFixed(2), SITE + g.landing]);
  }
}

const negRows = [['Campaign', 'Keyword', 'Criterion Type']];
for (const campaign of [CAMPAIGN, LEADS]) {
  for (const n of NEGATIVES) negRows.push([campaign, `"${n}"`, 'Campaign Negative Phrase']);
}

const adGroupRows = [['Campaign', 'Ad Group', 'Max CPC', 'Status']];
for (const g of groups) adGroupRows.push([g.campaign, g.adGroup, g.cpc, 'Enabled']);

const MAX_H = 15, MAX_D = 4;
const adHeader = ['Campaign', 'Ad Group', 'Ad Type', 'Final URL', 'Path 1', 'Path 2'];
for (let i = 1; i <= MAX_H; i++) adHeader.push(`Headline ${i}`);
for (let i = 1; i <= MAX_D; i++) adHeader.push(`Description ${i}`);
adHeader.push('Status');
const adRows = [adHeader];
for (const g of groups) {
  const row = [g.campaign, g.adGroup, 'Responsive search ad', SITE + g.landing, g.paths[0], g.paths[1]];
  for (let i = 0; i < MAX_H; i++) row.push(g.headlines[i] || '');
  for (let i = 0; i < MAX_D; i++) row.push(g.descriptions[i] || '');
  row.push('Enabled');
  adRows.push(row);
}

const calloutRows = [['Campaign', 'Callout text']];
for (const campaign of [CAMPAIGN, LEADS]) for (const c of CALLOUTS) calloutRows.push([campaign, c]);

const sitelinkRows = [['Campaign', 'Sitelink text', 'Final URL', 'Description 1', 'Description 2']];
for (const campaign of [CAMPAIGN, LEADS]) {
  for (const [text, url, d1, d2] of SITELINKS) sitelinkRows.push([campaign, text, SITE + url, d1, d2]);
}

const csv = data => data.map(r => r.map(c => (/[",]/.test(String(c)) ? `"${String(c).replace(/"/g, '""')}"` : c)).join(',')).join('\r\n') + '\r\n';
const out = [
  ['google-ads-keywords.csv', keywordRows],
  ['google-ads-negatives.csv', negRows],
  ['google-ads-adgroups.csv', adGroupRows],
  ['google-ads-ads.csv', adRows],
  ['google-ads-callouts.csv', calloutRows],
  ['google-ads-sitelinks.csv', sitelinkRows],
];
for (const [file, rows] of out) {
  fs.writeFileSync(path.join(dir, file), csv(rows));
  console.log(`${file.padEnd(26)} ${rows.length - 1} rows`);
}
console.log(`\nAd copy checked: every headline <= 30 chars, description <= 90, path <= 15.`);
