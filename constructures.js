"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Movie_Details {
    // Properties
    movieName;
    director;
    rating;
    // Constructor
    constructor(m_name, m_director, m_rating) {
        this.movieName = m_name;
        this.director = m_director;
        this.rating = m_rating;
    }
    // Method
    collection(day1, day2) {
        return day1 + day2;
    }
    // Display details
    display() {
        console.log("Movie Name:", this.movieName);
        console.log("Director:", this.director);
        console.log("Rating:", this.rating);
    }
}
// Create object
let movie1 = new Movie_Details("Pushpa 2", "Sukumar", 9.2);
// Call methods
movie1.display();
let totalCollection = movie1.collection(120, 150);
console.log("Total Collection:", totalCollection);
//# sourceMappingURL=constructures.js.map