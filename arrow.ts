
// 1. Traditional Named Function (The Full Form)
function add(a: number, b: number): number {
    return a + b;
}

// 2. Arrow Function (The Concise Form)
const multiply = (a: number, b: number): number => {
    return a * b;
};

// 3. Shorthand Arrow Function
const square = (num: number): number => num * num;

// Function Calls
console.log("1. Traditional Named Function (The Full Form)");
console.log(`Addition: ${add(10, 20)}`);

console.log("\n2. Arrow Function (The Concise Form)");
console.log(`Multiplication: ${multiply(10, 20)}`);

console.log("\n3. Shorthand Arrow Function");
console.log(`Square: ${square(5)}`);