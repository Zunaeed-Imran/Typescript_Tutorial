// in interface we use function signature.


interface IUserFormatter{
  formetUser: () => string
}

class User implements IUserFormatter{
  constructor(private fullName: string, private age: number) { }

  formetUser = () => {
    return `name: ${this.fullName}, age ${this.age}`;
  };
}

let user = new User("Mr. imran", 22);
console.log(user.formetUser());