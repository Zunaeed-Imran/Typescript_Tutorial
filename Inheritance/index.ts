// we will practice inharitance in this file. by using extends. 

class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  displayShow(): void {
    console.log(`name: ${this.userName}, age: ${this.age}`);
  }
}


class Student extends User{
  studentId: number;
  
  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  displayShow(): void {
    console.log(`name: ${this.userName}, age: ${this.age} id: ${this.studentId}`);
  }
}

let studen1 = new Student('imran', 20, 520);
studen1.displayShow();
