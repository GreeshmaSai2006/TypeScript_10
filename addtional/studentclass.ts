
class Student {
    readonly studentId: number;
    name: string;

    constructor(studentId: number, name: string) {
        this.studentId = studentId;
        this.name = name;
    }

    display(): void {
        console.log("Student ID:", this.studentId);
        console.log("Name:", this.name);
    }
}

let student = new Student(101, "Greeshma");

student.display();

// student.studentId = 102; // Error
