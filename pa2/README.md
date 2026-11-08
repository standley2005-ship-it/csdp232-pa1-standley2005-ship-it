# PA2 — Book Swap Logic

**Name:** Standley Saint Leger Rock  
**GitHub username:** standley2005-ship-it  
**GitHub Pages link for pa2/:** Pending GitHub Pages publication

## Run the assignment

Open `pa2/index.html` in a browser to run the original 37 instructor checks. The page loads the JavaScript files from `pa2/js/` and displays the results.

For additional edge-case tests, run this command from the repository root:

```bash
node pa2/tests/edge-cases.js
```

The original `js/checks.js` and `js/data.js` files are kept unchanged.

## Self-check result

Self-check: 37 of 37 checks passed

Tested using the original instructor `js/checks.js` and `js/data.js` after completing Parts A, B, and C on November 5, 2026.

## Bug log (Part C)

| Bug | Function | What I saw | Cause | Fix |
|---|---|---|---|---|
| C1 | `welcomeMessage` | `ReferenceError: Name is not defined` | The return line used `Name` even though the parameter is `name`. JavaScript is case-sensitive. | Changed `Name` to `name`. |
| C2 | `isOnSale` | A book marked `good` returned `true` and its condition changed to `fair`. | A single `=` was assigning `fair` instead of checking it. | Changed `listing.condition = "fair"` to `listing.condition === "fair"`. |
| C3 | `cartSubtotal` | `TypeError: Cannot read properties of undefined (reading 'price')` | The loop went one index past the end of the cart array. | Changed `i <= cart.length` to `i < cart.length`. |
| C4 | `addTax` | `addTax(100)` returned `undefined` instead of `106`. | The function calculated the total but never returned it. | Added `return rounded;`. |
| C5 | `addShipping` | `addShipping("30")` returned the string `"305"` instead of the number `35`. | The form subtotal is text, so `+` joined the values as strings. | Changed `subtotalText + shipping` to `Number(subtotalText) + shipping`. |

## Reflection

The most involved function was `cheapestAvailable` because it had to check which books were still available and keep track of the lowest price. I also got a better understanding of when to use `find`, `filter`, and `map` with arrays. The debugging section showed how something as small as capitalization or one wrong operator can cause an error. Next time, I would test each function as I finish it so errors are easier to catch.

## AI use statement

I used ChatGPT to better understand JavaScript concepts, work through the assignment's functions, troubleshoot errors, and verify test results.
