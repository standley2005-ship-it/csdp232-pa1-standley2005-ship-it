/* Additional PA2 tests that do not change the instructor's checks.js.
   To run from the repository root: node pa2/tests/edge-cases.js
*/
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const context = vm.createContext({});
const jsDirectory = path.resolve(__dirname, '../js');
for (const file of ['data.js', 'bookswap.js', 'buggy.js']) {
  vm.runInContext(fs.readFileSync(path.join(jsDirectory, file), 'utf8'), context, { filename: file });
}

const tests = [
  ['Price includes two decimal places', 'formatPrice(0.5)', '$0.50'],
  ['Unknown condition has no discount', 'discountedPrice(14.25, "used")', 14.25],
  ['Fair condition gives 25% off', 'discountedPrice(20, "fair")', 15],
  ['Sold label is added to description', 'describeListing({title:"Test", course:"CSDP 232", condition:"good", price:2, sold:true})', 'Test (CSDP 232) - good - $2.00 [SOLD]'],
  ['Cannot buy a sold listing', 'canBuy({sold:true,price:1}, 100)', false],
  ['Available counter handles mixed listings', 'countAvailable([{sold:false},{sold:true},{sold:false}])', 2],
  ['Missing listing returns null', 'findListing([{id:1}],99)', null],
  ['Course filtering preserves order', 'listingsForCourse([{id:1,course:"A"},{id:2,course:"B"},{id:3,course:"A"}],"A").map(x=>x.id)', [1, 3]],
  ['Affordable titles exclude sold books', 'affordableTitles([{title:"A",sold:true,price:1},{title:"B",sold:false,price:5}],5)', ['B']],
  ['Cheapest returns the first listing when prices tie', 'cheapestAvailable([{id:1,sold:false,price:10},{id:2,sold:false,price:10}]).id', 1],
  ['Cheapest returns null when everything is sold', 'cheapestAvailable([{sold:true,price:1}])', null],
  ['Seller summary excludes sold books', 'sellerSummary([{seller:"Sam",sold:false,price:2.55},{seller:"Sam",sold:true,price:99},{seller:"Sam",sold:false,price:1.1}],"Sam")', { seller: 'Sam', count: 2, total: 3.65 }],
  ['Sale check does not modify input', '(()=>{const book={condition:"good"}; return [isOnSale(book),book.condition];})()', [false, 'good']],
  ['Empty cart subtotal is zero', 'cartSubtotal([])', 0],
  ['Tax is rounded to cents', 'addTax(19.99)', 21.19],
  ['Shipping treats text as a number', 'addShipping("12.5")', 17.5]
];

let passed = 0;
for (const [label, expression, expected] of tests) {
  try {
    const actual = vm.runInContext(expression, context);
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      passed++;
      console.log('PASS', label);
    } else {
      console.error('FAIL', label, 'expected:', expected, 'received:', actual);
    }
  } catch (error) {
    console.error('ERROR', label, error.message);
  }
}
console.log("Extra tests: " + passed + " of " + tests.length + " passed");
if (passed !== tests.length) process.exitCode = 1;
