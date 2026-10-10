# Backlink & discovery plan — Label Crop AI

The site itself is technically sound (see `npm run seo-audit`). What a brand-new site lacks is **authority**:
other websites linking to it. A handful of relevant links from places Indian sellers already trust is worth more
than hundreds of random ones.

## Before you start: decide on the domain

Links point at a URL for years. If you plan to move from `labelcropai.web.app` to your own domain
(for example `labelcropai.in`), **do it before building links**, so every link you earn points at the
permanent address. Moving later means asking people to update links, or losing some of their value.

## Week 1 — free, quick wins

| Where | What to do | Why |
| --- | --- | --- |
| Google Search Console | Submit `/sitemap.xml`; use *URL inspection → Request indexing* on the 4 main tool pages | Gets the 23 pages crawled now instead of in weeks |
| Bing Webmaster Tools | *Import from Google Search Console* (2 minutes) | Bing also feeds DuckDuckGo, Yahoo and several AI search tools |
| IndexNow | Run `npm run indexnow` after every deploy | Tells Bing, Yandex and others about changed pages within minutes |
| Google Business Profile | Only if you have a real business address for your software work | Local trust for the "software for my business" side |
| AlternativeTo, SaaSHub | List Label Crop AI as a free alternative to other label croppers | Real users browse these; free listings |
| Product Hunt | Launch with a 30-second screen recording of a Meesho batch being cropped | One-day traffic spike and a lasting link |

## Weeks 2–4 — where Indian sellers actually are

**YouTube (highest value).** Sellers search YouTube for "meesho label kaise print kare thermal printer".
Record short screen videos in Hindi, and ideally Tamil and Telugu too: download the label → drop it into
Label Crop AI → print. Put the matching page link in the first line of the description, for example
`/how-to-print-meesho-label-on-thermal-printer`. Ask seller-education YouTubers if they will feature the tool;
it is free, so there is no conflict for them.

**Quora and seller forums.** Answer existing questions ("How to print Flipkart label without invoice?")
with the actual steps, then link the matching guide. Only answer where the tool genuinely solves the question.

**Facebook and Telegram seller groups.** Links there are usually nofollow, but they bring real users,
and real users create natural links later. Share a before/after image (A4 page → 4×6 label), not just a link.

## Month 2+ — partnerships that earn lasting links

- **Thermal printer and label-roll sellers** on Amazon, Flipkart and IndiaMART: offer your printer setup
  pages (TSC, Xprinter, TVS, Zebra, Gprinter) as a free setup guide for their buyers. A link from their
  product page, manual or support page fits naturally.
- **Seller consultants, account managers and GST/accounting blogs** that write "how to start selling
  on Meesho" guides: pitch a short guest section on dispatch speed with a link to the tool.
- **Your own software work**: every client project that goes live can credit "Built by …" with a link.

## Linkable assets you already have

- The printer setup pages — genuinely useful, printer sellers can point customers to them.
- `/stats` — a live public counter ("X labels cropped by sellers") gives journalists and bloggers a number to quote.
- The A4 sticker-sheet guide — a clear answer for sellers without a thermal printer.

## Do not do

Paid link packages, private blog networks, mass directory submissions, comment spam and large-scale link
exchanges. Google treats these as link spam, and a penalty on a new domain is very hard to recover from.

## How to tell it is working

- **Google Search Console → Links**: referring domains should grow month by month.
- **Search Console → Performance**: impressions for "meesho label crop", "flipkart label crop" and the printer terms.
- The site has no page analytics, so referral traffic is invisible today. If you want to know which YouTube
  video or group sends visitors, a privacy-friendly analytics tool (or a small referrer counter in the existing
  Firestore stats) is the next step.
