let num: number = 153;
let temp = num;
let sum = 0;

let digits = num.toString().length;

while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
}

if (sum === num) {
    console.log(num + " is an Armstrong Number");
} else {
    console.log(num + " is Not an Armstrong Number");
}