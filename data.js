/* MIXMIND — cocktail database
   Schema notes:
   base:     gin | whiskey | rum | tequila | vodka | brandy | aperitivo | sparkling | zero
   family:   stirred | shaken | built | long | sparkling | tropical | creamy | swizzle
   era:      canon | modern | house | zero        (house = original to MixMind, your IP)
   profile:  spirit-forward | citrus | bitter | herbal | sweet | fruity | smoky | spiced | creamy | floral | coffee
   effort:   1 (two minutes) | 2 (some prep) | 3 (project)
   theatre:  null | 'smoke' | 'fire' | 'ice' | 'foam' | 'aroma'
   amounts in ml. Use [name, null, "3 dashes"] for non-metric items.
*/

const DRINKS = [];
function r(name, o) {
  o.name = name;
  o.id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  o.theatre = o.theatre || null;
  DRINKS.push(o);
}

/* ─────────────────────────  THE CANON — STIRRED  ───────────────────────── */

r("Old Fashioned", {
  base: ["whiskey"], family: "stirred", era: "canon", effort: 1,
  profile: ["spirit-forward", "bitter"],
  glass: "Rocks", ice: "One large cube", garnish: "Wide orange twist",
  ingredients: [["Bourbon or rye", 60], ["Rich sugar syrup (2:1)", 10], ["Angostura bitters", null, "3 dashes"], ["Orange bitters", null, "1 dash"]],
  method: [
    "Combine everything in a mixing glass packed with cubed ice.",
    "Stir 30 seconds. It should feel cold through the glass and taste rounded, not sharp.",
    "Strain over one large cube.",
    "Cut a wide strip of orange peel, squeeze it skin-down over the surface, rub the rim, drop it in."
  ],
  tip: "The twist is not decoration. The orange oil is half the drink.",
  note: "The oldest cocktail there is, and the one that exposes bad technique fastest."
});

r("Manhattan", {
  base: ["whiskey"], family: "stirred", era: "canon", effort: 1,
  profile: ["spirit-forward", "sweet"],
  glass: "Coupe", ice: "None — served up", garnish: "Brandied cherry",
  ingredients: [["Rye whiskey", 60], ["Sweet vermouth", 30], ["Angostura bitters", null, "2 dashes"]],
  method: [
    "Stir all with cubed ice for 25 seconds.",
    "Strain into a chilled coupe.",
    "Drop in one good cherry. Not a fluorescent one."
  ],
  tip: "Vermouth is wine. Once opened it lives in the fridge and dies in about a month.",
  note: "Rye over bourbon. The spice is what stops it turning into pudding."
});

r("Dry Martini", {
  base: ["gin"], family: "stirred", era: "canon", effort: 1,
  profile: ["spirit-forward", "herbal"],
  glass: "Martini or coupe", ice: "None — served up", garnish: "Lemon twist or olives",
  ingredients: [["London dry gin", 60], ["Dry vermouth", 15], ["Orange bitters", null, "1 dash"]],
  method: [
    "Chill the glass in the freezer first. Not optional.",
    "Stir gin, vermouth and bitters with plenty of ice for 30 seconds.",
    "Strain into the frozen glass.",
    "Express a lemon twist over the surface, or drop in three olives. Never both."
  ],
  tip: "Dilution is an ingredient. A Martini stirred too briefly tastes like cold petrol.",
  note: "The most argued-about drink in existence. This spec is the one that wins arguments."
});

r("Negroni", {
  base: ["gin", "aperitivo"], family: "stirred", era: "canon", effort: 1,
  profile: ["bitter", "herbal"],
  glass: "Rocks", ice: "One large cube", garnish: "Wide orange twist",
  ingredients: [["Gin", 30], ["Campari", 30], ["Sweet vermouth", 30]],
  method: [
    "Build all three in a mixing glass over cubed ice.",
    "Stir 25 to 30 seconds.",
    "Strain over one large cube.",
    "Express a wide orange twist over the top and drop it in."
  ],
  tip: "The one to pre-batch. Equal parts in a bottle in the fridge; pour 90 ml over ice on demand.",
  note: "Bitter, and meant to be. Equal parts means no measuring drama."
});

r("Boulevardier", {
  base: ["whiskey", "aperitivo"], family: "stirred", era: "canon", effort: 1,
  profile: ["bitter", "spirit-forward"],
  glass: "Rocks", ice: "One large cube", garnish: "Orange twist",
  ingredients: [["Bourbon", 45], ["Campari", 30], ["Sweet vermouth", 30]],
  method: [
    "Stir all with cubed ice for 25 seconds.",
    "Strain over one large cube.",
    "Express an orange twist and drop it in."
  ],
  tip: "Push the whiskey to 45 ml. Equal parts lets the Campari bully the bourbon.",
  note: "A Negroni that spent the winter in Kentucky."
});

r("Vieux Carré", {
  base: ["whiskey", "brandy"], family: "stirred", era: "canon", effort: 2,
  profile: ["spirit-forward", "herbal", "spiced"],
  glass: "Rocks", ice: "One large cube", garnish: "Lemon twist",
  ingredients: [["Rye whiskey", 30], ["Cognac", 30], ["Sweet vermouth", 30], ["Bénédictine", 10], ["Angostura bitters", null, "2 dashes"], ["Peychaud's bitters", null, "2 dashes"]],
  method: [
    "Stir everything with cubed ice for 25 seconds.",
    "Strain over one large cube.",
    "Express a lemon twist over the top."
  ],
  tip: "Bénédictine is the whole point. Substituting honey syrup gets you somewhere else entirely.",
  note: "New Orleans, 1938. Six ingredients that have no business working together, and do."
});

r("Sazerac", {
  base: ["whiskey"], family: "stirred", era: "canon", effort: 2,
  profile: ["spirit-forward", "herbal"],
  glass: "Rocks, chilled", ice: "None", garnish: "Lemon peel, expressed and discarded",
  ingredients: [["Rye whiskey", 60], ["Rich sugar syrup (2:1)", 10], ["Peychaud's bitters", null, "4 dashes"], ["Absinthe", null, "rinse"]],
  method: [
    "Rinse a chilled rocks glass with absinthe. Pour out the excess.",
    "Stir rye, syrup and Peychaud's with ice for 25 seconds.",
    "Strain into the rinsed glass. No ice.",
    "Express a lemon peel over the surface and throw the peel away."
  ],
  tip: "Throwing the peel away is traditional and it does matter — you want the oil, not the pith sitting in it.",
  note: "Arguably the first cocktail in America. Served naked, without ice."
});

r("Vesper", {
  base: ["gin", "vodka"], family: "stirred", era: "canon", effort: 1,
  profile: ["spirit-forward"],
  glass: "Coupe", ice: "None — served up", garnish: "Long lemon twist",
  ingredients: [["Gin", 60], ["Vodka", 20], ["Lillet Blanc", 10]],
  method: [
    "Stir hard with ice for 20 seconds. Bond said shaken; he was wrong, and it bruises nothing but it does over-dilute.",
    "Strain into a chilled coupe.",
    "Long thin lemon twist."
  ],
  tip: "Lillet Blanc is not Kina Lillet. Add a drop of quinine tonic syrup if you want the original bitterness.",
  note: "Strong. Three measures of gin is not a suggestion, it's a warning."
});

r("Rob Roy", {
  base: ["whiskey"], family: "stirred", era: "canon", effort: 1,
  profile: ["spirit-forward", "smoky"],
  glass: "Coupe", ice: "None — served up", garnish: "Cherry",
  ingredients: [["Blended Scotch", 60], ["Sweet vermouth", 30], ["Angostura bitters", null, "2 dashes"]],
  method: [
    "Stir with ice for 25 seconds.",
    "Strain into a chilled coupe.",
    "Cherry."
  ],
  tip: "Use a blend, not a peated single malt, unless you want a bonfire in a glass.",
  note: "A Manhattan that emigrated to Scotland."
});

r("Americano", {
  base: ["aperitivo"], family: "built", era: "canon", effort: 1,
  profile: ["bitter", "citrus"],
  glass: "Highball", ice: "Cubed", garnish: "Orange slice",
  ingredients: [["Campari", 30], ["Sweet vermouth", 30], ["Soda water", null, "to top"]],
  method: [
    "Fill a highball with ice.",
    "Campari and vermouth in, top with soda.",
    "Stir once. Orange slice."
  ],
  tip: "The low-alcohol answer to a Negroni. Serve it at 4pm and nobody peaks early.",
  note: "The Negroni's older, gentler parent."
});

r("El Presidente", {
  base: ["rum"], family: "stirred", era: "canon", effort: 2,
  profile: ["fruity", "spirit-forward"],
  glass: "Coupe", ice: "None — served up", garnish: "Orange twist",
  ingredients: [["White rum", 45], ["Blanc vermouth", 22], ["Orange curaçao", 10], ["Grenadine", 5]],
  method: [
    "Stir all with ice for 20 seconds.",
    "Strain into a chilled coupe.",
    "Express an orange twist."
  ],
  tip: "Real grenadine — pomegranate and sugar. The red syrup from the supermarket is a different drink.",
  note: "Havana, 1920s. What Cuba drank while America was dry."
});

r("Hanky Panky", {
  base: ["gin"], family: "stirred", era: "canon", effort: 1,
  profile: ["bitter", "herbal"],
  glass: "Coupe", ice: "None — served up", garnish: "Orange twist",
  ingredients: [["Gin", 45], ["Sweet vermouth", 45], ["Fernet-Branca", 7]],
  method: [
    "Stir with ice for 25 seconds.",
    "Strain into a chilled coupe.",
    "Express an orange twist over the top."
  ],
  tip: "Seven millilitres of Fernet. More and it stops being a cocktail and starts being a dare.",
  note: "Invented by Ada Coleman at the Savoy, one of the first women to run a great bar."
});

