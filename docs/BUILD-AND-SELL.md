# MixMind — deployment, positioning and the honest risks

---

## What exists right now

| File | What it is |
|---|---|
| `index.html` | The whole app. No framework, no build step, no dependencies |
| `data.js` | 90 drinks — 70 canon, 11 house originals, 9 zero proof. Plus shelf groups and ingredient aliasing |
| `manifest.json` + `sw.js` | Installs to a home screen, works offline |
| `icon-512.png` / `icon-192.png` | App icons |
| `MIDJOURNEY-PACK.md` | Every image prompt, ready to run |

**Working features:** base-spirit dial, filter by family/profile/era, full recipe cards with ml/oz toggle and serving scaler, shelf inventory in localStorage, "ready now" matching, "one bottle away" upsell, AI bottle scanning, host mode with batch quantities and shopping list.

---

## Deploy it

Same pattern as Life's Planning:

```bash
git init && git add . && git commit -m "MixMind v1"
git branch -M main
git remote add origin https://github.com/0corrie0/mixmind.git
git push -u origin main
```

Settings → Pages → deploy from `main` / root. Live at `https://0corrie0.github.io/mixmind/` within a couple of minutes.

Test it on your phone, add to home screen, then turn on airplane mode and open it again. If it loads, the service worker is working.

---

## The API key problem — do this before anyone else uses it

The scan currently posts to `https://api.anthropic.com/v1/messages` with no key. That works inside a Claude artifact, where the key is injected for you. **It will fail on GitHub Pages**, and the fix is not to paste your key into `index.html` — a key in client-side JavaScript is a key anyone can read and spend.

You need a proxy. Cloudflare Workers, which you've used before:

```javascript
export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": "https://0corrie0.github.io",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS"
    };
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    if (request.method !== "POST") return new Response("Nope", { status: 405 });

    const body = await request.json();
    // Pin the model and cap tokens server-side so nobody can run up your bill
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
    return new Response(res.body, { status: res.status, headers: { ...cors, "Content-Type": "application/json" } });
  }
};
```

Set `ANTHROPIC_API_KEY` as a Worker secret (`wrangler secret put ANTHROPIC_API_KEY`), then in the app:

```javascript
endpoint: localStorage.getItem("mixmind.endpoint") || "https://mixmind-assay.<your-subdomain>.workers.dev"
```

Add rate limiting before launch — Cloudflare's built-in rules are enough. Without it, one person with a script can spend a lot of your money overnight.

**Cost per scan:** roughly one image plus a short response, so a fraction of a cent. At 5,000 scans a month you're looking at single-digit dollars. It's cheap, but only while it's yours to control.

---

## The market you're entering

I looked at what's out there. It's crowded but the leaders have a specific gap.

| App | Model | Position |
|---|---|---|
| Mixel | ~$12 one-time | Biggest library, best-looking, iOS only |
| Home Bar Hero | Free + optional upgrade | AI bottle scanning, recipe matching, AI bartender |
| Cocktail Flow | $4.99/mo or $24.99/yr | Filter by spirit, colour, strength; paywalls the library |
| Highball | Free | Beautiful notebook for recipes you already know |
| BarGPT / Elixiary | AI-first | Generates recipes rather than curating them |

Two things are true. First, **AI bottle scanning is no longer a differentiator** — Home Bar Hero already leads on it and gives it away free. Second, **nobody has solved hosting.** Every app answers "what can I drink tonight". None of them answer "twenty people are arriving on Friday, what do I buy and how much ice do I need".

**That is your wedge, and it happens to be the thing you actually have expertise in.** The bar station sheet from Layla's birthday — batching, ice per person, prep-the-day-before, glassware counts, put the zero-proof drinks out at the same time — is the content nobody else has bothered to write. Lead with it.

**Positioning:** *the cocktail app for people who host.* Not "2,500 recipes". ninety you'll actually make, and the numbers for feeding a room.

---

## Pricing

Don't do a subscription. Cocktail apps are used in bursts — someone hosts twice a month — and a recurring charge for something used twice a month has brutal churn. Cocktail Flow charges $4.99/mo and it's the most complained-about thing in its reviews.

