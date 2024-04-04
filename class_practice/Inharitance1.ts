

class Practice2 {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  practiceShow(): void {
    console.log(this.userName + this.age);
  }
}


class Child extends Practice2{
  Id: number;

  constructor(userName: string, age: number, Id: number) {
    super(userName, age);
    this.Id = Id;
  }
  practiceShow(): void {
    console.log(this.userName, this.age, this.Id);
  }
}

let Practice3 = new Child("Rana", 36, 44444);
Practice3.practiceShow();