# Turn on syncing (Firebase, free)

This lets Chichi, Jiliane and Khing share one expense list. It also keeps working offline: changes are saved on the phone and sync when anyone is back online. It uses Firebase's free plan, with no credit card.

## 1. Create the project
1. Go to https://console.firebase.google.com and sign in with a Google account.
2. **Create a project**, name it e.g. `besties-in-singapore`. Turn Google Analytics **off**.

## 2. Turn on the database
1. Left menu: **Build → Firestore Database → Create database**.
2. Pick a location close to you (e.g. `asia-southeast1`, Singapore). Start in **production mode**.
3. Open the **Rules** tab, replace everything with the contents of [`firestore.rules`](firestore.rules), and press **Publish**.

## 3. Turn on sign-in
1. **Build → Authentication → Get started → Sign-in method → Anonymous → Enable → Save**.
2. **Authentication → Settings → Authorized domains → Add domain**: `khingcode.github.io`.

## 4. Get the web app config
1. Click the gear next to **Project Overview → Project settings**.
2. Under **Your apps**, click the **</>** (web) icon, give it any nickname, skip hosting, and register.
3. Copy the `firebaseConfig = { ... }` block it shows.

## 5. Send the config
Paste that block to Claude (it is not secret) and it will go into `firebase-config.js`. Or paste it there yourself, as `window.TRIP_FIREBASE = { ... };`.

## 6. Share the trip link
Each phone needs the trip code once. Open the link `https://khingcode.github.io/Besties-in-singapore/#k=YOUR-TRIP-CODE` on each phone, or install the app first and paste the link or code when it asks. The link is also shown under **Edit rates** inside the app.

Keep the trip code private: anyone who has it can see and change the expenses.
