
let arr1: number[] = [1, 2, 3, 2, 4, 5, 1, 6];
let duplicates: number[] = [];

for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
        if (arr1[i] === arr1[j] && !duplicates.includes(arr1[i])) {
            duplicates.push(arr1[i]);
        }
    }
}

console.log("Duplicate Elements:", duplicates);
