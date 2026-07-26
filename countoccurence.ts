
let arr: number[] = [1, 2, 2, 3, 1, 4, 2];

let frequency: { [key: number]: number } = {};

for (let num of arr) {
    if (frequency[num]) {
        frequency[num]++;
    } else {
        frequency[num] = 1;
    }
}

for (let key in frequency) {
    console.log(key + " : " + frequency[key]);
}