r("Black Russian", {
  base: ["vodka"], family: "built", era: "canon", effort: 1,
  profile: ["coffee", "sweet"],
  glass: "Rocks", ice: "Cubed", garnish: "None",
  ingredients: [["Vodka", 50], ["Coffee liqueur", 25]],
  method: [
    "Build over ice in a rocks glass.",
    "Stir briefly."
  ],
  tip: "Two ingredients means both have to be good. Cheap coffee liqueur tastes like cough syrup.",
  note: "Brussels, 1949, invented for an American ambassador."
});

r("Rusty Nail", {
  base: ["whiskey"], family: "built", era: "canon", effort: 1,
  profile: ["spirit-forward", "sweet", "herbal"],
  glass: "Rocks", ice: "One large cube", garnish: "Lemon twist",
  ingredients: [["Blended Scotch", 50], ["Drambuie", 25]],
  method: [
    "Build over one large cube.",
    "Stir 15 seconds.",
    "Lemon twist."
  ],
  tip: "Start at 2:1 and dial the Drambuie down if it reads too sweet.",
  note: "A nightcap that has never pretended to be anything else."
});

/* ─────────────────────────  THE CANON — SOURS  ───────────────────────── */

r("Daiquiri", {
  base: ["rum"], family: "shaken", era: "canon", effort: 1,
  profile: ["citrus"],
  glass: "Coupe", ice: "None — served up", garnish: "Lime wheel",
  ingredients: [["White rum", 60], ["Fresh lime juice", 25], ["Sugar syrup", 20]],
  method: [
    "Shake hard with cubed ice for 12 seconds.",
    "Double strain into a chilled coupe.",
    "Lime wheel on the rim, or nothing at all."
  ],
  tip: "If a bar can't make a Daiquiri, leave. Three ingredients, nowhere to hide.",
  note: "The measuring stick for every other sour on this list."
});

r("Margarita", {
  base: ["tequila"], family: "shaken", era: "canon", effort: 1,
  profile: ["citrus"],
  glass: "Coupe or rocks", ice: "Cubed, or up", garnish: "Lime wheel; salt half the rim",
  ingredients: [["Blanco tequila", 50], ["Cointreau", 25], ["Fresh lime juice", 25], ["Agave syrup", 5]],
  method: [
    "Salt half the rim only, so people can choose. Rub a lime wedge on the outside and roll it in flaky salt.",
    "Shake all hard with cubed ice for 12 seconds.",
    "Double strain into a chilled coupe, or over fresh ice."
  ],
  tip: "Sharp? Add 5 ml agave. Flat? It needs lime, not sugar.",
  note: "Fresh lime only. Never a mix, no matter what the bottle promises."
});

r("Whiskey Sour", {
  base: ["whiskey"], family: "shaken", era: "canon", effort: 2,
  profile: ["citrus", "spirit-forward"], theatre: "foam",
  glass: "Rocks or coupe", ice: "Cubed, or up", garnish: "Three dots of Angostura, dragged through",
  ingredients: [["Bourbon", 50], ["Fresh lemon juice", 25], ["Sugar syrup", 20], ["Egg white (optional)", 15]],
  method: [
    "With egg white: shake everything WITHOUT ice for 15 seconds first. This builds the foam.",
    "Add ice and shake again, hard, for 12 seconds.",
    "Strain over fresh ice, or into a chilled coupe.",
    "Dot three drops of Angostura on the foam and drag a stick through them."
  ],
  tip: "Skip the egg white for anyone who'd rather not. It still works.",
  note: "The drink that converts people who say they don't like whiskey."
});

r("Sidecar", {
  base: ["brandy"], family: "shaken", era: "canon", effort: 1,
  profile: ["citrus", "fruity"],
  glass: "Coupe", ice: "None — served up", garnish: "Orange twist; sugar half the rim",
  ingredients: [["Cognac", 50], ["Cointreau", 25], ["Fresh lemon juice", 20]],
  method: [
    "Sugar half the rim if you like.",
    "Shake hard with ice for 12 seconds.",
    "Double strain into a chilled coupe.",
    "Express an orange twist."
  ],
  tip: "VSOP or better. VS cognac disappears entirely behind the lemon.",
  note: "Paris, after the first war. Named for a regular who arrived in a motorcycle sidecar."
});

r("Gimlet", {
  base: ["gin"], family: "shaken", era: "canon", effort: 1,
  profile: ["citrus", "herbal"],
  glass: "Coupe", ice: "None — served up", garnish: "Lime wheel",
  ingredients: [["Gin", 60], ["Fresh lime juice", 22], ["Sugar syrup", 22]],
  method: [
    "Shake hard with ice for 12 seconds.",
    "Double strain into a chilled coupe.",
    "Lime wheel."
  ],
  tip: "The original used lime cordial. Fresh lime and syrup is better; cordial is more honest to the name.",
  note: "Given to Royal Navy officers to stop them getting scurvy. Allegedly."
});

r("White Lady", {
  base: ["gin"], family: "shaken", era: "canon", effort: 2,
  profile: ["citrus"], theatre: "foam",
  glass: "Coupe", ice: "None — served up", garnish: "Lemon twist",
  ingredients: [["Gin", 50], ["Cointreau", 25], ["Fresh lemon juice", 20], ["Egg white", 15]],
  method: [
    "Dry shake without ice for 15 seconds.",
    "Add ice, shake hard for 12 seconds.",
    "Double strain into a chilled coupe.",
    "Lemon twist."
  ],
  tip: "Double straining is what keeps ice shards out of the foam.",
  note: "The Sidecar's gin cousin, born at the Savoy."
});

r("Aviation", {
  base: ["gin"], family: "shaken", era: "canon", effort: 2,
  profile: ["citrus", "floral"],
  glass: "Coupe", ice: "None — served up", garnish: "Brandied cherry",
  ingredients: [["Gin", 45], ["Maraschino liqueur", 15], ["Crème de violette", 7], ["Fresh lemon juice", 22]],
  method: [
    "Shake all with ice for 12 seconds.",
    "Double strain into a chilled coupe.",
    "Sink a cherry."
  ],
  tip: "Violette is dominant and strange. Seven millilitres is the ceiling.",
  note: "The pale sky-blue is the entire reason this drink survived."
});

r("Bee's Knees", {
  base: ["gin"], family: "shaken", era: "canon", effort: 1,
  profile: ["citrus", "sweet", "floral"],
  glass: "Coupe", ice: "None — served up", garnish: "Lemon twist",
  ingredients: [["Gin", 60], ["Fresh lemon juice", 22], ["Honey syrup (3:1 honey to hot water)", 22]],
  method: [
    "Make honey syrup first — neat honey will not dissolve in a cold shaker.",
    "Shake hard with ice for 12 seconds.",
    "Double strain into a chilled coupe."
  ],
  tip: "Prohibition-era honey was there to hide bad gin. Now it's there because it's good.",
  note: "Three ingredients, and the honey does more work than you expect."
});

r("Clover Club", {
  base: ["gin"], family: "shaken", era: "canon", effort: 2,
  profile: ["fruity", "citrus"], theatre: "foam",
  glass: "Coupe", ice: "None — served up", garnish: "Three raspberries on a pick",
  ingredients: [["Gin", 45], ["Fresh lemon juice", 20], ["Raspberry syrup", 20], ["Dry vermouth", 15], ["Egg white", 15]],
  method: [
    "Dry shake without ice for 15 seconds.",
    "Add ice and shake hard for 12 seconds.",
    "Double strain into a chilled coupe.",
    "Three raspberries on a pick across the rim."
  ],
  tip: "Make raspberry syrup by warming frozen raspberries with equal sugar and straining.",
  note: "A Philadelphia gentlemen's club drink that spent decades being mocked as pink."
});

r("Last Word", {
  base: ["gin"], family: "shaken", era: "canon", effort: 1,
  profile: ["herbal", "citrus"],
  glass: "Coupe", ice: "None — served up", garnish: "Cherry",
  ingredients: [["Gin", 22], ["Green Chartreuse", 22], ["Maraschino liqueur", 22], ["Fresh lime juice", 22]],
  method: [
    "Equal parts. Shake hard with ice for 12 seconds.",
    "Double strain into a chilled coupe."
  ],
  tip: "Green Chartreuse is made by monks, is expensive, and has no substitute. Budget accordingly.",
  note: "Detroit, 1922. Forgotten for eighty years, then it took over every bar on earth."
});

r("Corpse Reviver No. 2", {
  base: ["gin"], family: "shaken", era: "canon", effort: 2,
  profile: ["citrus", "herbal"],
  glass: "Coupe", ice: "None — served up", garnish: "Orange twist",
  ingredients: [["Gin", 22], ["Cointreau", 22], ["Lillet Blanc", 22], ["Fresh lemon juice", 22], ["Absinthe", null, "rinse"]],
  method: [
    "Rinse a chilled coupe with absinthe and pour out the excess.",
    "Shake the other four with ice for 12 seconds.",
    "Double strain into the rinsed coupe."
  ],
  tip: "Four equal parts plus a rinse. The absinthe is a whisper, not an ingredient.",
  note: "The Savoy book warns that four in swift succession will un-revive the corpse."
});