**Recommended: one-time unlock at $8.99 / AED 33.**

Undercuts Mixel at $12 while being clearly a real product rather than a free-with-ads one.

| Free | Paid |
|---|---|
| All 70 canon drinks | 11 house originals |
| Shelf inventory + "ready now" | Host mode: batching, shopping lists, ice maths |
| Browse and filter | The scan (unlimited scans) |
| | Save your own recipes |

The free tier has to be genuinely useful or you get uninstalled before anyone sees the paywall. 70 properly-written classics is a real product. The paid tier is what someone reaches for when guests are coming — which is exactly the moment people spend money.

The scan costs you real money per use, so it belongs behind the unlock. Give three free scans as a trial.

---

## Getting it into the stores

It's a PWA, which is the fast path and the constrained one.

**Google Play:** wrap it with [Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap) into a Trusted Web Activity. This works well, takes an afternoon, and Google is comfortable with it. ~$25 one-time developer fee.

**Apple App Store:** harder. Apple rejects thin web wrappers under guideline 4.2. You need either a genuine native shell with native features (camera, share sheet, widgets, offline storage) or a rebuild in React Native / SwiftUI. $99/year.

**My recommendation:** ship the PWA on your own domain first. Let people install from the browser. If it gets traction, Play Store next, App Store only once revenue justifies the rebuild. Getting 500 people using a web app teaches you more than three months of App Store paperwork.

---

## Legal, plainly

**Recipes.** Ingredient lists and functional instructions aren't protected by copyright — that's settled law. Creative expression around them is: headnotes, descriptions, curation, the specific phrasing. Every word in `data.js` is original to this project, and the specs are the widely-published standards. **You're clean.**

**The Alchemist Cocktail Book.** Its recipes are original creative work owned by a UK bar chain. Nothing from it is in this app, and nothing should be. Their chapter structure was a useful signpost — that's an idea, and ideas aren't protected. Their signature builds are.

**Trademark.** Don't call it "The Alchemist", don't use "master the dark arts of mixology", don't imitate their visual identity. The chain is actively trading in the UK. MixMind is a distinct name and a distinct look, which is why I went there.

**Alcohol content.** Both app stores rate alcohol apps 17+/18+. Some jurisdictions restrict alcohol advertising entirely — **this matters for you specifically, since UAE alcohol marketing rules are strict.** Get local advice before running any paid promotion from a Dubai-registered entity. Distribution through the stores to other markets is generally fine; advertising locally is where the risk sits.

**Liability.** Add a line before launch: activated charcoal in the Charcoal Gin Sour can interfere with medication, and raw egg white carries a salmonella risk for anyone pregnant, elderly or immunocompromised. Both are already flagged in the recipes. A one-line disclaimer on first launch closes it off.

---

## What I'd do next, in order

1. **Deploy it and use it.** Make three drinks from it this week. You'll find more real problems in one evening of using it than in any amount of planning.
2. **Set up the Worker** so the scan works outside the artifact.
3. **Shoot the eleven house originals.** One afternoon, dark card, window light. This is the highest-value single task on the list.
4. **Write ten more house originals.** Twenty originals is a real book's worth and it's the part nobody can copy. You've already got the Levantine angle — saffron, date, rose, za'atar, pomegranate — and it's genuinely differentiated in a market full of American speakeasy revivals.
5. **Then** worry about payments and stores.

---

## Honest assessment

The build is solid and the host-mode angle is a real gap in the market. But be clear-eyed: cocktail apps are a hard business. Mixel has a decade of polish and charges $12 once. Home Bar Hero gives away the AI scanning for free. Ranking on "cocktail app" is close to impossible.

The realistic outcome is a small, good product that earns modestly and that you use constantly. If the goal is meaningful revenue, the honest answer is that the app is the wrong vehicle and the **content** is the right one — the 20 house originals, the hosting method, the batching maths — packaged as a paid recipe pack, a book, or a Dubai-focused hosting service, with the app as the free thing that brings people in.

That's not a reason not to build it. It's a reason to build it in the order above, so you find out cheaply whether anyone wants it before you spend $99 a year and three months on an App Store rebuild.
