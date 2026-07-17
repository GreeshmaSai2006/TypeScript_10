"use strict";
let g = 45;
g = "Hi"; // OK
console.log(g);
let data = 32;
if (typeof data === "number") {
    // Safe to use as a number here
    let result = data + 10;
    console.log(result);
}
function logNotification(message) {
    console.log("ALERT:" + message);
}
logNotification("Setup Completed");
