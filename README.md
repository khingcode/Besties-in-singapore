# Besties in Singapore

A shared expense tracker for a trip to Singapore. Log who paid, split the bill between any of the group, and see who owes whom, with a one-tap "Mark as paid" when someone settles up.

**Open it:** https://khingcode.github.io/Besties-in-singapore/

On a phone, use **Share → Add to Home Screen** (iPhone, in Safari) or **Install app** (Android, in Chrome). After the first load it opens and works with no wifi or data.

## Features
- Add expenses with amount, description, category, date, who paid and who it was for (equal split, leftover cents handled)
- Settle-up suggestions using the fewest payments, with payment history
- Enter and view amounts in **SGD** (default), **USD** or **PHP**, with editable exchange rates
- Edit or delete any expense or payment
- Works offline once loaded; light and dark themes; built for phones

## Important: where the data lives
This version saves everything **on the phone you use it on**. It works fully offline, but Chichi's, Jiliane's and your phones each keep their own separate list. They do not sync with each other yet. Syncing needs a small online database, which is the next step.

## Files
- `index.html` is the whole app.
- `manifest.webmanifest`, `icon-192.png`, `icon-512.png` make it installable.
- `sw.js` is the service worker that lets it open offline.

Profile photos are not included, because this repository is public. To show them, fill the `PHOTOS` array near the top of the script in `index.html` with small square `data:` image URIs, in the order the travellers are entered during setup.
