let bikename: string = "Scooty";
let year: number = 2000;
let price: number = 40000;
let ismilaze: boolean = true;

function getBikeStatus(bikename: string, year: number, price: number): string {
    return `${bikename} was a super bike in ${year}. Price: ₹${price}.`;
}

let companynames: string[] = ["Honda", "pluser", "sujuki"];

const summary: string = getBikeStatus(bikename, year, price);

console.log(summary);
console.log(`Starring: ${companynames.join(",")}`);
console.log(`is it gives high milaze? ${ismilaze ? "Yes" : "No"}`);