"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Library {
    bookTitle;
    secretCode;
    totalBooks;
    constructor(bookTitle, secretCode, totalBooks) {
        this.bookTitle = bookTitle;
        this.secretCode = secretCode;
        this.totalBooks = totalBooks;
    }
    displayDetails() {
        console.log("Book Title:", this.bookTitle);
        console.log("Secret Code:", this.secretCode);
        console.log("Total Books:", this.totalBooks);
    }
}
let library = new Library("Harry Potter", "LIB2026", 120);
// Public member
console.log(library.bookTitle); // Accessible
// Private member
// console.log(library.secretCode);   // Error
// Protected member
// console.log(library.totalBooks);   // Error
library.displayDetails(); // Accessible
//# sourceMappingURL=access.js.map