r("Pisco Sour", {
  base: ["brandy"], family: "shaken", era: "canon", effort: 2,
  profile: ["citrus"], theatre: "foam",
  glass: "Coupe", ice: "None — served up", garnish: "Three dots of Angostura",
  ingredients: [["Pisco", 60], ["Fresh lime juice", 25], ["Sugar syrup", 20], ["Egg white", 20]],
  method: [
    "Dry shake without ice for 20 seconds. This one wants a serious foam.",
    "Add ice, shake hard for 12 seconds.",
    "Double strain into a chilled coupe.",
    "Three dots of Angostura on the foam."
  ],
  tip: "Peru and Chile both claim it. Do not raise this at a dinner party.",
  note: "The national drink of two countries simultaneously."
});

r("Hemingway Daiquiri", {
  base: ["rum"], family: "shaken", era: "canon", effort: 1,
  profile: ["citrus", "bitter"],
  glass: "Coupe", ice: "None — served up", garnish: "Lime wheel",
  ingredients: [["White rum", 60], ["Fresh lime juice", 20], ["Fresh grapefruit juice", 20], ["Maraschino liqueur", 10]],
  method: [
    "Shake hard with ice for 12 seconds.",
    "Double strain into a chilled coupe."
  ],
  tip: "Barely sweet by design. Add 5 ml syrup if it's too austere for the room.",
  note: "Hemingway asked for double rum and no sugar. This is the civilised version."
});

r("Cosmopolitan", {
  base: ["vodka"], family: "shaken", era: "canon", effort: 1,
  profile: ["citrus", "fruity"],
  glass: "Coupe", ice: "None — served up", garnish: "Flamed orange twist",
  ingredients: [["Citron vodka", 45], ["Cointreau", 15], ["Fresh lime juice", 15], ["Cranberry juice", 30]],
  method: [
    "Shake hard with ice for 12 seconds.",
    "Double strain into a chilled coupe.",
    "Flame an orange twist over the top if you're showing off."
  ],
  tip: "Cranberry is for colour and tartness, not sweetness. Use unsweetened.",
  note: "Mocked for twenty years because of a television show. It's a good drink."
});

r("Paper Plane", {
  base: ["whiskey", "aperitivo"], family: "shaken", era: "canon", effort: 1,
  profile: ["bitter", "citrus"],
  glass: "Coupe", ice: "None — served up", garnish: "None",
  ingredients: [["Bourbon", 22], ["Aperol", 22], ["Amaro Nonino", 22], ["Fresh lemon juice", 22]],
  method: [
    "Equal parts. Shake with ice for 12 seconds.",
    "Double strain into a chilled coupe. No garnish — it doesn't need one."
  ],
  tip: "Amaro Nonino is the expensive bottle you'll be glad you bought.",
  note: "2007, and already treated as a classic. Deservedly."
});

r("Naked and Famous", {
  base: ["tequila"], family: "shaken", era: "canon", effort: 1,
  profile: ["smoky", "herbal", "citrus"],
  glass: "Coupe", ice: "None — served up", garnish: "None",
  ingredients: [["Mezcal", 22], ["Yellow Chartreuse", 22], ["Aperol", 22], ["Fresh lime juice", 22]],
  method: [
    "Equal parts. Shake hard with ice for 12 seconds.",
    "Double strain into a chilled coupe."
  ],
  tip: "Yellow Chartreuse, not green. Green will flatten the mezcal.",
  note: "A Last Word and a Paper Plane had a smoky argument."
});

r("Gold Rush", {
  base: ["whiskey"], family: "shaken", era: "canon", effort: 1,
  profile: ["citrus", "sweet"],
  glass: "Rocks", ice: "One large cube", garnish: "Lemon twist",
  ingredients: [["Bourbon", 60], ["Fresh lemon juice", 22], ["Honey syrup (3:1)", 22]],
  method: [
    "Shake hard with ice for 12 seconds.",
    "Strain over one large cube.",
    "Lemon twist."
  ],
  tip: "A Bee's Knees with bourbon. Three ingredients, almost impossible to get wrong.",
  note: "Milk & Honey, New York, early 2000s. Modern classic with no pretensions."
});

r("Penicillin", {
  base: ["whiskey"], family: "shaken", era: "canon", effort: 2,
  profile: ["smoky", "spiced", "citrus"],
  glass: "Rocks", ice: "One large cube", garnish: "Candied ginger",
  ingredients: [["Blended Scotch", 60], ["Fresh lemon juice", 22], ["Honey-ginger syrup", 22], ["Islay single malt", 7, "float"]],
  method: [
    "Make honey-ginger syrup: equal honey and hot water with sliced fresh ginger, steeped and strained.",
    "Shake the blended Scotch, lemon and syrup with ice for 12 seconds.",
    "Strain over one large cube.",
    "Float the Islay malt gently across the surface with the back of a spoon."
  ],
  tip: "The float is the drink. Don't stir it in — you want the smoke at the nose, not the palate.",
  note: "Sam Ross, 2005. The most influential cocktail of the century so far."
});

r("Amaretto Sour", {
  base: ["brandy"], family: "shaken", era: "canon", effort: 2,
  profile: ["sweet", "citrus"], theatre: "foam",
  glass: "Rocks", ice: "Cubed", garnish: "Lemon peel and a cherry",
  ingredients: [["Amaretto", 45], ["Cask-strength bourbon", 22], ["Fresh lemon juice", 25], ["Rich sugar syrup (2:1)", 5], ["Egg white", 15]],
  method: [
    "Dry shake without ice for 15 seconds.",
    "Add ice, shake hard for 12 seconds.",
    "Strain over fresh ice.",
    "Lemon peel and a cherry."
  ],
  tip: "The overproof bourbon is what rescues this from being a dessert.",
  note: "Jeffrey Morgenthaler's rebuild of a drink everyone had written off."
});

r("Tommy's Margarita", {
  base: ["tequila"], family: "shaken", era: "canon", effort: 1,
  profile: ["citrus"],
  glass: "Rocks", ice: "Cubed", garnish: "Lime wedge",
  ingredients: [["Blanco tequila", 60], ["Fresh lime juice", 25], ["Agave syrup", 15]],
  method: [
    "Shake hard with ice for 12 seconds.",
    "Strain over fresh ice.",
    "Lime wedge. No salt."
  ],
  tip: "Agave instead of orange liqueur. It tastes more of tequila, which is the point.",
  note: "San Francisco, 1990s, and now what most bartenders drink themselves."
});

r("Brown Derby", {
  base: ["whiskey"], family: "shaken", era: "canon", effort: 1,
  profile: ["citrus", "fruity"],
  glass: "Coupe", ice: "None — served up", garnish: "Grapefruit twist",
  ingredients: [["Bourbon", 50], ["Fresh pink grapefruit juice", 25], ["Honey syrup (3:1)", 15]],
  method: [
    "Shake with ice for 12 seconds.",
    "Double strain into a chilled coupe.",
    "Grapefruit twist."
  ],
  tip: "Grapefruit juice separates fast. Squeeze it within the hour.",
  note: "Hollywood, 1930s, named after a restaurant shaped like a hat."
});

r("Bramble", {
  base: ["gin"], family: "shaken", era: "canon", effort: 1,
  profile: ["fruity", "citrus"],
  glass: "Rocks", ice: "Crushed", garnish: "Blackberry and lemon slice",
  ingredients: [["Gin", 50], ["Fresh lemon juice", 25], ["Sugar syrup", 15], ["Crème de mûre", 15, "drizzled"]],
  method: [
    "Shake gin, lemon and syrup with ice for 10 seconds.",
    "Strain over a glass packed with crushed ice.",
    "Drizzle the crème de mûre over the top so it bleeds down through the ice.",
    "Blackberry and a lemon slice."
  ],
  tip: "The bleed is the whole visual. Pour it slowly in a circle, don't dump it.",
  note: "Dick Bradsell, London, 1980s. The same man invented the Espresso Martini."
});

r("Caipirinha", {
  base: ["rum"], family: "built", era: "canon", effort: 1,
  profile: ["citrus"],
  glass: "Rocks", ice: "Crushed", garnish: "None",
  ingredients: [["Cachaça", 60], ["Lime, cut into 8 wedges", null, "1 whole"], ["Caster sugar", null, "2 tsp"]],
  method: [
    "Muddle the lime wedges and sugar directly in the glass until the sugar dissolves.",
    "Fill with crushed ice.",
    "Add cachaça and churn with a bar spoon."
  ],
  tip: "Cut the white pith core out of the lime before muddling or it turns bitter.",
  note: "Brazil's national drink, and one of the few cocktails built entirely in the glass."
});

r("Southside", {
  base: ["gin"], family: "shaken", era: "canon", effort: 1,
  profile: ["citrus", "herbal"],
  glass: "Coupe", ice: "None — served up", garnish: "Mint leaf",
  ingredients: [["Gin", 60], ["Fresh lime juice", 22], ["Sugar syrup", 22], ["Mint leaves", null, "8 leaves"]],
  method: [
    "Shake everything, mint included, hard with ice for 12 seconds.",
    "Double strain into a chilled coupe — the straining removes the shredded mint.",
    "Float one clean mint leaf."
  ],
  tip: "Shaking mint hard is fine here. It's the muddling that makes it bitter.",
  note: "A Mojito that got dressed up and went out."
});

/* ─────────────────────────  LONG DRINKS  ───────────────────────── */

r("Mojito", {
  base: ["rum"], family: "long", era: "canon", effort: 1,
  profile: ["citrus", "herbal"],
  glass: "Highball", ice: "Crushed", garnish: "Mint sprig, slapped; lime wheel",
  ingredients: [["White rum", 60], ["Fresh lime juice", 25], ["Sugar syrup", 20], ["Mint leaves", null, "10 leaves"], ["Soda water", null, "to top"]],
  method: [
    "Clap the mint between your palms once to wake it up, then drop it in the glass. Do not muddle.",
    "Add rum, lime and syrup. Half fill with crushed ice and churn with a bar spoon.",
    "Top with more crushed ice to form a dome, then top with soda.",
    "Slap a mint sprig and plant it by the straw so it's smelled with every sip."
  ],
  tip: "Wrap cubes in a tea towel and hit them with a rolling pin. Crushed ice matters here.",
  note: "Press the mint, don't shred it. Bruised mint turns bitter within a minute."
});

