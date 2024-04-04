// we will practice abstraction in this example.
// ### in abstraction we can make a method, but don't show how it work.
// ### abstruction method have no body.
// ### we can't make class object in abstruction.
// ### if a class inharite must have to inharite abstruc method.

abstract class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  abstract displayShow(): void;
}

class Student extends User {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  displayShow(): void {
    console.log(
      `name: ${this.userName}, age: ${this.age} id: ${this.studentId}`
    );
  }
}

let studen1 = new Student('imran', 20, 520);
studen1.displayShow();
