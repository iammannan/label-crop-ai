// Page content + SEO metadata. Edit SITE.url before deploying to your real domain
// (or build with: SITE_URL=https://yourdomain.com npm run build).
import { icon } from '../templates/layout.mjs';
import { LANDING_PAGES } from './landing.mjs';

export const SITE = {
  name: 'Label Crop AI',
  url: 'https://labelcropai.web.app',
  verification: [
    'vnPC8jsPF6fEVp71Q8wE5sq-Bo1aErFa_6OSzbbw8nI', // Google Search Console
    'LMS3AOoHfi0_sx1Yclv-TNRC5pz4a_rOPdqwuJNp_jQ',
  ],
  googleAdsId: 'AW-939306740',
  googleAdsConversionLabel: 'AW-939306740/Btw8CO_9wYkdEPTd8r8D',
  googleAdsPageViewLabel: 'AW-939306740/gh_wCO31vpMdEPTd8r8D',
  indexNowKey: '8753d396b94e584e98b10e029edd46ee', // Bing / Yandex / Seznam instant indexing (npm run indexnow)
  features: [
    'Crop Meesho, Flipkart, Amazon and Snapdeal shipping labels',
    '4x6, 4x4, 3x5 thermal rolls, A4 1/2/4/6/8-up and Smart fit layouts',
    'Separate or keep tax invoices',
    'Sort by SKU, courier, payment mode or quantity',
    'Print SKU, quantity, date or custom text on labels',
    'Picklist PDF and orders CSV export',
    'Runs 100% in the browser — no upload',
  ],
};

// ---------------------------------------------------------------- reusable blocks
const steps = (title, items, kicker = 'How it works', id = 'how') => `
<section class="section" id="${id}">
  <div class="container">
    <p class="kicker">${kicker}</p>
    <h2 class="section-title">${title}</h2>
    <ol class="steps-grid">
      ${items.map(([h, p], i) => `<li class="step"><span class="step-n">0${i + 1}</span><h3>${h}</h3><p>${p}</p></li>`).join('')}
    </ol>
  </div>
</section>`;

const features = (title, lede, items) => `
<section class="section section-alt" id="features">
  <div class="container">
    <p class="kicker">Features</p>
    <h2 class="section-title">${title}</h2>
    <p class="section-lede">${lede}</p>
    <div class="feature-grid">
      ${items.map(([ic, h, p]) => `<article class="feature"><span class="feature-icon">${icon(ic)}</span><h3>${h}</h3><p>${p}</p></article>`).join('')}
    </div>
  </div>
</section>`;

const stats = `
<section class="stats-band" aria-label="Highlights">
  <div class="container stats">
    <div class="stat"><b>0 bytes</b><span>of your PDFs leave the device</span></div>
    <div class="stat"><b>9</b><span>print layouts, thermal to A4</span></div>
    <div class="stat"><b>3</b><span>marketplaces in one tool</span></div>
    <div class="stat"><b>&#8377;0</b><span>free, no signup</span></div>
  </div>
</section>`;

const paperTable = (note = '') => `
<section class="section">
  <div class="container split">
    <div>
      <p class="kicker">Print sizes</p>
      <h2 class="section-title">Pick the layout that matches your printer</h2>
      <p class="section-lede">Labels are placed as vector graphics, not screenshots, so barcodes and QR codes stay crisp at any size.${note}</p>
    </div>
    <div class="table-wrap">
      <table class="table">
        <thead><tr><th scope="col">Layout</th><th scope="col">Best for</th><th scope="col">Per page</th></tr></thead>
        <tbody>
          <tr><td><b>4 &times; 6 in</b></td><td>TVS, Xprinter, Zebra, TSC thermal printers (100&times;150 mm rolls)</td><td>1 label</td></tr>
          <tr><td><b>4 &times; 4 in</b></td><td>Square 100&times;100 mm thermal stickers</td><td>1 label</td></tr>
          <tr><td><b>3 &times; 5 in</b></td><td>Compact 75&times;125 mm thermal rolls</td><td>1 label</td></tr>
          <tr><td><b>A4 &middot; 1 up</b></td><td>Invoices or large labels on laser / inkjet printers</td><td>1</td></tr>
          <tr><td><b>A4 &middot; 2 up</b></td><td>Half-sheet A4 sticker paper</td><td>2 labels</td></tr>
          <tr><td><b>A4 &middot; 4 up</b></td><td>Saving paper on normal printers &mdash; cut along the guides</td><td>4 labels</td></tr>
          <tr><td><b>A4 &middot; 6 up</b></td><td>6-division A4 sticker sheets (105 &times; 99 mm each)</td><td>6 labels</td></tr>
          <tr><td><b>A4 &middot; Smart fit</b></td><td>Space-saving 6-up (4 stacked + 2 rotated) &mdash; larger QR codes on plain A4</td><td>6 labels</td></tr>
          <tr><td><b>A4 &middot; 8 up</b></td><td>Squeezing the most labels out of one sheet &mdash; cut along the guides</td><td>8 labels</td></tr>
          <tr><td><b>Original</b></td><td>Exact tight crop at 100% scale, no resizing</td><td>1 label</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>`;