r("Tom Collins", {
  base: ["gin"], family: "long", era: "canon", effort: 1,
  profile: ["citrus"],
  glass: "Highball", ice: "Cubed", garnish: "Lemon wheel and a cherry",
  ingredients: [["Gin", 50], ["Fresh lemon juice", 25], ["Sugar syrup", 20], ["Soda water", null, "to top"]],
  method: [
    "Shake gin, lemon and syrup with ice for 10 seconds.",
    "Strain into an ice-filled highball.",
    "Top with soda and stir once from the bottom."
  ],
  tip: "Pour the soda down a bar spoon to keep the bubbles alive.",
  note: "A gin sour, lengthened. The template for a hundred other highballs."
});

r("Moscow Mule", {
  base: ["vodka"], family: "long", era: "canon", effort: 1,
  profile: ["spiced", "citrus"],
  glass: "Copper mug or highball", ice: "Cubed", garnish: "Lime wedge and mint",
  ingredients: [["Vodka", 50], ["Fresh lime juice", 15], ["Ginger beer", null, "to top"]],
  method: [
    "Fill the mug with ice.",
    "Vodka and lime in, top with ginger beer.",
    "Stir once. Lime wedge and a mint sprig."
  ],
  tip: "Ginger beer, not ginger ale. It's a completely different drink otherwise.",
  note: "Invented in 1941 to shift stock nobody wanted: vodka, and a warehouse of copper mugs."
});

r("Dark 'n' Stormy", {
  base: ["rum"], family: "long", era: "canon", effort: 1,
  profile: ["spiced", "citrus"],
  glass: "Highball", ice: "Cubed", garnish: "Lime wedge",
  ingredients: [["Dark rum", 60], ["Ginger beer", null, "to top"], ["Fresh lime juice", 15]],
  method: [
    "Fill a highball with ice.",
    "Lime juice and ginger beer in first.",
    "Float the dark rum on top so it clouds down through the glass. Don't stir."
  ],
  tip: "The float is the name. Stirring it makes it a rum and ginger.",
  note: "Bermuda, and legally trademarked to one specific rum brand there."
});

r("Paloma", {
  base: ["tequila"], family: "long", era: "canon", effort: 1,
  profile: ["citrus", "fruity"],
  glass: "Highball", ice: "Cubed", garnish: "Grapefruit wedge; salted rim optional",
  ingredients: [["Blanco tequila", 50], ["Fresh lime juice", 15], ["Pink grapefruit soda", null, "to top"], ["Sea salt", null, "1 pinch"]],
  method: [
    "Salt the rim if you like, then fill the glass with ice.",
    "Tequila, lime and a genuine pinch of salt into the glass.",
    "Top with grapefruit soda and stir once from the bottom."
  ],
  tip: "The pinch of salt is not optional. It's what makes it taste like a Paloma.",
  note: "What Mexico actually drinks. Better than a Margarita in real heat."
});

r("Cuba Libre", {
  base: ["rum"], family: "long", era: "canon", effort: 1,
  profile: ["sweet", "citrus"],
  glass: "Highball", ice: "Cubed", garnish: "Lime wedge, squeezed in",
  ingredients: [["Dark or aged rum", 50], ["Fresh lime juice", 15], ["Cola", null, "to top"]],
  method: [
    "Fill with ice, add rum and lime.",
    "Top with cola. Squeeze and drop a lime wedge."
  ],
  tip: "The lime is the difference between this and a rum and coke. Use real lime.",
  note: "Havana, 1900. Named for a toast to Cuban independence."
});

r("Gin & Tonic", {
  base: ["gin"], family: "long", era: "canon", effort: 1,
  profile: ["bitter", "herbal"],
  glass: "Copa or highball", ice: "Cubed, right to the top", garnish: "Match to the gin",
  ingredients: [["Gin", 50], ["Tonic water", 150]],
  method: [
    "Fill the glass completely with ice. A half-empty glass makes a warm G&T.",
    "Gin in, then tonic poured down a bar spoon.",
    "Stir once, from the bottom, and stop.",
    "Garnish to the gin: citrus peel for a London dry, grapefruit for a citrus-forward one, rosemary for a savoury one."
  ],
  tip: "One 200 ml bottle of tonic ruins two drinks. Use small bottles and open them fresh.",
  note: "Malaria medicine that got out of hand. Ratio is everything: 1 to 3, never more."
});

r("Japanese Highball", {
  base: ["whiskey"], family: "long", era: "canon", effort: 1,
  profile: ["spirit-forward"],
  glass: "Tall, narrow highball", ice: "Cubed, filled to the top", garnish: "Lemon peel",
  ingredients: [["Japanese whisky", 45], ["Soda water", 135]],
  method: [
    "Chill the glass. Fill with ice and stir it once to chill further, then pour off any melt.",
    "Add whisky and stir 13 times.",
    "Add fresh ice, then pour soda down the side in one smooth motion.",
    "Stir once, vertically, and stop."
  ],
  tip: "The obsessive method is the point. Done properly this is the best long drink there is.",
  note: "Japan turned two ingredients into a discipline."
});

r("Sea Breeze", {
  base: ["vodka"], family: "long", era: "canon", effort: 1,
  profile: ["fruity", "citrus"],
  glass: "Highball", ice: "Cubed", garnish: "Lime wedge",
  ingredients: [["Vodka", 50], ["Cranberry juice", 90], ["Fresh pink grapefruit juice", 45]],
  method: [
    "Build over ice.",
    "Stir once from the bottom.",
    "Lime wedge."
  ],
  tip: "Fresh grapefruit, not from a carton. It's the only interesting thing in the glass.",
  note: "Unfashionable and genuinely refreshing."
});

r("Bloody Mary", {
  base: ["vodka"], family: "long", era: "canon", effort: 2,
  profile: ["spiced"],
  glass: "Highball", ice: "Cubed", garnish: "Celery, lemon wedge, whatever else you can justify",
  ingredients: [["Vodka", 50], ["Tomato juice", 120], ["Fresh lemon juice", 15], ["Worcestershire sauce", null, "4 dashes"], ["Tabasco", null, "3 dashes"], ["Celery salt", null, "pinch"], ["Black pepper", null, "pinch"]],
  method: [
    "Build everything in a mixing glass and roll it between two tins — do not shake, it goes frothy.",
    "Strain into an ice-filled highball.",
    "Season again on top, then garnish."
  ],
  tip: "Roll, never shake. Shaking aerates tomato juice into something unpleasant.",
  note: "The only cocktail that is also a meal, and the only one people argue about at breakfast."
});

r("Garibaldi", {
  base: ["aperitivo"], family: "built", era: "canon", effort: 1,
  profile: ["bitter", "citrus"],
  glass: "Highball", ice: "Cubed", garnish: "Orange half-wheel",
  ingredients: [["Campari", 45], ["Fresh orange juice", 120]],
  method: [
    "Aerate the orange juice — blitz it briefly, or use a hand blender, until it's fluffy.",
    "Campari over ice, then pour the fluffy juice over.",
    "Orange half-wheel."
  ],
  tip: "The aeration is the entire trick. Flat juice makes an ordinary drink.",
  note: "Two ingredients. Dante in New York built a reputation on getting it exactly right."
});

r("Mint Julep", {
  base: ["whiskey"], family: "built", era: "canon", effort: 1,
  profile: ["herbal", "spirit-forward"],
  glass: "Julep tin or rocks", ice: "Crushed, domed high", garnish: "Big mint bouquet",
  ingredients: [["Bourbon", 60], ["Rich sugar syrup (2:1)", 15], ["Mint leaves", null, "10 leaves"]],
  method: [
    "Clap the mint and put it in the tin with the syrup.",
    "Half fill with crushed ice, add bourbon, churn until the tin frosts.",
    "Dome more crushed ice on top.",
    "Plant a fat bunch of mint right where the nose goes, and use a short straw."
  ],
  tip: "The frost on the outside of the tin tells you it's ready. Keep churning until it appears.",
  note: "Kentucky Derby, and the reason julep tins exist."
});

r("Queen's Park Swizzle", {
  base: ["rum"], family: "swizzle", era: "canon", effort: 2,
  profile: ["herbal", "citrus", "bitter"],
  glass: "Highball", ice: "Crushed", garnish: "Mint bouquet",
  ingredients: [["Demerara rum", 60], ["Fresh lime juice", 25], ["Sugar syrup", 20], ["Mint leaves", null, "10 leaves"], ["Angostura bitters", null, "6 dashes, floated"]],
  method: [
    "Clap the mint into the glass, add rum, lime and syrup.",
    "Fill with crushed ice and swizzle until frosted.",
    "Dome with more ice.",
    "Float six dashes of Angostura across the top so it sits as a dark red layer."
  ],
  tip: "Six dashes sounds mad. It's what makes it a Queen's Park.",
  note: "Trinidad. The most beautiful drink on this list, and it isn't close."
});

r("Chartreuse Swizzle", {
  base: ["gin"], family: "swizzle", era: "canon", effort: 2,
  profile: ["herbal", "citrus"],
  glass: "Highball", ice: "Crushed", garnish: "Mint sprig and grated nutmeg",
  ingredients: [["Green Chartreuse", 45], ["Fresh lime juice", 25], ["Pineapple juice", 25], ["Falernum", 15]],
  method: [
    "Build in the glass, fill with crushed ice and swizzle until frosted.",
    "Dome with more ice.",
    "Mint sprig, then grate nutmeg over the top."
  ],
  tip: "Chartreuse as a base spirit, not a modifier. It works, and it's 55%.",
  note: "San Francisco, 2000s. It made a generation of bartenders buy Chartreuse."
});

