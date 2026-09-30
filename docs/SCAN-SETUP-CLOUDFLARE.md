# Setting up the shelf scan — click by click

This makes the photo-scanning feature work. Nothing else in the app needs it.

**Do this after the app is hosted, not before.** You need your live web address for step 6.

Roughly five minutes.

---

## What you need first

- A Cloudflare account (free) — `dash.cloudflare.com/sign-up`
- An Anthropic API key — `console.anthropic.com` → **API Keys** → **Create Key**. Copy it immediately; it's shown once. It starts `sk-ant-`.
- Your live app address, e.g. `https://0corrie0.github.io/mixmind`

**Your API key is a payment method.** Anyone who gets it can spend your money. It goes into Cloudflare's secret store in step 5 and nowhere else — never into the app files.

---

## 1. Create the Worker

1. Sign in at **dash.cloudflare.com**
2. Left sidebar → **Compute (Workers)**
3. **Create** button
4. **Start with Hello World!** → **Get started**
5. Name it: `mixmind-assay`
6. **Deploy**

It deploys a placeholder. That's expected — you replace it next.

---

## 2. Paste the real code

1. On the Worker page, click **Edit code** (top right)
2. Select everything in the editor and delete it
3. Paste this in:

```javascript
const ALLOWED = "https://0corrie0.github.io";

export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": ALLOWED,
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS"
    };

    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    if (request.method !== "POST") {
      return new Response("POST only", { status: 405, headers: cors });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: "Bad request" }), { status: 400, headers: cors });
    }

    if (!Array.isArray(body.messages)) {
      return new Response(JSON.stringify({ error: "Bad request" }), { status: 400, headers: cors });
    }

    // Model and token cap are pinned here so nobody can run up the bill
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1000,
        messages: body.messages
      })
    });

    return new Response(res.body, {
      status: res.status,
      headers: { ...cors, "Content-Type": "application/json" }
    });
  }
};
```

4. **Change line 1** to your actual app address. No trailing slash. If you used Netlify it'll look like `https://something-something.netlify.app`.
5. **Deploy** (top right)

---

## 3. Add your API key as a secret

1. Back on the Worker page, **Settings** tab
2. **Variables and Secrets**
3. **Add**
4. Type: **Secret**
5. Variable name: `ANTHROPIC_API_KEY` — exactly that, capitals and underscores
6. Value: paste your `sk-ant-...` key
7. **Deploy**

---

## 4. Turn on rate limiting

Skip this and one person with a script can empty your API credit overnight.

1. **Settings** tab → **Bindings** → **Add** → **Rate limiting**
2. Limit: `20` requests
3. Period: `60` seconds
4. **Deploy**

---

## 5. Copy your Worker address

On the Worker's overview page it looks like:

```
https://mixmind-assay.<your-subdomain>.workers.dev
```

Copy it.

---

## 6. Point the app at it

Open `index.html` in any text editor. Find this line (around line 320, in the `const S = {` block):

```javascript
  endpoint: localStorage.getItem("mixmind.endpoint") || "https://api.anthropic.com/v1/messages"
```

Replace the address with your Worker's:

```javascript
  endpoint: localStorage.getItem("mixmind.endpoint") || "https://mixmind-assay.your-subdomain.workers.dev"
```

Save. Re-upload `index.html` to GitHub or Netlify.

**Also bump the cache version** in `sw.js`, or phones will keep the old file:

```javascript
const CACHE = "mixmind-v2";
```

---

## 7. Test it

Open the live app on your phone → **Scan what you own** → photograph some bottles with the labels facing you.

It should come back with a list of what it found.

---

## If it doesn't work

| What you see | Cause | Fix |
|---|---|---|
| "returned 401" | Key wrong or secret misnamed | Check it's exactly `ANTHROPIC_API_KEY`, and that the key is still active in the Anthropic console |
| "returned 403" | Wrong address on line 1 | Must match your app's address exactly — `https://`, no trailing slash |
| "returned 429" | Rate limit hit | Wait a minute. If it's constant, raise the limit in step 4 |
| "Failed to fetch" | CORS mismatch | Same as 403 — line 1 has to be exact |
| Nothing recognisable found | Photo quality | Labels facing the camera, more light. It reads labels, not shapes |

Check the **Logs** tab on the Worker page — it shows every request and the actual error.

---

## What it costs

Each scan is one image plus a short reply — a fraction of a cent. A thousand scans a month runs to a couple of dollars.

Set a spend limit anyway: **console.anthropic.com** → **Settings** → **Limits**. Put a monthly cap on it. That's your real protection if something goes wrong.
