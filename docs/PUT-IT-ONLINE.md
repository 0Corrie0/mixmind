# Getting the install button to appear

Right now you're opening a file on your computer. Browsers refuse to install anything from a local file — it has to come from a web address. That's a security rule, and there's no way around it.

Once it's online, the install button appears by itself. Ten minutes, no command line.

---

## The fastest route: GitHub Pages

You already have `0corrie0.github.io` set up, so this is familiar ground.

### 1. Make the repository

1. Go to **github.com/new**
2. repository name: `mixmind`
3. Set it to **Public** (Pages needs public on the free plan)
4. Click **Create repository**

### 2. Upload the files

1. On the new repo page, click **uploading an existing file**
2. Drag in these five files:
   - `index.html`
   - `data.js`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
3. Click **Commit changes**

Use `index.html` and `data.js`, not `mixmind-standalone.html`. Same app — the split version is far easier to edit later when you want to change a recipe.

### 3. Switch Pages on

1. **Settings** tab → **Pages** in the left sidebar
2. Under *Source*, choose **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)**
4. **Save**

Wait two or three minutes. Refresh the page and it'll show your address:

```
https://0corrie0.github.io/mixmind/
```

### 4. Install it

**On Android or desktop Chrome:** open that address. The install panel appears on the home screen — tap **Install app**.

**On iPhone:** Safari never shows an install button, no matter what you do. Open the address, tap the **Share** icon at the bottom, scroll down, tap **Add to Home Screen**. The app tells you this itself when it detects an iPhone.

Once installed it opens full screen with no browser bars, and works with no signal.

---

## Checking it worked

1. Open the installed app from your home screen
2. Turn on airplane mode
3. Open it again

If the drinks still load, the offline caching is working properly.

---

## When you change something later

Upload the changed file to GitHub the same way. One catch: the app caches itself aggressively, so bump the version number at the top of `sw.js` each time —

```javascript
const CACHE = "mixmind-v2";   // was v1
```

Without that, phones keep serving the old version and you'll think your changes didn't save.

---

## If you'd rather not use GitHub

**Netlify Drop** — go to `app.netlify.com/drop`, drag the whole folder onto the page. Live in about twenty seconds, no account needed to start. You've used Netlify before. GitHub is better long-term because you can edit files in place, but Drop is the fastest way to see it working on your phone in the next minute.