r("Ramos Gin Fizz", {
  base: ["gin"], family: "shaken", era: "canon", effort: 3,
  profile: ["citrus", "creamy", "floral"], theatre: "foam",
  glass: "Tall narrow fizz glass", ice: "None in the glass", garnish: "None",
  ingredients: [["Gin", 60], ["Fresh lemon juice", 15], ["Fresh lime juice", 15], ["Sugar syrup", 20], ["Double cream", 30], ["Egg white", 30], ["Orange flower water", null, "3 drops"], ["Soda water", null, "to top"]],
  method: [
    "Dry shake everything except the soda, without ice, for a full two minutes. Yes, really.",
    "Add ice and shake hard for another minute.",
    "Strain into an empty chilled glass and let it stand for 90 seconds to set.",
    "Pour soda slowly into the centre so the foam rises above the rim."
  ],
  tip: "There is no shortcut. The original New Orleans bar employed a line of boys to shake these.",
  note: "The hardest drink in this app, and the one worth learning."
});

r("Singapore Sling", {
  base: ["gin"], family: "long", era: "canon", effort: 3,
  profile: ["fruity", "herbal"],
  glass: "Highball", ice: "Cubed", garnish: "Pineapple wedge and a cherry",
  ingredients: [["Gin", 30], ["Cherry Heering", 15], ["Bénédictine", 7], ["Cointreau", 7], ["Pineapple juice", 90], ["Fresh lime juice", 15], ["Grenadine", 10], ["Angostura bitters", null, "1 dash"]],
  method: [
    "Shake everything hard with ice for 15 seconds — the pineapple needs to foam.",
    "Strain into an ice-filled highball.",
    "Pineapple wedge and a cherry."
  ],
  tip: "Eight ingredients. Batch the four liqueurs in advance if you're making more than two.",
  note: "Raffles Hotel, 1915. Baroque, ridiculous, and very good."
});

/* ─────────────────────────  SPARKLING  ───────────────────────── */

r("Aperol Spritz", {
  base: ["aperitivo", "sparkling"], family: "sparkling", era: "canon", effort: 1,
  profile: ["bitter", "citrus"],
  glass: "Large wine glass", ice: "Cubed, fill it right up", garnish: "Orange slice; green olive if you're being proper",
  ingredients: [["Prosecco", 90], ["Aperol", 60], ["Soda water", 30]],
  method: [
    "Fill the glass completely with ice. A half-empty glass makes a warm spritz.",
    "Prosecco first, then Aperol, then a splash of soda.",
    "Stir once, gently. Orange slice in."
  ],
  tip: "Prosecco before Aperol keeps the colour graded rather than muddy.",
  note: "Three, two, one. The easiest thing here and nobody dislikes it."
});

r("Hugo Spritz", {
  base: ["sparkling"], family: "sparkling", era: "canon", effort: 1,
  profile: ["floral", "herbal"],
  glass: "Large wine glass", ice: "Cubed, filled up", garnish: "Mint sprig and lime wheel",
  ingredients: [["Prosecco", 90], ["Elderflower cordial", 30], ["Soda water", 30], ["Mint leaves", null, "6 leaves"]],
  method: [
    "Clap the mint into an ice-filled glass.",
    "Cordial, then Prosecco, then soda.",
    "Stir once. Mint sprig and lime wheel."
  ],
  tip: "Lighter than an Aperol Spritz and far better in real heat.",
  note: "Northern Italy, 2005, and now it outsells the Aperol Spritz across the Alps."
});

r("French 75", {
  base: ["gin", "sparkling"], family: "sparkling", era: "canon", effort: 1,
  profile: ["citrus"],
  glass: "Flute or coupe", ice: "None", garnish: "Long lemon twist",
  ingredients: [["Gin", 30], ["Fresh lemon juice", 15], ["Sugar syrup", 10], ["Champagne", null, "to top"]],
  method: [
    "Shake gin, lemon and syrup with ice for 10 seconds.",
    "Strain into a chilled flute.",
    "Top slowly with Champagne, pouring down the side to keep the bubbles.",
    "Long lemon twist."
  ],
  tip: "The toast drink. Have four ready on a tray before the speeches.",
  note: "Named after a field gun, because of how it hits."
});

r("Bellini", {
  base: ["sparkling"], family: "sparkling", era: "canon", effort: 1,
  profile: ["fruity"],
  glass: "Flute", ice: "None", garnish: "None",
  ingredients: [["White peach purée", 50], ["Prosecco", 100]],
  method: [
    "Purée ripe white peaches and chill the purée hard.",
    "Purée into the flute first, then Prosecco poured slowly.",
    "Stir once with a long spoon."
  ],
  tip: "Tinned peaches make a different, sweeter, worse drink. White peaches only.",
  note: "Harry's Bar, Venice, 1948. Named after the colour of a saint's robe in a Bellini painting."
});

r("Kir Royale", {
  base: ["sparkling"], family: "sparkling", era: "canon", effort: 1,
  profile: ["fruity"],
  glass: "Flute", ice: "None", garnish: "None",
  ingredients: [["Crème de cassis", 15], ["Champagne", 120]],
  method: [
    "Cassis into the bottom of a chilled flute.",
    "Top slowly with Champagne. It will mix itself."
  ],
  tip: "15 ml, no more. Most bars pour double and turn it into cordial.",
  note: "Two ingredients, thirty seconds, and it looks like effort."
});

r("Air Mail", {
  base: ["rum", "sparkling"], family: "sparkling", era: "canon", effort: 1,
  profile: ["citrus", "sweet"],
  glass: "Flute or coupe", ice: "None", garnish: "Lime twist",
  ingredients: [["Aged rum", 45], ["Fresh lime juice", 20], ["Honey syrup (3:1)", 15], ["Champagne", null, "to top"]],
  method: [
    "Shake rum, lime and honey syrup with ice for 10 seconds.",
    "Strain into a chilled flute.",
    "Top with Champagne."
  ],
  tip: "The best of the Champagne cocktails and almost nobody orders it.",
  note: "Cuba, 1930s. Reportedly served with an air mail stamp on the glass."
});

r("Sherry Cobbler", {
  base: ["brandy"], family: "built", era: "canon", effort: 1,
  profile: ["fruity", "citrus"],
  glass: "Highball or goblet", ice: "Crushed", garnish: "Orange wheel, berries, mint",
  ingredients: [["Amontillado sherry", 90], ["Sugar syrup", 15], ["Orange slices", null, "2 slices"]],
  method: [
    "Muddle the orange slices with the syrup in a shaker.",
    "Add sherry and ice, shake for 10 seconds.",
    "Strain over crushed ice and dome it.",
    "Pile on fruit and mint. Overdo the garnish deliberately."
  ],
  tip: "Low alcohol, huge flavour. The right thing to serve at 2pm.",
  note: "The drink that made drinking straws a mass-market product in the 1800s."
});

/* ─────────────────────────  TROPICAL  ───────────────────────── */

r("Mai Tai", {
  base: ["rum"], family: "tropical", era: "canon", effort: 2,
  profile: ["citrus", "fruity"],
  glass: "Rocks or tiki mug", ice: "Crushed", garnish: "Spent lime shell and a mint bouquet",
  ingredients: [["Aged Jamaican rum", 30], ["Rhum agricole or Martinique rum", 30], ["Orange curaçao", 15], ["Orgeat", 15], ["Fresh lime juice", 25]],
  method: [
    "Shake everything with a scoop of crushed ice for 8 seconds.",
    "Pour unstrained into the glass and top with more crushed ice.",
    "Plant the spent lime shell and a fat mint sprig on top."
  ],
  tip: "No pineapple. No grenadine. The 1944 original has neither and is a far better drink.",
  note: "Trader Vic's. Almost every Mai Tai you have ever been served was wrong."
});

r("Piña Colada", {
  base: ["rum"], family: "tropical", era: "canon", effort: 1,
  profile: ["creamy", "fruity"],
  glass: "Hurricane or tiki mug", ice: "Blended", garnish: "Pineapple wedge and a cherry",
  ingredients: [["White rum", 60], ["Coconut cream", 45], ["Pineapple juice", 90], ["Fresh lime juice", 10]],
  method: [
    "Blend everything with a cup of ice until smooth and thick.",
    "Pour into a chilled glass.",
    "Pineapple wedge and a cherry."
  ],
  tip: "Coconut cream, not coconut milk. Stir the tin before measuring; it separates.",
  note: "Puerto Rico's official drink, and unfairly treated as a joke."
});

r("Painkiller", {
  base: ["rum"], family: "tropical", era: "canon", effort: 1,
  profile: ["creamy", "fruity", "spiced"],
  glass: "Highball or tiki mug", ice: "Crushed", garnish: "Heavy grating of fresh nutmeg",
  ingredients: [["Dark navy rum", 60], ["Pineapple juice", 120], ["Fresh orange juice", 30], ["Coconut cream", 30]],
  method: [
    "Shake everything hard with ice for 12 seconds.",
    "Pour over crushed ice.",
    "Grate a lot of fresh nutmeg over the top."
  ],
  tip: "Fresh nutmeg on a microplane. Pre-ground is dust and tastes like it.",
  note: "British Virgin Islands. The rum brand trademarked the name, which tells you it works."
});

