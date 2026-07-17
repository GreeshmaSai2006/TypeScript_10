


// 1. Function with Parameters and Explicit Return Type
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// 2. Function with Default Parameter
function calculatePrice(price: number, tax: number = 10): number {
    return price + (price * tax) / 100;
}

// 3. Function with Optional Parameter
function displayStudent(name: string, age?: number): string {
    if (age !== undefined) {
        return `Student Name: ${name}, Age: ${age}`;
    }
    return `Student Name: ${name}`;
}

// 4. Function with Rest Parameters 
function addNumbers(...numbers: number[]): number {
    let sum: number = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

// Function Calls
console.log("1. Explicit Return Type");
console.log(greet("Rahul"));

console.log("\n2. Default Parameter");
console.log(`Total Price: ${calculatePrice(1000)}`);
console.log(`Total Price with 18% Tax: ${calculatePrice(1000, 18)}`);

console.log("\n3. Optional Parameter");
console.log(displayStudent("Anjali"));
console.log(displayStudent("Kiran", 20));

console.log("\n4. Rest Parameter");
console.log(`Sum: ${addNumbers(10, 20, 30, 40, 50)}`);
