# MixMind — Midjourney prompt pack

Run this yourself on your laptop. It's ordered so you build the style reference first, then everything else inherits from it. Doing it in this order is the difference between 90 images that look like one app and 90 images that look like a stock library.

---

## Before you start: read this bit

**The style reference is the whole game.** Midjourney's `--sref` parameter locks visual style across generations. You generate one hero image you love, grab its reference code, and then every subsequent prompt uses that code. Skip this and you'll get 89 different lighting setups, backgrounds and colour temperatures, and the app will look cheap.

**Set these globally in Discord once** with `/settings`:
- Model: latest version
- Stylize: `--s 250` (moderate — high stylize fights the consistency you're trying to build)

**The palette to keep saying out loud in prompts:**
- Background: near-black bitumen brown `#12100F`
- Deep bottle green `#17201C`
- Copper `#B87333`
- Verdigris (oxidised copper) `#3E7A6B`
- Warm off-white `#EDE4D0`

---

## Step 1 — Generate the style anchor

Run this four or five times until one output makes you stop scrolling. This image sets the look for everything else.

```
A single crystal rocks glass holding an amber cocktail over one large clear ice cube, on a dark aged copper surface, deep bitumen-brown near-black background, one hard raking light from the left, heavy shadow, faint condensation, a curl of orange peel, muted copper and verdigris palette, warm off-white highlights, editorial cocktail photography, shot on medium format, shallow depth of field, no people, no text --ar 4:5 --s 250
```

When you have the one you want:
1. Upscale it.
2. Right-click → Copy Link, or use `/describe`.
3. In every prompt from here on, append `--sref <that image URL>`.

Write the URL down somewhere. You'll paste it ~100 times.

**From here on, `[SREF]` means: paste your style reference URL.**

---

## Step 2 — The brand images

### App icon / splash (you already have an SVG version; this is the marketing alternative)
```
A crystal cocktail mixing glass on dark aged copper, fine glowing filament lines and small luminous nodes suspended inside the glass like a constellation, deep bitumen-brown background, one dramatic side light, verdigris and copper palette, minimal, centred, symmetrical, product photography, no text --ar 1:1 --s 250 [SREF]
```

### App Store hero / website banner
```
A dark bar counter in low light, three finished cocktails in a row with different glassware, copper bar tools scattered, one shaft of hard light across the surface, deep shadow, smoke drifting, editorial, cinematic, no people, no text, wide negative space on the right --ar 16:9 --s 250 [SREF]
```

### Onboarding background (the shelf)
```
A home drinks shelf photographed straight on in dim warm light, assorted spirit bottles with labels turned away, dark wood, deep shadow, copper highlights, moody, atmospheric, no text, no readable branding --ar 9:16 --s 250 [SREF]
```

---

## Step 3 — Category images (7 needed)

Same structure every time. Swap only the bracketed part.

```
[SUBJECT], on dark aged copper, deep bitumen-brown background, hard raking side light, heavy shadow, muted copper and verdigris palette, editorial cocktail photography, medium format, no people, no text --ar 3:2 --s 250 [SREF]
```

| Category | `[SUBJECT]` |
|---|---|
| The Canon | A crystal mixing glass and a copper bar spoon beside one large clear ice cube |
| House | A smoking rosemary sprig laid across a rocks glass, thin smoke rising |
| Zero proof | A tall glass of deep red pomegranate cooler with mint and pomegranate seeds |
| Stirred | A bar spoon mid-stir in a mixing glass of amber liquid, ice visible |
| Shaken | A copper cocktail shaker frosted with condensation, mid-pour |
| Long | A tall highball glass filled with clear ice and citrus, backlit |
| Tropical | A ceramic tiki mug with crushed ice dome and a large mint bouquet |

---

## Step 4 — Recipe images

You need one per drink. **Do not do all 90 in one sitting** — you'll stop paying attention around image 30 and the quality drops off a cliff. Do 15 a day for six days.

### The template

```
A [GLASS] containing [COLOUR] cocktail, [ICE], garnished with [GARNISH], on dark aged copper, deep bitumen-brown background, hard raking light from the left, heavy shadow, condensation on the glass, muted copper and verdigris palette, editorial cocktail photography, medium format, shallow depth of field, no people, no text, no hands --ar 4:5 --s 250 [SREF]
```

Every field you need is already in `data.js` — `glass`, `ice` and `garnish` are literally the fields. Fill them in from there.

### Worked examples

**Old Fashioned**
```
A heavy crystal rocks glass containing deep amber cocktail, one large clear ice cube, garnished with a wide orange twist, on dark aged copper, deep bitumen-brown background, hard raking light from the left, heavy shadow, condensation on the glass, muted copper and verdigris palette, editorial cocktail photography, medium format, shallow depth of field, no people, no text, no hands --ar 4:5 --s 250 [SREF]
```

**Negroni**
```
A heavy crystal rocks glass containing vivid ruby-red cocktail, one large clear ice cube, garnished with a wide orange twist, on dark aged copper, deep bitumen-brown background, hard raking light from the left, heavy shadow, condensation on the glass, muted copper and verdigris palette, editorial cocktail photography, medium format, shallow depth of field, no people, no text, no hands --ar 4:5 --s 250 [SREF]
```

**Espresso Martini**
```
A chilled coupe glass containing dark coffee-brown cocktail with a thick pale crema foam, three coffee beans centred on the foam, no ice, on dark aged copper, deep bitumen-brown background, hard raking light from the left, heavy shadow, muted copper and verdigris palette, editorial cocktail photography, medium format, shallow depth of field, no people, no text, no hands --ar 4:5 --s 250 [SREF]
```

**Smoked Rosemary Old Fashioned** (house original — worth extra effort, this is your marketing image)
```
A heavy crystal rocks glass containing deep amber cocktail over one large clear ice cube, a smouldering rosemary sprig laid across the rim with thin white smoke curling upward, on dark aged copper, deep bitumen-brown background, hard raking light from the left, dramatic heavy shadow, smoke catching the light, muted copper and verdigris palette, editorial cocktail photography, medium format, no people, no text, no hands --ar 4:5 --s 250 [SREF]
```

**Queen's Park Swizzle**
```
A tall highball glass packed with crushed ice, pale green cocktail below a distinct dark red floating layer, enormous fresh mint bouquet on top, heavy frost on the glass, on dark aged copper, deep bitumen-brown background, hard raking light from the left, heavy shadow, muted copper and verdigris palette, editorial cocktail photography, medium format, no people, no text, no hands --ar 4:5 --s 250 [SREF]
```

### Colour vocabulary that works reliably

| Drink type | Say this |
|---|---|
| Whiskey stirred | deep amber, burnt caramel |
| Negroni family | vivid ruby-red, translucent crimson |
| Aperol | glowing coral-orange |
| Gin sours | pale straw, cloudy off-white |
| Daiquiri / Margarita | pale silvery green-white |
| Mojito | clear with green mint suspended |
| Espresso Martini | dark coffee-brown with pale crema foam |
| Tropical | golden yellow, sunset orange gradient |
| Pomegranate | deep jewel red, garnet |

---

## Step 5 — Fixing what comes out wrong

| Problem | Fix |
|---|---|
| Glass looks wrong shape | Name it precisely: "Nick and Nora glass", "Collins glass", "double old fashioned glass" |
| Too bright / flat | Add `dark, low key, single light source, deep shadow` and drop `--s` to 150 |
| Invented garnishes | Add `--no fruit, umbrella, straw, flowers` then re-add only what you want |
| Text appearing on the glass | Add `--no text, letters, logo, label, watermark` |
| Style drifting from earlier images | Your `--sref` isn't attached. Check the URL is still live |
| Hands or people | `--no hands, people, fingers, person` |

---

## Step 6 — Preparing files for the app

```bash
# Resize and compress. WebP at 82% is the sweet spot — quality holds, size roughly halves.
for f in raw/*.png; do
  cwebp -q 82 -resize 800 0 "$f" -o "img/$(basename "${f%.*}").webp"
done
```

Name files by the drink `id` from `data.js` — it's already a clean slug:
```
img/old-fashioned.webp
img/negroni.webp
img/smoked-rosemary-old-fashioned.webp
```

Then in `index.html`, inside `viewDrink()`, above the `.label` block:

```javascript
const img = $(`<img class="hero-img" src="img/${d.id}.webp" alt="" loading="lazy">`);
img.onerror = () => img.remove();     // no image? the layout still works
wrap.appendChild(img);
```

And the CSS:

```css
.hero-img{
  width:calc(100% + var(--pad) * 2);
  margin:-12px calc(var(--pad) * -1) 22px;
  display:block;
  aspect-ratio:4/5;
  max-height:52vh;
  object-fit:cover;
  filter:saturate(.92) contrast(1.04);
}
```

The `onerror` removal matters: it means you can ship before all 90 images exist and add them as you go, without the app ever looking broken.

---

## The licensing problem — read before you sell

This is the part that bites people, so here it is plainly.

**Midjourney's commercial terms.** Paid subscribers own their outputs under Midjourney's terms of service, and can use them commercially. But: outputs are not copyrightable in the US, because the Copyright Office has repeatedly held that works lacking human authorship can't be registered. **You can sell an app containing them; you cannot stop a competitor from copying those exact images.** For background art, that's an acceptable risk. For the images that constitute your brand identity, it isn't.

**App store review.** Both Apple and Google now require AI-generated content to be disclosed, and reviewers have become noticeably less tolerant of apps whose entire visual content is generated. An app with 89 AI images and no other substance is a plausible rejection. An app with a genuine recipe database, working inventory matching and AI images as illustration is not.

**My recommendation, since you asked for one:**

1. **Shoot the eleven house originals yourself.** Ten drinks, one afternoon, a window, a sheet of dark card, a phone. These are your IP, they're your marketing images, and real photography of a real drink you actually made is unambiguously yours. This is the highest-value hour in the whole project.
2. **Midjourney for atmosphere** — category headers, backgrounds, splash, onboarding. Nobody is copying those and they set the mood.
3. **Midjourney or licensed stock for the remaining canon drinks**, replaced over time with your own photos as you make them.

That gives you a defensible visual identity where it matters, at roughly a tenth of the effort of shooting all 90.
