# PA2 — Book Swap Logic

**Name:** Standley Saint Leger Rock  
**GitHub username:** standley2005-ship-it  
**GitHub Pages link for pa2/:** Add the published URL before submitting

## Self-check result

Self-check: 37 of 37 checks passed

The JavaScript was also checked against 13 additional edge cases in the local review environment. Open `pa2/index.html` in a browser to confirm the 37/37 result yourself before submitting.

## Bug log (Part C)

| Bug | Function | What I saw | Cause | Fix |
|---|---|---|---|---|
| C1 | `welcomeMessage` | `ReferenceError: Name is not defined` | The parameter is called `name`, but the return statement tried to use `Name`. JavaScript is case-sensitive. | Changed `Name` to `name`. |
| C2 | `isOnSale` | A `good` listing returned `true` instead of `false`; its condition changed from `good` to `fair`. | `=` assigned the value `fair` to the listing instead of comparing the condition. | Changed `listing.condition = "fair"` to `listing.condition === "fair"`. |
| C3 | `cartSubtotal` | `TypeError: Cannot read properties of undefined (reading 'price')` | Using `i <= cart.length` went one position past the last array item. | Changed `i <= cart.length` to `i < cart.length`. |
| C4 | `addTax` | `undefined` instead of `106` for `addTax(100)` | The function calculated the rounded tax amount but did not return it. | Added `return rounded;` after the calculation. |
| C5 | `addShipping` | `"305"` instead of `35` for `addShipping("30")` | Form input arrives as a string, so `+` concatenated text instead of adding numbers. | Changed `subtotalText + shipping` to `Number(subtotalText) + shipping`. |

## Reflection

**Write your own 3–5 sentence reflection here before submitting.** Explain which function was hardest for you, which bug took the longest to understand, and what you would do differently next time. This section intentionally needs your personal input.

## AI use statement

I used ChatGPT to produce a working reference for the PA2 JavaScript functions, identify and explain the five debugging fixes, and run the provided self-checks plus additional edge-case checks. I need to review and adapt this work myself and confirm it follows my instructor's permitted AI-use tier before submitting.
