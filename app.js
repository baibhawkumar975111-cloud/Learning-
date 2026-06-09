const product = require('./product.js');

console.log(product.searchByName("Laptop"));

console.log(product.searchByPrice(7800));

console.log(product.above5000());

console.log(product.below5000());

console.log("Total Products:", product.countProducts());

console.log("Most Expensive:", product.mostExpensive());

console.log("Cheapest:", product.cheapest());

product.addProduct({
    name: "Keyboard",
    price: 2500,
    quality: "Low"
});

console.log(product.getallproducts());

product.deleteProduct("Tab");

product.updatePrice("Mobile", 60000);

console.log(product.getNames());

console.log(product.getPrices());

console.log(product.exists("Laptop"));

console.log(product.qualityCategory());

console.log(product.priceRange());

console.log(product.sortAsc());

console.log(product.sortDesc());

console.log(product.withGST());

console.log(product.totalInventory());

console.log(product.productReport());