r("Jungle Bird", {
  base: ["rum", "aperitivo"], family: "tropical", era: "canon", effort: 1,
  profile: ["bitter", "fruity"],
  glass: "Rocks", ice: "Cubed or crushed", garnish: "Pineapple wedge",
  ingredients: [["Blackstrap or dark rum", 45], ["Campari", 22], ["Pineapple juice", 45], ["Fresh lime juice", 15], ["Sugar syrup", 15]],
  method: [
    "Shake everything hard with ice for 12 seconds — the pineapple should foam.",
    "Strain over fresh ice.",
    "Pineapple wedge."
  ],
  tip: "The bitterness is what makes this the tiki drink for people who hate tiki drinks.",
  note: "Kuala Lumpur, 1978. Campari in a tiki drink, which should not work."
});

r("Zombie", {
  base: ["rum"], family: "tropical", era: "canon", effort: 3,
  profile: ["fruity", "spiced"],
  glass: "Tall tiki mug", ice: "Crushed", garnish: "Mint bouquet",
  ingredients: [["Aged Jamaican rum", 45], ["Puerto Rican gold rum", 45], ["Overproof Demerara rum", 30], ["Fresh lime juice", 22], ["Falernum", 15], ["Grapefruit juice", 15], ["Cinnamon syrup", 7], ["Grenadine", 7], ["Angostura bitters", null, "1 dash"], ["Absinthe", null, "6 drops"]],
  method: [
    "Flash blend everything with a scoop of crushed ice for 5 seconds.",
    "Pour into a tall mug and top with crushed ice.",
    "Mint bouquet."
  ],
  tip: "Don Beach limited customers to two. That limit was not a marketing gimmick.",
  note: "1934. Ten ingredients, three rums, and a genuine hazard."
});

/* ─────────────────────────  CREAMY & COFFEE  ───────────────────────── */

r("Espresso Martini", {
  base: ["vodka"], family: "shaken", era: "canon", effort: 1,
  profile: ["coffee", "sweet"], theatre: "foam",
  glass: "Coupe or martini", ice: "None — served up", garnish: "Three coffee beans",
  ingredients: [["Vodka", 50], ["Fresh espresso, hot", 25], ["Coffee liqueur", 20], ["Sugar syrup", 5]],
  method: [
    "Pull the espresso fresh. This is the whole drink — never cold or pre-made coffee.",
    "Shake everything very hard with cubed ice for 15 seconds. Harder than you think.",
    "Double strain into a chilled coupe.",
    "Wait five seconds for the foam to settle, then float three beans in the centre."
  ],
  tip: "No foam means you didn't shake hard enough. Chill the glasses in the freezer first.",
  note: "Dick Bradsell, London, 1983, for a model who wanted waking up."
});

r("White Russian", {
  base: ["vodka"], family: "built", era: "canon", effort: 1,
  profile: ["creamy", "coffee"],
  glass: "Rocks", ice: "Cubed", garnish: "None",
  ingredients: [["Vodka", 50], ["Coffee liqueur", 25], ["Double cream", 25]],
  method: [
    "Build vodka and coffee liqueur over ice.",
    "Float the cream over the back of a spoon so it sits in a layer.",
    "Leave it layered. Let people stir it themselves."
  ],
  tip: "Lightly whipped cream floats better and looks far more deliberate.",
  note: "Rescued from obscurity entirely by one film."
});

r("Brandy Alexander", {
  base: ["brandy"], family: "shaken", era: "canon", effort: 1,
  profile: ["creamy", "sweet"],
  glass: "Coupe", ice: "None — served up", garnish: "Grated nutmeg",
  ingredients: [["Cognac", 30], ["Crème de cacao (dark)", 30], ["Double cream", 30]],
  method: [
    "Shake hard with ice for 12 seconds.",
    "Double strain into a chilled coupe.",
    "Grate nutmeg over the surface."
  ],
  tip: "Serve tiny. It's dessert, and a full coupe is too much of it.",
  note: "John Lennon called it a milkshake. He drank a lot of them."
});

r("Grasshopper", {
  base: ["brandy"], family: "shaken", era: "canon", effort: 1,
  profile: ["creamy", "sweet", "herbal"],
  glass: "Coupe", ice: "None — served up", garnish: "Mint leaf",
  ingredients: [["Crème de menthe (green)", 30], ["Crème de cacao (white)", 30], ["Double cream", 30]],
  method: [
    "Shake hard with ice for 12 seconds.",
    "Double strain into a chilled coupe.",
    "One mint leaf."
  ],
  tip: "A bar spoon of Fernet-Branca stops it being purely a dessert.",
  note: "New Orleans, 1918, and unapologetically green."
});

/* ─────────────────────────  HOUSE — ORIGINAL RECIPES  ───────────────────────── */

r("Smoked Rosemary Old Fashioned", {
  base: ["whiskey"], family: "stirred", era: "house", effort: 2,
  profile: ["smoky", "herbal", "spirit-forward"], theatre: "smoke",
  glass: "Rocks", ice: "One large cube", garnish: "Scorched rosemary sprig and orange twist",
  ingredients: [["Bourbon", 60], ["Maple syrup", 10], ["Angostura bitters", null, "3 dashes"], ["Rosemary sprig", null, "1, for smoking"]],
  method: [
    "Stir bourbon, maple and bitters with ice for 30 seconds. Strain over one large cube.",
    "Light the tip of a rosemary sprig with a match until it catches, then blow it out so it smoulders.",
    "Invert a second glass over the smouldering sprig for 20 seconds to trap the smoke.",
    "Turn the smoke-filled glass upright, pour the drink in, and lay the sprig across the top."
  ],
  tip: "Do this at the table. The smell hits the room before the glass reaches the hand.",
  note: "House original. The one that makes people take a photo before they take a sip."
});

r("Burnt Orange Negroni", {
  base: ["gin", "aperitivo"], family: "stirred", era: "house", effort: 2,
  profile: ["bitter", "spiced", "smoky"], theatre: "fire",
  glass: "Rocks", ice: "One large cube", garnish: "Flamed orange twist",
  ingredients: [["Gin", 30], ["Campari", 30], ["Sweet vermouth", 30], ["Cardamom pods, cracked", null, "2 pods"]],
  method: [
    "Drop the cracked cardamom into the mixing glass with the three spirits and ice.",
    "Stir 30 seconds, then strain over one large cube.",
    "Cut a wide orange peel. Hold a lit match between the peel and the glass and squeeze sharply — the oils ignite in a brief flash.",
    "Rub the scorched peel round the rim and drop it in."
  ],
  tip: "Warm the peel over the match for two seconds before squeezing. It flames far more reliably.",
  note: "House original. Cardamom picks up the vermouth's spice and drags it forward."
});

r("Saffron & Honey Gimlet", {
  base: ["gin"], family: "shaken", era: "house", effort: 2,
  profile: ["floral", "citrus", "sweet"],
  glass: "Coupe", ice: "None — served up", garnish: "Three saffron threads floated",
  ingredients: [["Gin", 60], ["Fresh lime juice", 22], ["Saffron honey syrup", 22]],
  method: [
    "Make the syrup: warm 100 ml honey with 100 ml water and a good pinch of saffron. Steep 20 minutes off the heat, then chill. It goes deep amber.",
    "Shake gin, lime and syrup hard with ice for 12 seconds.",
    "Double strain into a chilled coupe.",
    "Float three saffron threads on the surface."
  ],
  tip: "The syrup keeps a fortnight in the fridge and makes this a thirty-second drink after the first one.",
  note: "House original. Saffron and gin botanicals belong together and almost nobody does it."
});

r("Date & Bourbon Sour", {
  base: ["whiskey"], family: "shaken", era: "house", effort: 2,
  profile: ["sweet", "citrus", "spiced"], theatre: "foam",
  glass: "Rocks", ice: "One large cube", garnish: "Half a Medjool date on the rim",
  ingredients: [["Bourbon", 50], ["Fresh lemon juice", 25], ["Date syrup", 20], ["Angostura bitters", null, "2 dashes"], ["Egg white", 15]],
  method: [
    "Dry shake without ice for 15 seconds.",
    "Add ice and shake hard for 12 seconds.",
    "Strain over one large cube.",
    "Rest half a Medjool date on the rim."
  ],
  tip: "Date syrup is thicker than sugar syrup. Cut it with a splash of hot water before measuring.",
  note: "House original. Dates and bourbon share the same caramel register — it's an obvious pairing once tasted."
});

r("Pistachio Espresso Martini", {
  base: ["vodka"], family: "shaken", era: "house", effort: 2,
  profile: ["coffee", "creamy", "sweet"], theatre: "foam",
  glass: "Coupe", ice: "None — served up", garnish: "Crushed pistachio dusted across the foam",
  ingredients: [["Vodka", 45], ["Fresh espresso, hot", 25], ["Coffee liqueur", 15], ["Pistachio orgeat", 15]],
  method: [
    "Pull the espresso fresh.",
    "Shake everything very hard with ice for 15 seconds.",
    "Double strain into a chilled coupe.",
    "Let the foam settle, then dust finely crushed pistachio across one half only."
  ],
  tip: "Dust half the surface, not all of it. It looks intentional rather than sprinkled.",
  note: "House original. Pistachio orgeat is the same idea as almond orgeat, and better."
});

r("Za'atar Paloma", {
  base: ["tequila"], family: "long", era: "house", effort: 2,
  profile: ["citrus", "spiced"],
  glass: "Highball", ice: "Cubed", garnish: "Za'atar and salt rim, grapefruit wedge",
  ingredients: [["Blanco tequila", 50], ["Fresh lime juice", 15], ["Fresh pink grapefruit juice", 45], ["Agave syrup", 10], ["Soda water", null, "to top"]],
  method: [
    "Mix one part za'atar to two parts flaky salt on a plate. Wet half the rim with lime and roll it.",
    "Fill with ice, add tequila, lime, grapefruit and agave.",
    "Top with soda and stir once from the bottom."
  ],
  tip: "Only rim half the glass. Za'atar is divisive and this way nobody is trapped with it.",
  note: "House original. Thyme and sumac against grapefruit is the whole idea."
});

