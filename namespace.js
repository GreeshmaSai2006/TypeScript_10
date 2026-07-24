"use strict";
var NumberOperations;
(function (NumberOperations) {
    function sum(num1, num2) {
        return num1 + num2;
    }
    NumberOperations.sum = sum;
    function difference(num1, num2) {
        return num1 - num2;
    }
    NumberOperations.difference = difference;
    function product(num1, num2) {
        return num1 * num2;
    }
    NumberOperations.product = product;
    function quotient(num1, num2) {
        return num1 / num2;
    }
    NumberOperations.quotient = quotient;
})(NumberOperations || (NumberOperations = {}));
// Using the namespace
console.log("Sum:", NumberOperations.sum(20, 8));
console.log("Difference:", NumberOperations.difference(30, 12));
console.log("Product:", NumberOperations.product(15, 6));
console.log("Quotient:", NumberOperations.quotient(36, 9));