const platformCards = (except) => {
  const cards = [
    ['meesho', '/meesho-label-crop', 'Meesho label crop', 'Crop above the Fold Here line, keep or drop the invoice, sort by SKU, courier or COD.'],
    ['flipkart', '/flipkart-label-crop', 'Flipkart label crop', 'Split Seller Hub labels from the tax invoice and print 4&times;6 or 4 per A4.'],
    ['amazon', '/amazon-label-crop', 'Amazon label crop', 'Trim Easy Ship &amp; Self Ship labels, pair invoices by order ID, print on thermal.'],
    ['snapdeal', '/snapdeal-label-crop', 'Snapdeal label crop', 'Split shipping labels &amp; tax invoices side-by-side, crop for 4&times;6 thermal or A4.'],
  ].filter(c => c[0] !== except);
  return `
<section class="section" id="platforms">
  <div class="container">
    <p class="kicker">${except ? 'More tools' : 'Marketplaces'}</p>
    <h2 class="section-title">${except ? 'Selling on more than one marketplace?' : 'One tool for every marketplace label'}</h2>
    <div class="platform-cards">
      ${cards.map(([id, href, h, p]) => `<a class="platform-card pc-${id}" href="${href}"><span class="pc-dot"></span><h3>${h}</h3><p>${p}</p><span class="more">Open tool ${icon('arrow', 'i i-sm')}</span></a>`).join('')}
    </div>
  </div>
</section>`;
};

const cta = (text = 'Crop your next batch of labels in seconds') => `
<section class="section">
  <div class="container">
    <div class="cta-band">
      <div><h2>${text}</h2><p>No signup. No upload. Works in Chrome, Edge, Firefox and Safari &mdash; on desktop and mobile.</p></div>
      <a class="btn btn-lime btn-lg" href="#tool">${icon('upload')} Choose PDF files</a>
    </div>
  </div>
</section>`;

const commonFeatures = [
  ['spark', 'Smart Detect', 'Reads each page, finds the label and invoice blocks and trims them to the edge automatically &mdash; even when address lengths change the label height.'],
  ['lock', 'Private by design', 'Your PDFs are processed on your own device. Customer names and addresses never touch a server.'],
  ['barcode', 'Scanner-safe barcodes', 'Pages are cropped as vectors, not screenshots. AWB barcodes and QR codes print sharp on 203 dpi thermal printers.'],
  ['sort', 'Sort for faster packing', 'Group labels by SKU, courier partner, COD / prepaid or multi-quantity so packing and handover go quicker.'],
  ['list', 'Picklist &amp; CSV', 'Generate a SKU-wise picklist with totals and a courier handover summary, or export every order to CSV.'],
  ['printer', 'Any printer, any paper', '4&times;6, 4&times;4 and 3&times;5 thermal rolls or A4 with 1, 2, 4, 6 or 8 labels per sheet, with auto-rotate and cut guides.'],
];