r("Rose & Pomegranate Margarita", {
  base: ["tequila"], family: "shaken", era: "house", effort: 1,
  profile: ["floral", "fruity", "citrus"],
  glass: "Coupe", ice: "None — served up", garnish: "Pomegranate seeds; dried rose petal",
  ingredients: [["Blanco tequila", 50], ["Cointreau", 20], ["Fresh lime juice", 22], ["Pomegranate juice", 20], ["Rose water", 2]],
  method: [
    "Rose water is powerful. Two millilitres, roughly half a bar spoon, and no more.",
    "Shake everything hard with ice for 12 seconds.",
    "Double strain into a chilled coupe.",
    "Drop in a few pomegranate seeds so they sink, and rest a dried rose petal on the rim."
  ],
  tip: "If it tastes like soap, you used too much rose. There's no fixing it — start again.",
  note: "House original. The Levantine version of a Margarita, and it holds its own."
});

r("Black Fig Manhattan", {
  base: ["whiskey"], family: "stirred", era: "house", effort: 2,
  profile: ["fruity", "spirit-forward", "spiced"],
  glass: "Coupe", ice: "None — served up", garnish: "Dried fig slice",
  ingredients: [["Rye whiskey", 55], ["Fig-infused sweet vermouth", 30], ["Angostura bitters", null, "2 dashes"], ["Orange bitters", null, "1 dash"]],
  method: [
    "Infuse the vermouth: 4 dried black figs, halved, in 250 ml sweet vermouth for 48 hours in the fridge. Strain.",
    "Stir everything with ice for 25 seconds.",
    "Strain into a chilled coupe.",
    "Rest a thin dried fig slice on the rim."
  ],
  tip: "Start the infusion two days before a party. It keeps a month refrigerated.",
  note: "House original. Fig gives the vermouth a darkness that cherry never manages."
});

r("Toasted Cinnamon Old Cuban", {
  base: ["rum", "sparkling"], family: "sparkling", era: "house", effort: 2,
  profile: ["herbal", "spiced", "citrus"],
  glass: "Coupe", ice: "None — served up", garnish: "Mint leaf and a toasted cinnamon stick",
  ingredients: [["Aged rum", 45], ["Fresh lime juice", 22], ["Cinnamon syrup", 20], ["Angostura bitters", null, "2 dashes"], ["Mint leaves", null, "6 leaves"], ["Champagne", null, "to top"]],
  method: [
    "Shake rum, lime, cinnamon syrup, bitters and mint hard with ice for 12 seconds.",
    "Double strain into a chilled coupe.",
    "Top with Champagne poured slowly down the side.",
    "Toast a cinnamon stick over a flame until it smokes, then rest it across the glass."
  ],
  tip: "Make cinnamon syrup by simmering 3 broken sticks in 200 ml sugar syrup for 10 minutes.",
  note: "House original, built on Audrey Saunders' Old Cuban. The toasted stick is the aroma."
});

r("Charcoal Gin Sour", {
  base: ["gin"], family: "shaken", era: "house", effort: 2,
  profile: ["citrus", "herbal"], theatre: "foam",
  glass: "Coupe", ice: "None — served up", garnish: "Lemon twist; single gold leaf flake",
  ingredients: [["Gin", 55], ["Fresh lemon juice", 25], ["Sugar syrup", 20], ["Activated charcoal", null, "1/4 tsp"], ["Egg white", 15]],
  method: [
    "Dry shake everything without ice for 15 seconds. The foam goes slate grey.",
    "Add ice and shake hard for 12 seconds.",
    "Double strain into a chilled coupe.",
    "Express a lemon twist and set a single flake of edible gold leaf on the foam."
  ],
  tip: "Food-grade activated charcoal only. It can interfere with some medications — mention it when serving.",
  note: "House original. Pure theatre: black liquid, grey foam, one point of gold."
});


r("Salted Lemon Highball", {
  base: ["tequila"], family: "long", era: "house", effort: 1,
  profile: ["citrus"],
  glass: "Highball", ice: "Cubed, filled up", garnish: "Lemon wheel; salted rim optional",
  ingredients: [["Blanco tequila", 50], ["Fresh lemon juice", 20], ["Zesty lemon soda", null, "to top"], ["Sea salt", null, "1 pinch"]],
  method: [
    "Salt half the rim if you like, then fill the glass completely with ice.",
    "Tequila, lemon juice and a genuine pinch of salt straight into the glass.",
    "Top with zesty lemon soda and stir once from the bottom.",
    "Lemon wheel on the rim."
  ],
  tip: "The pinch of salt does the same job it does in a Paloma \u2014 it pulls the citrus forward and stops the soda tasting thin.",
  note: "House original. What a Paloma becomes when you reach for lemon instead of grapefruit."
});

/* ─────────────────────────  ZERO PROOF  ───────────────────────── */

r("Pomegranate & Rose Cooler", {
  base: ["zero"], family: "long", era: "zero", effort: 1,
  profile: ["floral", "fruity", "citrus"],
  glass: "Highball", ice: "Cubed", garnish: "Pomegranate seeds; mint sprig",
  ingredients: [["Pomegranate juice", 60], ["Fresh lime juice", 20], ["Sugar syrup", 15], ["Rose water", 2], ["Soda water", null, "to top"]],
  method: [
    "Rose water is powerful. Two millilitres, no more — about half a bar spoon.",
    "Shake pomegranate, lime, syrup and rose water with ice.",
    "Strain over fresh ice in a highball and top with soda.",
    "Spoon pomegranate seeds on top and add a slapped mint sprig."
  ],
  tip: "Put it on the table looking as good as everything else. Nobody should have to ask for it.",
  note: "Levantine, and good enough that drinkers take one too."
});

r("Virgin Passionfruit Cooler", {
  base: ["zero"], family: "long", era: "zero", effort: 1,
  profile: ["fruity", "citrus", "herbal"],
  glass: "Highball", ice: "Crushed", garnish: "Half a passionfruit; mint sprig",
  ingredients: [["Passionfruit pulp", null, "1 fruit"], ["Fresh lime juice", 25], ["Sugar syrup", 20], ["Mint leaves", null, "8 leaves"], ["Soda water", null, "to top"]],
  method: [
    "Pulp into the glass, clap the mint and add it.",
    "Lime and syrup, then half fill with crushed ice and churn.",
    "Dome with more crushed ice and top with soda.",
    "Float the half shell and plant a mint sprig."
  ],
  tip: "Serve it in the same glassware as the alcoholic mojitos.",
  note: "The Mojito without the rum, and not a lesser drink for it."
});

r("Garden Highball", {
  base: ["zero"], family: "long", era: "zero", effort: 1,
  profile: ["herbal", "citrus"],
  glass: "Highball", ice: "Cubed", garnish: "Cucumber ribbon and a basil leaf",
  ingredients: [["Non-alcoholic garden spirit", 50], ["Fresh lime juice", 15], ["Tonic water", null, "to top"], ["Cucumber slices", null, "3"]],
  method: [
    "Slap the cucumber slices between your palms and drop them into an ice-filled glass.",
    "Spirit and lime in, top with tonic.",
    "Stir once. Cucumber ribbon and a basil leaf."
  ],
  tip: "Non-alcoholic spirits taste thin over too much ice. Fill the glass so it barely dilutes.",
  note: "Peas, hay and cucumber. Strange on paper, excellent in a glass."
});

r("Verjus Spritz", {
  base: ["zero"], family: "sparkling", era: "zero", effort: 1,
  profile: ["citrus", "bitter"],
  glass: "Large wine glass", ice: "Cubed, filled up", garnish: "Grapefruit twist",
  ingredients: [["Verjus", 60], ["Non-alcoholic bitter aperitif", 30], ["Soda water", 60]],
  method: [
    "Fill the glass with ice.",
    "Verjus, then bitter aperitif, then soda.",
    "Stir once. Grapefruit twist."
  ],
  tip: "Verjus is unripe grape juice — sharp, wine-like, no alcohol. It's the missing piece in most zero-proof drinks.",
  note: "The closest a zero-proof drink gets to the structure of wine."
});

r("Coffee Tonic", {
  base: ["zero"], family: "long", era: "zero", effort: 1,
  profile: ["coffee", "bitter"],
  glass: "Highball", ice: "Cubed", garnish: "Orange twist",
  ingredients: [["Fresh espresso, cooled", 30], ["Tonic water", 150], ["Sugar syrup", 5]],
  method: [
    "Fill the glass with ice and add the tonic first.",
    "Pour the espresso slowly over the back of a spoon so it layers on top.",
    "Express an orange twist. Serve unstirred and let people watch it fall."
  ],
  tip: "Tonic first, always. Coffee first and it just muddles.",
  note: "Scandinavian coffee shops, and it's genuinely delicious."
});

r("Nojito", {
  base: ["zero"], family: "long", era: "zero", effort: 1,
  profile: ["herbal", "citrus"],
  glass: "Highball", ice: "Crushed", garnish: "Mint sprig, slapped; lime wheel",
  ingredients: [["Fresh lime juice", 30], ["Sugar syrup", 20], ["Mint leaves", null, "12 leaves"], ["Soda water", null, "to top"], ["Angostura bitters", null, "2 dashes, optional"]],
  method: [
    "Clap the mint and drop it in. Do not muddle.",
    "Lime and syrup, half fill with crushed ice, churn.",
    "Dome with ice, top with soda.",
    "Slap a mint sprig and plant it by the straw."
  ],
  tip: "More mint than the alcoholic version. Without rum it needs the extra aromatic weight.",
  note: "Angostura is technically alcoholic in trace amounts — leave it out if that matters to the guest."
});

