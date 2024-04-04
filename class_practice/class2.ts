

class Practice2 {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  practiceShow(): void{
    console.log(this.userName + this.age);
  }
}


let user4 = new Practice2("ranas", 35);
user4.practiceShow();