const commonFaqs = [
  { q: 'Is Label Crop AI free?', a: 'Yes. Every feature is free with no signup, no watermark and no page limit. Because processing happens in your browser, there are no server costs to pass on to you.' },
  { q: 'Are my label PDFs uploaded anywhere?', a: 'No. The PDF is opened and cropped by JavaScript running on your own device &mdash; the file itself never leaves your browser, and after your first use the tool keeps working even without an internet connection. Nothing is uploaded to our servers.' },
  { q: 'Will the barcode still scan after cropping?', a: 'Yes. Label Crop AI copies the original vector content of the page instead of taking a screenshot, so barcodes, QR codes and text keep their full resolution at any print size.' },
];

// ---------------------------------------------------------------- pages
export const PAGES = [
  {
    path: '/', file: 'index.html', platform: 'auto', tool: true, priority: 1.0, changefreq: 'weekly',
    title: 'Quick Label Crop – Free Flipkart, Meesho & Amazon Tool',
    ogTitle: 'Label Crop AI – Quick Label Crop for Flipkart, Meesho & Amazon',
    description: 'Free quick label crop tool for Flipkart, Meesho & Amazon. Crop shipping label PDFs for 4x6 thermal or A4, separate invoices, sort by SKU. Private & fast.',
    h1: 'Quick label crop for <span class="hl">Flipkart, Meesho &amp; Amazon</span>',
    lede: 'Drop your marketplace label PDF. Smart Detect finds every shipping label and invoice, trims away the white space and lays them out for your 4&times;6 thermal or A4 printer &mdash; fast and 100% private.',
    body: stats + steps('From messy A4 PDF to print-ready labels in three steps', [
      ['Drop your PDFs', 'Download label PDFs from your seller panel and drop one or many here. Multiple files are merged into one print job.'],
      ['Smart Detect crops', 'Every page is scanned for the label, the invoice, SKU, courier and payment mode. Pick paper size, sort order and extras.'],
      ['Download or print', 'Get one clean PDF sized exactly for your printer, plus an optional invoice file, picklist and order CSV.'],
    ]) + features('Everything a busy seller needs at dispatch time', 'Built for sellers who ship dozens or hundreds of orders a day and want labels that print right the first time.', commonFeatures) + platformCards() + paperTable(),
    faqs: [
      ...commonFaqs,
      { q: 'What is Quick Label Crop AI and how does it work?', a: 'Label Crop AI is a free browser-based quick label crop and cutter tool. It reads your marketplace label PDFs (Flipkart, Meesho, Amazon, Snapdeal), automatically crops the shipping label to its border, separates tax invoices, and formats them for 4x6 thermal printers or A4 sheets in seconds.' },
      { q: 'Which marketplaces are supported?', a: 'Meesho, Flipkart, Amazon and Snapdeal label PDFs are detected automatically. Use the <em>Auto-detect</em> tab, or pick the marketplace tab yourself. For other formats, the <em>Adjust crop</em> editor lets you draw the crop area once and apply it to every page.' },
      { q: 'What label size should I use for a thermal printer?', a: '4 &times; 6 inch (100 &times; 150 mm) is the most common size for TVS, Xprinter, Zebra and TSC thermal printers. Choose <b>4 &times; 6 in</b> and keep <b>Auto-rotate</b> on so wide labels fill the sticker.' },
      { q: 'Can I print 4, 6 or 8 labels on one A4 sheet?', a: 'Yes. Choose <b>A4 &middot; 4 up</b> for four labels per sheet, <b>A4 &middot; 6 up</b> for six, or <b>A4 &middot; 8 up</b> to fit eight. Both add dashed cut guides. Four per sheet uses about a quarter of the paper of printing each A4 page as it is; eight per sheet halves that again.' },
      { q: 'Does it work on mobile?', a: 'Yes! Open the site in Chrome or Safari on your phone, choose the PDF from your downloads and share or print the result. You can also install our dedicated <b><a href="https://play.google.com/store/apps/details?id=ecom.label.crop.tool&hl=en" target="_blank" rel="noopener">Label Crop Tool for e-Commerce app on Google Play</a></b> for 1-tap cropping and direct Bluetooth thermal printer printing.' },
    ],
    after: cta(),
  },
  {
    path: '/meesho-label-crop', file: 'meesho-label-crop.html', platform: 'meesho', tool: true, nav: 'Meesho', crumb: 'Meesho label crop', priority: 0.9,
    appName: 'Meesho Label Crop – Label Crop AI',
    title: 'Meesho Label Crop & Meesho Crop PDF Tool | Label Crop AI',
    ogTitle: 'Meesho Crop PDF & Shipping Label Cutter – Label Crop AI',
    description: 'Meesho crop PDF & shipping label cutter. Crop Meesho labels for 4x6 thermal or A4 in 1 click, split tax invoices, sort by SKU and courier. Free & private.',
    h1: 'Meesho label crop, <span class="hl">done in one click</span>',
    lede: 'Drop the label PDF from your Meesho Supplier Panel. Smart Detect cuts each label right above the <em>Fold Here</em> line, separates the tax invoice below it and lays everything out for your thermal or A4 printer.',
    eyebrow: 'Meesho crop PDF &middot; Smart Detect &middot; 4&times;6 ready',
    body: stats + steps('How to crop Meesho labels', [
      ['Download from Meesho', 'In the Meesho Supplier Panel, open <b>Orders &rarr; Ready to Ship</b> and download the label PDF. Each A4 page holds one label and its tax invoice.'],
      ['Drop it here', 'Smart Detect finds the label above the Fold Here line on every page and reads the SKU, size, qty, colour, courier and COD / prepaid status.'],
      ['Print', 'Choose 4&times;6 thermal, 4&times;4 or A4 4-up, sort by SKU or courier, then download or print directly.'],
    ], 'Meesho guide') + `
<section class="section section-alt">
  <div class="container split">
    <div>
      <p class="kicker">What Smart Detect reads</p>
      <h2 class="section-title">Every Meesho label, understood</h2>
      <p class="section-lede">Meesho label heights change with the length of the customer address. Instead of a fixed crop box, Label Crop AI measures each page, so long addresses are never cut off and short ones don't waste sticker space.</p>
    </div>
    <ul class="checklist">
      <li>${icon('check', 'i i-sm')} Label cropped tight, above the <em>Fold Here</em> line</li>
      <li>${icon('check', 'i i-sm')} Tax invoice separated &mdash; keep, drop or print it on A4</li>
      <li>${icon('check', 'i i-sm')} SKU, size, quantity, colour and order number from <em>Product Details</em></li>
      <li>${icon('check', 'i i-sm')} Courier: Valmo, Delhivery, Shadowfax, Xpress Bees, Ecom Express</li>
      <li>${icon('check', 'i i-sm')} COD vs prepaid, so you can batch cash orders together</li>
      <li>${icon('check', 'i i-sm')} Multi-quantity orders flagged with a black QTY tag</li>
    </ul>
  </div>
</section>` + paperTable(' For Meesho, 4&times;6 with auto-rotate prints the wide label at the largest size.') + platformCards('meesho'),
    faqs: [
      { q: 'How does the Meesho crop PDF tool work?', a: 'Simply drop your Meesho shipping label PDF. Smart Detect automatically cuts each page above the Fold Here line, trims side margins, isolates the shipping label, and generates a print-ready 4x6 thermal PDF.' },
      { q: 'How do I crop Meesho labels for a thermal printer?', a: 'Drop your Meesho label PDF above, choose <b>Labels</b> and <b>4 &times; 6 in</b>, keep <b>Auto-rotate</b> on and click <b>Download PDF</b>. Every label is cropped above the Fold Here line and scaled to fill a 4&times;6 sticker.' },
      { q: 'Can I keep the Meesho invoice?', a: 'Yes. Choose <b>Label + invoice</b> to print each invoice right after its label, or click <b>Invoices (A4)</b> to download all invoices as a separate A4 file.' },
      { q: 'Which Meesho couriers are supported for sorting?', a: 'Smart Detect recognizes all Meesho courier partners: Valmo, Delhivery, Shadowfax, Xpressbees, and Ecom Express. You can batch and sort orders by courier in one click before generating the picklist.' },
      { q: 'Why is the Meesho label rotated on 4&times;6?', a: 'Meesho labels are wider than they are tall. Rotating them 90&deg; lets the label fill a 4&times;6 sticker at a much larger size, which makes the barcode easier to scan. Turn off <b>Auto-rotate</b> if you prefer it upright.' },
      { q: 'Can I merge several Meesho label files?', a: 'Yes. Select or drop multiple PDFs at once &mdash; they are merged into a single, sorted print file.' },
      ...commonFaqs,
    ],
    after: cta('Crop today\'s Meesho labels now'),
  },
  {
    path: '/flipkart-label-crop', file: 'flipkart-label-crop.html', platform: 'flipkart', tool: true, nav: 'Flipkart', crumb: 'Flipkart label crop', priority: 0.9,
    appName: 'Flipkart Label Crop – Label Crop AI',
    title: 'Flipkart Label Crop & Shipping Label Cutter | Label Crop AI',
    ogTitle: 'Flipkart Label Crop & Shipping Label Cutter – 4x6 Thermal',
    description: 'Free Flipkart label crop & cutter tool. Crop Seller Hub shipping labels for 4x6 thermal printers or A4, split tax invoice, sort by SKU. Free, no upload.',
    h1: 'Flipkart label crop for <span class="hl">4&times;6 thermal &amp; A4</span>',
    lede: 'Flipkart label PDFs put a small shipping label on top of a full-width tax invoice. Drop the file and Smart Detect splits them, trims the label to its border and sizes it for your printer.',
    eyebrow: 'Flipkart shipping label cutter &middot; 4&times;6 thermal',
    body: stats + steps('How to crop Flipkart labels', [
      ['Download from Seller Hub', 'In Flipkart Seller Hub, generate and download the shipping labels for your packed orders as a PDF.'],
      ['Drop it here', 'Smart Detect finds the label above the <em>Tax Invoice</em> on every page, crops it to the edge and reads SKU, quantity, courier and payment type.'],
      ['Print', 'Pick 4&times;6 for thermal printers or A4 4-up for normal printers, sort by SKU, then download or print.'],
    ], 'Flipkart guide') + `
<section class="section section-alt">
  <div class="container split">
    <div>
      <p class="kicker">Why sellers switch</p>
      <h2 class="section-title">Stop printing half-empty A4 sheets</h2>
      <p class="section-lede">A Flipkart label uses roughly a third of an A4 page. Cropping it to 4&times;6 saves paper and toner, and sticks neatly on any poly bag or box.</p>
    </div>
    <ul class="checklist">
      <li>${icon('check', 'i i-sm')} Label and tax invoice split automatically</li>
      <li>${icon('check', 'i i-sm')} Keep invoices after each label or download them as A4</li>
      <li>${icon('check', 'i i-sm')} Sort by SKU, courier (Ekart, Delhivery, Shadowfax&hellip;) or COD</li>
      <li>${icon('check', 'i i-sm')} SKU-wise picklist PDF for faster picking</li>
      <li>${icon('check', 'i i-sm')} Print SKU, quantity or custom text under every label</li>
      <li>${icon('check', 'i i-sm')} <em>Adjust crop</em> editor for unusual label formats</li>
    </ul>
  </div>
</section>` + paperTable() + platformCards('flipkart'),
    faqs: [
      { q: 'How do I crop a Flipkart label to 4&times;6 or A6 size?', a: 'Drop your Flipkart label PDF, choose <b>Labels</b> and <b>4 &times; 6 in</b>, then click <b>Download PDF</b>. The label is separated from the tax invoice and scaled to fill a 4&times;6 (A6 equivalent) sticker.' },
      { q: 'How do I remove the tax invoice from Flipkart labels?', a: 'By default, selecting <b>Labels</b> removes the tax invoice completely. If you need invoices for records or inside parcels, choose <b>Label + invoice</b> or click <b>Invoices (A4)</b>.' },
      { q: 'Can I use this as an online Flipkart label cutter for free?', a: 'Yes. Label Crop AI is a 100% free online Flipkart label cutter. There is no software installation, no daily page limit, and no watermark.' },
      { q: 'Does it support Shopsy and Ekart courier orders?', a: 'Yes. Shopsy orders and Flipkart shipments via Ekart, Shadowfax, Delhivery and other couriers are fully recognized with automatic courier sorting.' },
      { q: 'Can I print 4 Flipkart labels on one A4 page?', a: 'Yes. Choose <b>A4 &middot; 4 up</b>. Four labels are placed on each sheet with dashed cut guides.' },
      { q: 'The crop looks off for my Flipkart file. What can I do?', a: 'Click <b>Adjust crop</b>, drag the box over the label on the sample page and press <b>Apply to all pages</b>. The same area is used for every page in the file.' },
      ...commonFaqs,
    ],
    after: cta('Crop your Flipkart labels now'),
  },
  {
    path: '/amazon-label-crop', file: 'amazon-label-crop.html', platform: 'amazon', tool: true, nav: 'Amazon', crumb: 'Amazon label crop', priority: 0.9,
    appName: 'Amazon Label Crop – Label Crop AI',
    title: 'Amazon Label Cropper – Free Crop Label Tool | Label Crop AI',
    ogTitle: 'Amazon Label Cropper & Easy Ship Label Tool – Label Crop AI',
    description: 'Free Amazon label cropper for Easy Ship & Self Ship. Crop label PDFs for 4x6 thermal printers, separate invoice pages, sort by SKU. Private & instant.',
    h1: 'Amazon label crop for <span class="hl">thermal printers</span>',
    lede: 'Amazon shipping label PDFs waste most of every A4 page. Drop yours and Smart Detect trims each label to its edge, matches invoices to labels by order ID and sizes everything for 4&times;6 or A4.',
    eyebrow: 'Amazon label cropper &middot; Easy Ship &amp; Self Ship',
    body: stats + steps('How to crop Amazon labels', [
      ['Download from Seller Central', 'From <b>Manage Orders</b>, print or download the shipping labels (and invoices) for your orders as a PDF.'],
      ['Drop it here', 'Smart Detect separates label pages from invoice pages, trims each label and reads the order ID and SKU.'],
      ['Print', 'Pick 4&times;6 thermal or A4 4-up, choose whether to include invoices, then download or print.'],
    ], 'Amazon guide') + `
<section class="section section-alt">
  <div class="container split">
    <div>
      <p class="kicker">Built for Amazon India sellers</p>
      <h2 class="section-title">Labels and invoices, finally in order</h2>
      <p class="section-lede">Label Crop AI recognises invoice pages (Tax Invoice / Bill of Supply) and pairs each one with its label using the Amazon order ID, so sorted output never mixes up parcels.</p>
    </div>
    <ul class="checklist">
      <li>${icon('check', 'i i-sm')} Trims white space around every shipping label</li>
      <li>${icon('check', 'i i-sm')} Detects invoice pages and pairs them by order ID</li>
      <li>${icon('check', 'i i-sm')} Print labels only, labels + invoices, or invoices only</li>
      <li>${icon('check', 'i i-sm')} 4&times;6, 4&times;4, 3&times;5 thermal and A4 1/2/4-up</li>
      <li>${icon('check', 'i i-sm')} Orders CSV with order ID, SKU and page numbers</li>
      <li>${icon('check', 'i i-sm')} <em>Adjust crop</em> for custom or self-ship formats</li>
    </ul>
  </div>
</section>` + paperTable() + platformCards('amazon'),
    faqs: [
      { q: 'How does the Amazon label cropper separate labels and invoices?', a: 'Smart Detect recognizes label pages and invoice pages (Bill of Supply / Tax Invoice), trims each shipping label to 4x6, and pairs invoices with orders by matching the Amazon Order ID.' },
      { q: 'How do I crop Amazon shipping labels for a 4&times;6 printer?', a: 'Drop the Amazon label PDF, choose <b>Labels</b> and <b>4 &times; 6 in</b>, and click <b>Download PDF</b>. Each label is trimmed to its edge and scaled to fill the sticker.' },
      { q: 'Does it remove the Amazon invoice pages?', a: 'With <b>Labels</b> selected, invoice pages are left out. Choose <b>Label + invoice</b> to keep each invoice after its label, or <b>Invoices (A4)</b> to download them separately.' },
      { q: 'Does it work with Amazon Easy Ship and Self Ship labels?', a: 'Smart Detect works from what is printed on the page, so it handles the common Amazon India label layouts. If a format is unusual, use <b>Adjust crop</b> once and apply it to all pages.' },
      ...commonFaqs,
    ],
    after: cta('Crop your Amazon labels now'),
  },
  {
    path: '/snapdeal-label-crop', file: 'snapdeal-label-crop.html', platform: 'snapdeal', tool: true, nav: 'Snapdeal', crumb: 'Snapdeal label crop', priority: 0.9,
    appName: 'Snapdeal Label Crop – Label Crop AI',
    title: 'Snapdeal Label Crop – Free 4x6 Label Cropper | Label Crop AI',
    description: 'Free Snapdeal label crop tool. Split shipping labels & tax invoices side-by-side, crop for 4x6 thermal or A4, sort by SKU & courier. Free & private.',
    h1: 'Snapdeal label crop for <span class="hl">4&times;6 thermal &amp; A4</span>',
    lede: 'Snapdeal label PDFs place the shipping label and tax invoice side-by-side on each sheet. Drop your PDF and Smart Detect splits them cleanly for your thermal or A4 printer.',
    eyebrow: 'Snapdeal label cropper &middot; Smart Detect',
    body: stats + steps('How to crop Snapdeal labels', [
      ['Download from Seller Panel', 'In Snapdeal Seller Panel, download your ready-to-ship order labels as a PDF. Each page holds a shipping label on the left and a tax invoice on the right.'],
      ['Drop it here', 'Smart Detect automatically splits the left label box from the right invoice box, trims borders and reads the SKU, size, courier and payment mode.'],
      ['Print', 'Choose 4&times;6 thermal or A4 4-up, sort by SKU or courier, then download or print directly.'],
    ], 'Snapdeal guide') + `
<section class="section section-alt">
  <div class="container split">
    <div>
      <p class="kicker">Side-by-side splitting</p>
      <h2 class="section-title">Labels and invoices separated instantly</h2>
      <p class="section-lede">Snapdeal prints both the shipping label and the tax invoice on the top half of each sheet. Smart Detect cuts down the middle to isolate the label and invoice boxes cleanly.</p>
    </div>
    <ul class="checklist">
      <li>${icon('check', 'i i-sm')} Shipping label on the left cropped tight to its border</li>
      <li>${icon('check', 'i i-sm')} Tax invoice on the right separated &mdash; keep, drop or print on A4</li>
      <li>${icon('check', 'i i-sm')} Courier detection: Delhivery, Shadowfax, Xpressbees and more</li>
      <li>${icon('check', 'i i-sm')} COD vs prepaid recognition to batch cash orders</li>
      <li>${icon('check', 'i i-sm')} SKU, size, color and suborder code extraction for picklists</li>
      <li>${icon('check', 'i i-sm')} <em>Adjust crop</em> editor to fine-tune the crop box on any page</li>
    </ul>
  </div>
</section>` + paperTable() + platformCards('snapdeal'),
    faqs: [
      { q: 'How do I crop Snapdeal labels for a 4&times;6 thermal printer?', a: 'Drop your Snapdeal PDF above, choose <b>Labels</b> and <b>4 &times; 6 in</b>, and click <b>Download PDF</b>. Smart Detect separates the left shipping label from the right tax invoice and scales it to fill a 4&times;6 sticker.' },
      { q: 'Can I print both the Snapdeal label and tax invoice?', a: 'Yes. Select <b>Label + invoice</b> to print each invoice directly after its label, or click <b>Invoices (A4)</b> to download all invoices as a separate A4 file for packing inside the parcel.' },
      { q: 'Can I print 4 Snapdeal labels on one A4 sheet?', a: 'Yes. Choose <b>A4 &middot; 4 up</b> (or 2-up, 6-up, 8-up). Labels are placed on the sheet with dashed cut guides to save paper and toner.' },
      { q: 'Can I sort Snapdeal labels by courier or SKU?', a: 'Yes. Use <b>Sort orders</b> to group labels by courier (Shadowfax, Delhivery...), SKU variant or COD / prepaid. You can also generate a SKU-wise picklist PDF.' },
      ...commonFaqs,
    ],
    after: cta('Crop your Snapdeal labels now'),
  },
  ...LANDING_PAGES,
  {
    path: '/about', file: 'about.html', crumb: 'About', priority: 0.3,
    title: 'About Label Crop AI – Free Label Cropper for Indian Sellers',
    description: 'Label Crop AI is a free, privacy-first label crop tool for Meesho, Flipkart and Amazon sellers. Learn how it works and why it runs in your browser.',
    h1: 'About Label Crop AI',
    lede: 'A fast, free and private way for marketplace sellers to print shipping labels.',
    body: `
<h2>Why we built it</h2>
<p>Every marketplace hands sellers a different label PDF &mdash; usually an A4 page with a small label, an invoice and a lot of white space. Printing that on a thermal printer means cropping every page by hand. Label Crop AI turns that chore into a single drag-and-drop.</p>
<h2>How Smart Detect works</h2>
<p>When you drop a PDF, Label Crop AI reads the text layout of each page to find landmarks such as the <em>Fold Here</em> line or the <em>Tax Invoice</em> heading, then measures where the printed content actually is to trim each label and invoice to its edges. Order details such as SKU, quantity, courier and payment mode are read from the label text, so you can sort and generate picklists.</p>
<h2>Private by design</h2>
<p>All of this happens in your browser using open-source PDF libraries (Mozilla pdf.js and pdf-lib). Your files are never uploaded, which keeps customer addresses safe and makes the tool fast even on slow connections.</p>
<h2>Independent tool</h2>
<p>Label Crop AI is not affiliated with Meesho, Flipkart or Amazon. Marketplace names are used only to describe which label formats the tool supports.</p>`,
  },
  {
    path: '/privacy', file: 'privacy.html', crumb: 'Privacy', priority: 0.3,
    title: 'Privacy Policy – Label Crop AI',
    description: 'Label Crop AI processes shipping label PDFs entirely in your browser. No files, addresses or order data are uploaded, stored or shared.',
    h1: 'Privacy policy',
    lede: 'Short version: your PDFs never leave your device.',
    body: `
<h2>Files you open</h2>
<p>PDF files you select or drop into Label Crop AI are read and processed locally by JavaScript in your web browser. They are not uploaded to our servers or to any third party, and they are discarded when you close or reload the page.</p>
<h2>Data we store</h2>
<p>Your tool preferences (for example paper size and sort order) are saved in your browser's local storage so they are remembered next time. They never leave your device and you can clear them at any time from your browser settings.</p>
<h2>Zero server uploads</h2>
<p>Label Crop AI processes everything locally on your device. We do not track, collect, or upload any file contents, order numbers, customer names, or usage counters.</p>

<h2>If you send a business enquiry</h2>
<p>When you use the <em>I want software for my business</em> form, your details are used only to respond to your specific enquiry. They are never published on the site, sold or shared with anyone else.</p>

<h2>Third-party services</h2>
<p>The open-source PDF libraries are delivered by the jsDelivr CDN. The CDN does not receive your PDF files.</p>
<h2>Cookies</h2>
<p>Label Crop AI does not set advertising or tracking cookies.</p>
<h2>Changes</h2>
<p>If this policy changes, the updated version will be published on this page.</p>`,
  },
  {
    path: '/404', file: '404.html', crumb: 'Error 404', noindex: true,
    title: 'Page not found – Label Crop AI',
    description: 'The page you were looking for does not exist.',
    h1: 'This page got cropped out',
    lede: 'The link may be broken or the page may have moved.',
    body: `<p><a class="btn btn-dark" href="/">Go to the label crop tool</a></p>
<p>Or jump straight to the <a href="/meesho-label-crop">Meesho</a>, <a href="/flipkart-label-crop">Flipkart</a> or <a href="/amazon-label-crop">Amazon</a> label crop tool.</p>`,
  },
];
