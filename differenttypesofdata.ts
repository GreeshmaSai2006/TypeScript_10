
class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log(this.value);
    }
}

let numberBox = new Box<number>(100);
numberBox.display();

let stringBox = new Box<string>("Hello TypeScript");
stringBox.display();

let booleanBox = new Box<boolean>(true);
booleanBox.display();