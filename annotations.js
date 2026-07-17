"use strict";
let bikename = "Scooty";
let year = 2000;
let price = 40000;
let ismilaze = true;
function getBikeStatus(bikename, year, price) {
    return `${bikename} was a super bike in ${year}. Price: ₹${price}.`;
}
let companynames = ["Honda", "pluser", "sujuki"];
const summary = getBikeStatus(bikename, year, price);
console.log(summary);
console.log(`Starring: ${companynames.join(",")}`);
console.log(`is it gives high milaze? ${ismilaze ? "Yes" : "No"}`);
