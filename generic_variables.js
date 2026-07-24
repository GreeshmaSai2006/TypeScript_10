"use strict";
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    display() {
        console.log(this.value);
    }
}
let numBox = new Box(100);
let strBox = new Box("Hello");
numBox.display();
strBox.display();
