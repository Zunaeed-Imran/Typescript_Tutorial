let users: {
  id: number;
  name: string;
  age: number;
}[] = [];

let user1: {
  id: number;
  name: string;
  age: number;
} = {
  id: 1,
  name: 'imran',
  age: 25,
};

let user2: {
  id: number;
  name: string;
  age: number;
} = {
  id: 2,
  name: 'ranas',
  age: 32,
};

users.push(user1);
users.push(user2);

const printUserInfo = (user: { id: number; name: string; age: number }) => {
  console.log(`userid${user.id}, name${user.name}, age${user.age}`);
};

users.forEach(users => printUserInfo(users));