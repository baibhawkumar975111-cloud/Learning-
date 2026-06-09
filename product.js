let products = [
    { name: "Laptop", price: 78000, quality: "Good" },
    { name: "Mobile", price: 58000, quality: "Good" },
    { name: "Tab", price: 7800, quality: "Low" },
    { name: "Watch", price: 5000, quality: "Low" },

    { name: "Keyboard", price: 2500, quality: "Low" },
    { name: "Mouse", price: 1200, quality: "Low" },
    { name: "Monitor", price: 15000, quality: "Good" },
    { name: "Printer", price: 8500, quality: "Good" },
    { name: "Speaker", price: 3500, quality: "Low" },
    { name: "Headphone", price: 4000, quality: "Good" },
    { name: "PowerBank", price: 1800, quality: "Low" },
    { name: "Camera", price: 45000, quality: "Good" },
    { name: "SmartTV", price: 65000, quality: "Good" },
    { name: "Router", price: 3000, quality: "Low" },
    { name: "SSD", price: 5500, quality: "Good" }
];

function searchByName(name) {
    return products.find(p => p.name === name);
}

function searchByPrice(price) {
    return products.filter(p => p.price === price);
}

function above5000() {
    return products.filter(p => p.price > 5000);
}

function below5000() {
    return products.filter(p => p.price < 5000);
}

function countProducts() {
    return products.length;
}

function mostExpensive() {
    return products.reduce((a, b) => a.price > b.price ? a : b);
}

function cheapest() {
    return products.reduce((a, b) => a.price < b.price ? a : b);
}

function addProduct(product) {
    products.push(product);
}

function getallproducts() {
    return products;
}

function deleteProduct(name) {
    products = products.filter(p => p.name !== name);
}

function updatePrice(name, newPrice) {
    let product = products.find(p => p.name === name);
    if (product) product.price = newPrice;
}

function getNames() {
    return products.map(p => p.name);
}

function getPrices() {
    return products.map(p => p.price);
}

function exists(name) {
    return products.some(p => p.name === name);
}

function qualityCategory() {
    return {
        good: products.filter(p => p.quality === "Good"),
        low: products.filter(p => p.quality === "Low")
    };
}

function priceRange() {
    return products.filter(
        p => p.price >= 5000 && p.price <= 50000
    );
}

function sortAsc() {
    return [...products].sort((a, b) => a.price - b.price);
}

function sortDesc() {
    return [...products].sort((a, b) => b.price - a.price);
}

function withGST() {
    return products.map(p => ({
        name: p.name,
        gstPrice: p.price * 1.18
    }));
}

function totalInventory() {
    return products.reduce((sum, p) => sum + p.price, 0);
}

function productReport() {
    return products.map(p => ({
        Name: p.name,
        Price: p.price,
        Quality: p.quality
    }));
}

module.exports = {searchByName,searchByPrice,above5000,below5000,countProducts,mostExpensive,cheapest,addProduct,deleteProduct,updatePrice,getNames,getPrices,exists,qualityCategory,priceRange,sortAsc,sortDesc,withGST,totalInventory,productReport,getallproducts};