r("Virgin Mary", {
  base: ["zero"], family: "long", era: "zero", effort: 1,
  profile: ["spiced"],
  glass: "Highball", ice: "Cubed", garnish: "Celery stick and lemon wedge",
  ingredients: [["Tomato juice", 150], ["Fresh lemon juice", 15], ["Worcestershire sauce", null, "4 dashes"], ["Tabasco", null, "3 dashes"], ["Celery salt", null, "pinch"], ["Horseradish", null, "1/4 tsp"]],
  method: [
    "Roll between two tins — do not shake.",
    "Strain over fresh ice.",
    "Season on top and garnish heavily."
  ],
  tip: "Worcestershire contains anchovy. Use a vegan version if it matters.",
  note: "Season it harder than you think. Without vodka it needs more bite, not less."
});

r("Grapefruit & Rosemary Soda", {
  base: ["zero"], family: "long", era: "zero", effort: 1,
  profile: ["citrus", "herbal"],
  glass: "Highball", ice: "Cubed", garnish: "Rosemary sprig and grapefruit wedge",
  ingredients: [["Fresh pink grapefruit juice", 90], ["Rosemary syrup", 20], ["Fresh lime juice", 10], ["Soda water", null, "to top"]],
  method: [
    "Make rosemary syrup: simmer 2 sprigs in 200 ml sugar syrup for 5 minutes, then cool and strain.",
    "Shake grapefruit, syrup and lime with ice.",
    "Strain over fresh ice, top with soda.",
    "Slap a rosemary sprig and plant it in the glass."
  ],
  tip: "Slap the rosemary hard before it goes in. Unslapped, it's a stick.",
  note: "Bitter, herbal and structured — everything most zero-proof drinks are not."
});

r("Cinderella", {
  base: ["zero"], family: "shaken", era: "zero", effort: 1,
  profile: ["fruity", "citrus"],
  glass: "Coupe or highball", ice: "Cubed", garnish: "Orange slice and a cherry",
  ingredients: [["Pineapple juice", 45], ["Fresh orange juice", 45], ["Fresh lemon juice", 15], ["Grenadine", 10], ["Soda water", null, "splash"]],
  method: [
    "Shake everything except the soda hard with ice for 12 seconds.",
    "Strain over fresh ice.",
    "Top with a splash of soda."
  ],
  tip: "Shake it properly. The pineapple foam is what stops it reading as a fruit juice.",
  note: "A pre-Prohibition zero-proof drink, which tells you the idea is not new."
});

/* ── metadata used by the interface ───────────────────────────────────── */

const BASES = [
  { id: "gin",       label: "Gin",        sub: "Juniper, botanical, dry" },
  { id: "whiskey",   label: "Whiskey",    sub: "Bourbon, rye, Scotch" },
  { id: "rum",       label: "Rum",        sub: "White, aged, dark, cachaça" },
  { id: "tequila",   label: "Agave",      sub: "Tequila and mezcal" },
  { id: "vodka",     label: "Vodka",      sub: "Neutral, a clean canvas" },
  { id: "brandy",    label: "Brandy",     sub: "Cognac, pisco, sherry" },
  { id: "aperitivo", label: "Aperitivo",  sub: "Campari, Aperol, vermouth" },
  { id: "sparkling", label: "Sparkling",  sub: "Champagne and prosecco" },
  { id: "zero",      label: "Zero proof", sub: "No alcohol, no apology" }
];

const ERAS = [
  { id: "canon",  label: "The Canon",  sub: "Drinks that earned their place" },
  { id: "house",  label: "House",      sub: "Originals you won't find elsewhere" },
  { id: "zero",   label: "Zero proof", sub: "Built to stand beside the rest" }
];

const FAMILIES = [
  { id: "stirred",   label: "Stirred",   sub: "Spirit-forward, no citrus" },
  { id: "shaken",    label: "Shaken",    sub: "Sours and anything with juice" },
  { id: "long",      label: "Long",      sub: "Highballs, over ice, topped" },
  { id: "sparkling", label: "Sparkling", sub: "Topped with wine" },
  { id: "tropical",  label: "Tropical",  sub: "Rum, fruit, crushed ice" },
  { id: "built",     label: "Built",     sub: "Made in the glass" },
  { id: "swizzle",   label: "Swizzle",   sub: "Churned through crushed ice" }
];

const PROFILES = ["spirit-forward", "citrus", "bitter", "herbal", "sweet", "fruity", "smoky", "spiced", "creamy", "floral", "coffee"];

/* Ingredient normalisation for shelf matching. Maps the many ways a bottle is
   written on a label to a single key the matcher can reason about. */
const PANTRY = ["Fresh lime juice", "Fresh lemon juice", "Sugar syrup", "Rich sugar syrup (2:1)", "Soda water", "Tonic water", "Mint leaves", "Ice"];

const SHELF_GROUPS = [
  { group: "Base spirits", items: ["Gin", "London dry gin", "Vodka", "Citron vodka", "White rum", "Aged rum", "Dark rum", "Demerara rum", "Cachaça", "Blanco tequila", "Mezcal", "Bourbon", "Rye whiskey", "Blended Scotch", "Islay single malt", "Japanese whisky", "Cognac", "Pisco"] },
  { group: "Aperitivo & fortified", items: ["Campari", "Aperol", "Sweet vermouth", "Dry vermouth", "Blanc vermouth", "Lillet Blanc", "Amontillado sherry", "Fernet-Branca", "Amaro Nonino"] },
  { group: "Liqueurs", items: ["Cointreau", "Orange curaçao", "Maraschino liqueur", "Green Chartreuse", "Yellow Chartreuse", "Bénédictine", "Drambuie", "Coffee liqueur", "Crème de cassis", "Crème de mûre", "Crème de cacao (dark)", "Crème de cacao (white)", "Crème de menthe (green)", "Crème de violette", "Cherry Heering", "Amaretto", "Falernum", "Absinthe"] },
  { group: "Wine & sparkling", items: ["Champagne", "Prosecco"] },
  { group: "Syrups & sweeteners", items: ["Sugar syrup", "Rich sugar syrup (2:1)", "Honey syrup (3:1)", "Agave syrup", "Maple syrup", "Date syrup", "Grenadine", "Orgeat", "Pistachio orgeat", "Cinnamon syrup", "Raspberry syrup", "Elderflower cordial", "Rosemary syrup", "Honey-ginger syrup", "Saffron honey syrup"] },
  { group: "Juice & mixers", items: ["Fresh lime juice", "Fresh lemon juice", "Fresh orange juice", "Fresh pink grapefruit juice", "Pineapple juice", "Cranberry juice", "Pomegranate juice", "Tomato juice", "Passionfruit pulp", "White peach purée", "Soda water", "Tonic water", "Ginger beer", "Cola", "Pink grapefruit soda", "Zesty lemon soda", "Verjus"] },
  { group: "Bitters & aromatics", items: ["Angostura bitters", "Peychaud's bitters", "Orange bitters", "Rose water", "Orange flower water", "Worcestershire sauce", "Tabasco", "Activated charcoal"] },
  { group: "Dairy & egg", items: ["Egg white", "Double cream", "Coconut cream"] }
];

if (typeof module !== "undefined") module.exports = { DRINKS, BASES, ERAS, FAMILIES, PROFILES, SHELF_GROUPS, PANTRY };

/* Ingredient aliasing. Recipes name things the way a bartender says them;
   the shelf names them the way a bottle is labelled. This bridges the two.
   Anything in ASSUMED is treated as always available — you have salt. */

const ALIASES = {
  "Bourbon or rye": "Bourbon",
  "Cask-strength bourbon": "Bourbon",
  "Dark or aged rum": "Aged rum",
  "Aged Jamaican rum": "Aged rum",
  "Puerto Rican gold rum": "Aged rum",
  "Rhum agricole or Martinique rum": "Aged rum",
  "Dark navy rum": "Dark rum",
  "Blackstrap or dark rum": "Dark rum",
  "Overproof Demerara rum": "Demerara rum",
  "Egg white (optional)": "Egg white",
  "Honey syrup (3:1 honey to hot water)": "Honey syrup (3:1)",
  "Fresh grapefruit juice": "Fresh pink grapefruit juice",
  "Grapefruit juice": "Fresh pink grapefruit juice",
  "Fig-infused sweet vermouth": "Sweet vermouth",
  "Non-alcoholic garden spirit": "Non-alcoholic garden spirit",
  "Non-alcoholic bitter aperitif": "Non-alcoholic bitter aperitif"
};

const ASSUMED = new Set([
  "Mint leaves", "Sea salt", "Celery salt", "Black pepper", "Caster sugar",
  "Orange slices", "Cucumber slices", "Rosemary sprig", "Cardamom pods, cracked",
  "Lime, cut into 8 wedges", "Fresh espresso, hot", "Fresh espresso, cooled",
  "Horseradish", "Ice"
]);

function shelfKey(name) { return ALIASES[name] || name; }

SHELF_GROUPS.find(g => g.group === "Base spirits").items.push("Non-alcoholic garden spirit");
SHELF_GROUPS.find(g => g.group === "Aperitivo & fortified").items.push("Non-alcoholic bitter aperitif");

if (typeof module !== "undefined") module.exports = { DRINKS, BASES, ERAS, FAMILIES, PROFILES, SHELF_GROUPS, PANTRY, ALIASES, ASSUMED, shelfKey };
