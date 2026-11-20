# Besties in Singapore

A shared expense tracker for a trip to Singapore. Log who paid, split the bill between any of the group, and see exactly who owes whom, with a one-tap "Mark as paid" when someone settles up.

## Features
- Add expenses with amount, description, category, date, who paid and who it was for (equal split, leftover cents handled)
- Settle-up suggestions using the fewest payments, with payment history
- Display and enter amounts in **SGD** (default), **USD** or **PHP**, with editable exchange rates
- Edit or delete any expense or payment
- Light and dark themes, built for phones

## Files
- `app/trip-tab.html` is the whole app: one self-contained HTML page.

## How it runs
The page is published as a Claude Artifact and stores its shared data in the artifact's built-in `db` capability (`window.claude.use("db")`), so everyone with Contributor access sees the same list. Opened anywhere else, it shows a "open from the shared link" message because that database isn't available. It needs an internet connection.

Profile photos are not included in this repository. To show them, fill the `PHOTOS` array near the top of the script with small square `data:` image URIs, in the order the travellers are entered during setup.
