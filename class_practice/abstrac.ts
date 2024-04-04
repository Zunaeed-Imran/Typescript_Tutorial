

abstract class parentPractice{
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  abstract display(): void;
}

class childPractice extends parentPractice{
  Id: number;

  constructor(userName: string, age: number, Id: number) {
    super(userName, age);
    this.Id = Id;
  }
  display(): void {
    console.log(this.userName+" "+ this.age+" "+ this.Id);
  }
}
let display1 = new childPractice("imran", 20, 6546464);
display1.display();