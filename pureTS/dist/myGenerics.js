"use strict";
const score = [];
const names = [];
function one(val) {
    return val;
}
function two(val) {
    return val;
}
function three(val) {
    return val;
}
three(true);
function four(val) {
    return val;
}
four({ brand: "Pran", price: 234 });
function getSearchProducts(products) {
    // database functions
    const myIndex = 3;
    return products[myIndex];
}
const getProducts = (products) => {
    return products[0];
};
function anotherFunction(valueOne, valueTwo) {
    return {
        valueOne,
        valueTwo,
    };
}
anotherFunction(3, {
    connection: "string",
    usernames: "string",
    passwords: "string",
});
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
