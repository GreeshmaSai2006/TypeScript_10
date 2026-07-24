"use strict";
let str = "programming";
let frequency = {};
for (let ch of str) {
    if (frequency[ch]) {
        frequency[ch]++;
    }
    else {
        frequency[ch] = 1;
    }
}
for (let key in frequency) {
    console.log(key + " : " + frequency[key]);
}
