
namespace NumberOperations {

    export function sum(num1: number, num2: number): number {
        return num1 + num2;
    }

    export function difference(num1: number, num2: number): number {
        return num1 - num2;
    }

    export function product(num1: number, num2: number): number {
        return num1 * num2;
    }

    export function quotient(num1: number, num2: number): number {
        return num1 / num2;
    }
}

// Using the namespace
console.log("Sum:", NumberOperations.sum(20, 8));
console.log("Difference:", NumberOperations.difference(30, 12));
console.log("Product:", NumberOperations.product(15, 6));
console.log("Quotient:", NumberOperations.quotient(36, 9));
