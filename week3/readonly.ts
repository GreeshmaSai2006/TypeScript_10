class Course {
    public static institute: string = "Tech Academy";
    readonly courseId: number;
    courseName: string;

    constructor(courseName: string, courseId: number) {
        this.courseName = courseName;
        this.courseId = courseId;
    }

    display(): void {
        console.log("Course Name:", this.courseName);
        console.log("Course ID:", this.courseId);
        console.log("Institute:", Course.institute);
    }
}

let c1 = new Course("Full Stack Development", 2026);

c1.display();

// Access static property
console.log("Institute Name:", Course.institute);

// The following statements will give errors:
// c1.courseId = 3001;          // Error: Cannot assign to 'courseId' because it is readonly.
// Course.institute = "ABC Institute"; // This is allowed because it is static but NOT readonly.
