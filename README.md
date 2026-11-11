# BK Bakery

A mobile-first, single-page static website for BK Bakery, Mahal, Nagpur.

## Files

- `index.html` — content, metadata and Bakery structured data
- `styles.css` — responsive visual design
- `script.js` — WhatsApp enquiry and optional photo lightbox
- `images/` — add approved bakery photos here

## Run locally

Run `python3 -m http.server 4321 --bind 0.0.0.0` and visit http://localhost:4321/.

## Content checks before launch

- The Google Maps listing shows +91 93260 51248 and 10:30 am–11 pm daily; other directories show different hours. Confirm hours and whether this number receives WhatsApp with the bakery.
- Gallery photos are hotlinked from the matching BK Bakery Zomato listing. Confirm usage rights and ideally replace them with approved local WebP files before launch; third-party links may stop working. The gallery lightbox activates on buttons with `data-gallery-src`, `data-gallery-alt` and `data-gallery-caption` attributes.
- No reviews were supplied, so no review section appears. Only add reviews supplied verbatim by the owner.
- Replace every `SITE_URL` in `index.html` with the public site origin (for example `https://example.com`) after deployment. The prepared `images/share-card.png` is 1200 × 630. Until the absolute URLs point to a public site, WhatsApp and other apps cannot reliably show the card. Instagram uses this metadata when links are shared in supported contexts; a link preview is not the same as an Instagram post.
- Confirm menu, prices, delivery area and minimum order with the bakery.

## Deploy free

**Netlify:** drag the project folder (containing `index.html`, `styles.css`, `script.js` and `images/`) into Netlify Drop, or connect the GitHub repository and set the publish directory to the repository root. No build command is needed.

**GitHub Pages:** push these files to the repository, then in Settings → Pages select “Deploy from a branch”, choose the branch and `/ (root)`, and save. GitHub will provide a `github.io` URL. Keep relative asset paths so the site works in a project subdirectory.
