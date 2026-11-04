/* ==========================================================
   CSDP 232 · PA2 — Book Swap Logic
   buggy.js — Part C: Debugging
   ----------------------------------------------------------
   Each function below has EXACTLY ONE bug.
   1. Reproduce it (self-check page or the Console)
   2. Read the exact error message or the wrong result
   3. Fix it with the smallest change - do not rewrite the function
   4. Log it in the bug log in README.md
   ========================================================== */


// C1. Return "Welcome to Shore Book Swap, <name>!"
function welcomeMessage(name) {
  const greeting = "Welcome to Shore Book Swap, ";
  return greeting + Name + "!";
}

// C2. Return true only when the condition is "fair", without changing the listing.
function isOnSale(listing) {
  if (listing.condition = "fair") {
    return true;
  }
  return false;
}

// C3. Return the total of the prices in the cart; 0 for an empty cart.
function cartSubtotal(cart) {
  let total = 0;
  for (let i = 0; i <= cart.length; i++) {
    total = total + cart[i].price;
  }
  return total;
}

// C4. Return the subtotal plus 6% Maryland sales tax, rounded to cents.
//     addTax(100) -> 106
function addTax(subtotal) {
  const withTax = subtotal * 1.06;
  const rounded = Math.round(withTax * 100) / 100;
}

// C5. The subtotal arrives from a form as text. Return the subtotal plus $5
//     shipping as a NUMBER.   addShipping("30") -> 35
function addShipping(subtotalText) {
  const shipping = 5;
  return subtotalText + shipping;
}
