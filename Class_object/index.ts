// in class we can have: Properties, constructor, methods.

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


let user1 = new User("imran", 20);
user1.displayShow();
let user2 = new User("likku", 19);
user2.displayShow();