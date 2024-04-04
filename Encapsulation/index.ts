// we will learn Encapsulation in this file.
// we can access and modified from parent class not child class.



class User {
  public userName: string;
  public age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  displayShow(): void{
    console.log("Encapsulation");
};
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
// studen1.displayShow();

let user1 = new User("rocky", 25);
// we can change out side class.
user1.userName = "pinky";
console.log(user1);