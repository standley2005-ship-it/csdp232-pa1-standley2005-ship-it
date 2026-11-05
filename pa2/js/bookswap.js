/* ==========================================================
   CSDP 232 · PA2 — Book Swap Logic
   bookswap.js — Parts A and B: YOUR CODE
   ----------------------------------------------------------
   Rules (Step 6):
   - const by default, let only when a value changes, never var
   - compare with === and !==, never == or !=
   - keep every function name and parameter exactly as given
   - every function RETURNS its answer (no console.log left)
   - keep the comment above each function
   Replace each "// TODO" line with your code.
   ========================================================== */


/* ---------------- Part A: One Value at a Time ---------------- */

// A1. Return the amount as a string with a dollar sign and exactly 2 decimals.
//     formatPrice(45) -> "$45.00"     formatPrice(7.5) -> "$7.50"
function formatPrice(amount) {
  return `$${amount.toFixed(2)}`;
}

// A2. Return the price after the discount for the condition, rounded to cents:
//     "new" no discount, "good" 10% off, "fair" 25% off, any other condition no discount.
//     discountedPrice(40, "good") -> 36     discountedPrice(45, "fair") -> 33.75
function discountedPrice(price, condition) {
  let discount = 0;
  if (condition === "good") {
    discount = 0.10;
  } else if (condition === "fair") {
    discount = 0.25;
  }
  return Math.round(price * (1 - discount) * 100) / 100;
}

// A3. Return one line: title (course) - condition - price, with " [SOLD]" at the end
//     when the listing is sold. Use a template literal and call formatPrice.
//     "Calculus I (MATH 210) - good - $45.00"
function describeListing(listing) {
  const soldLabel = listing.sold ? " [SOLD]" : "";
  return `${listing.title} (${listing.course}) - ${listing.condition} - ${formatPrice(listing.price)}${soldLabel}`;
}

// A4. Return true when the listing is NOT sold AND its price is at most the budget;
//     otherwise return false.
function canBuy(listing, budget) {
  return listing.sold === false && listing.price <= budget;
}


/* ---------------- Part B: Arrays and Objects ---------------- */

// B5. Return the number of listings that are not sold.
//     Required technique: a for...of or for loop with a counter.
function countAvailable(listings) {
  let count = 0;
  for (const listing of listings) {
    if (listing.sold === false) {
      count++;
    }
  }
  return count;
}

// B6. Return the listing whose id matches, or null if there is none.
//     Required technique: find, then return null instead of undefined.
function findListing(listings, id) {
  const match = listings.find((listing) => listing.id === id);
  return match === undefined ? null : match;
}

// B7. Return an array of the listings for that course code ([] when none match).
//     Required technique: filter.
function listingsForCourse(listings, course) {
  return listings.filter((listing) => listing.course === course);
}

// B8. Return an array of the TITLES of the listings the buyer can afford.
//     Required technique: filter, then map; call your canBuy inside filter.
function affordableTitles(listings, budget) {
  return listings
    .filter((listing) => canBuy(listing, budget))
    .map((listing) => listing.title);
}

// B9. Return the UNSOLD listing with the lowest price; null if no listing is unsold.
//     If prices tie, return the first one.
//     Required technique: a loop with the "smallest so far" pattern.
function cheapestAvailable(listings) {
  let cheapest = null;
  for (const listing of listings) {
    if (listing.sold === false &&
        (cheapest === null || listing.price < cheapest.price)) {
      cheapest = listing;
    }
  }
  return cheapest;
}

// B10. Return an object { seller, count, total } describing that seller's UNSOLD
//      listings, with total rounded to cents.
//      Required technique: a loop with a counter and a running total.
function sellerSummary(listings, seller) {
  let count = 0;
  let total = 0;
  for (const listing of listings) {
    if (listing.seller === seller && listing.sold === false) {
      count++;
      total += listing.price;
    }
  }
  return { seller, count, total: Math.round(total * 100) / 100 };
}
