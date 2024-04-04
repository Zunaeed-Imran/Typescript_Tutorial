class Practice1 {
  username: string;
  age: number;

  constructor(username: string, age: number) {
    this.username = username;
    this.age = age;
  }
  pract1Show(): void {
    console.log(`name: ${this.username} age: ${this.age}`);
  }
}

let user3 = new Practice1("imran", 45);
user3.pract1Show();
