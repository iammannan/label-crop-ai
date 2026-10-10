# Google Ads plan — Label Crop AI

Import files in this folder (Google Ads Editor → Account → Import → From file):

| File | What it is |
| --- | --- |
| `google-ads-keywords.csv` | 123 keywords across 7 ad groups, with match type, starting bid and landing page |
| `google-ads-negatives.csv` | 48 campaign-level negative terms (applied to both campaigns) |
| `google-ads-adgroups.csv` | Default max CPC for each of the 7 ad groups |
| `google-ads-ads.csv` | One responsive search ad per ad group (10 headlines, 3 descriptions each) |
| `google-ads-callouts.csv` | 6 callout assets per campaign |
| `google-ads-sitelinks.csv` | 4 sitelinks per campaign |
| `build-ads-csv.mjs` | Regenerates every CSV after you edit the lists (`node marketing/build-ads-csv.mjs`) |

## Clearing the red and yellow icons in Google Ads Editor

After importing only the keyword file, Editor shows errors because a campaign cannot run without settings
and an ad group cannot run without an ad. Fix in this order:

1. **Import** `google-ads-adgroups.csv`, then `google-ads-ads.csv`, then the callout and sitelink files.
   In the import dialog, if a column is not recognised automatically, map it by hand on the mapping screen.
2. **Select each campaign** and fill the settings the CSV cannot carry:
   - Daily budget: 250 (tool campaign), 200 (software leads)
   - Bid strategy: Maximise clicks, with a maximum CPC bid limit
   - Campaign type: Search. Turn **off** Search partners and Display Network
   - Locations: India. Languages: English and Hindi
   - Status: Enabled, start date today
3. Press **Check changes** in the toolbar. Remaining red icons list exactly what is missing.
4. Press **Post** to upload everything to the live account.

Campaign settings are quicker to set in Editor by hand than by import, because Editor rejects the whole
file if one settings column name is wrong.

## Read this first

The tool is free, so clicks do not earn money by themselves. Two honest ways ads pay off:

1. **Lead generation** — visitors who click "I want software for my business". This is the real revenue path.
2. **Traction** — usage numbers and returning sellers while SEO rankings build.

Your own Semrush export shows CPC near ₹0 for most of these terms and keyword difficulty of only 12–21,
so **SEO will almost certainly beat paid search on cost here**. Suggested split: a small always-on paid
budget (₹200–300/day) on exact-match brand-category terms, and the real effort on ranking the four pages.

## Campaign structure

**Campaign 1 — `Label Crop AI | Search | India`** (the free tool)

| Ad group | Keywords | Landing page |
| --- | --- | --- |
| Meesho label crop | 23 | `/meesho-label-crop` |
| Flipkart label crop | 23 | `/flipkart-label-crop` |
| Amazon label crop | 17 | `/amazon-label-crop` |
| Generic label crop | 23 | `/` |
| Thermal 4x6 sizing | 15 | `/` |
| Invoice split and sorting | 10 | `/` |

**Campaign 2 — `Label Crop AI | Search | Software Leads`** (the enquiry form)

| Ad group | Keywords | Landing page |
| --- | --- | --- |
| Custom software for sellers | 12 | `/#software-enquiry` (opens the enquiry form) |

Keep the two campaigns separate: the tool terms cost a few rupees a click, while business-software terms in
India run ₹20–60+. Mixed together, the expensive clicks would eat the whole budget.

## Settings

- **Networks:** Search only. Turn **off** "Search partners" and "Display Network" at the start.
- **Location:** India. Add Tirupur, Surat, Delhi, Bengaluru, Jaipur, Ludhiana as bid-up areas later — they are seller hubs.
- **Language:** English + Hindi (many Indian sellers browse with Hindi language settings).
- **Bidding:** start on **Maximise clicks** with a max CPC cap (the bids in the CSV). Switch to **Maximise conversions**
  only after conversion tracking records ~30 conversions.
- **Budget:** ₹200–300/day on Campaign 1, ₹200/day on Campaign 2. Review after 2 weeks.
- **Match types:** exact for the 4–5 head terms per group, phrase for everything else. No broad match until
  conversion tracking is live, or you will pay for "photo crop" style searches.

## Ad copy

The live ad text is generated into `google-ads-ads.csv` - one responsive search ad per ad group with 10
headlines and 3 descriptions. To change wording, edit the `headlines` and `descriptions` arrays in
`build-ads-csv.mjs` and re-run it; the script refuses to write a file if any headline goes over 30
characters, any description over 90, or any URL path over 15.

Every ad keeps two brand-free headlines (`Marketplace Label Crop`, `Seller Label Crop Tool`) so it can still
run if a marketplace objects to its name appearing in ad text.
### Assets (extensions)
- **Sitelinks:** Meesho label crop · Flipkart label crop · Amazon label crop · Usage stats
- **Callouts:** 100% free · No upload · 4x6 and A4 · SKU sorting · Picklist PDF · No signup
- **Structured snippet** (type: *Services*): Label crop, Invoice split, SKU sorting, Picklist, CSV export

## Trademark caution

Bidding on "meesho", "flipkart", "amazon" keywords is allowed. Putting those brand names **in the ad text**
is restricted by Google's trademark policy and can be disapproved if the brand owner complains. If that
happens, swap to brand-free headlines such as `Marketplace Label Crop` or `Seller Label Crop Tool` — keep a
couple of those in every ad as insurance. The site already carries a "not affiliated" disclaimer in the footer.

`quick label crop` looks like a competitor's brand name in your Semrush export (navigational intent). Bidding
on it is permitted, but never put it in ad text.

## Conversion tracking (do this before spending much)

Right now the site counts usage in Firestore, which Google Ads cannot see. To optimise ads you need Google's
own tag for two actions:

1. **Labels downloaded** — click on "Download PDF" (primary conversion)
2. **Enquiry sent** — successful submit of the software form (the money conversion)

That needs `gtag.js` added to the site plus two CSP entries (`googletagmanager.com`, `google-analytics.com`).
Send me the Google Ads conversion ID and labels and I will wire both up in about ten minutes.

## Launch checklist

1. Import the keyword, negative, ad group, ad, callout and sitelink CSVs in Google Ads Editor.
2. Set campaign budgets, bid strategy, locations, language and Search-only networks by hand.
3. Press Check changes, fix anything still flagged, then Post.
4. Add conversion tracking (above) before raising budgets.
5. After 2 weeks: check the **Search terms report**, add junk terms as negatives, pause keywords with clicks
   and zero downloads, and raise bids on the ones that convert.
