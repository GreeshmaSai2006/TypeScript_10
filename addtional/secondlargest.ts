
let arr: number[] = [10, 25, 8, 45, 32, 45];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of arr) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}

console.log("Second Largest Number:", secondLargest);
