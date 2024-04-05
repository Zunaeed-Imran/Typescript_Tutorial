// interface face in cooding.

interface IUser {
  id: number;
  name: string;
  age: number;
}

let users:IUser[] = [];

let user1: IUser = {
  id: 1,
  name: "imran",
  age: 25,
};

let user2: IUser = {
  id: 2,
  name: "ranas",
  age: 32,
};

users.push(user1);
users.push(user2);

const printUserInfo = (user: IUser) => {
  console.log(`userid${user.id}, name${user.name}, age${user.age}`);
};

users.forEach((users) => printUserInfo(users));