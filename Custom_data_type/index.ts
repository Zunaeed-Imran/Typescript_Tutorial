// in this example we practice custom object by using type.



let users: User[];
users = [];

// we take a type.
type User = { userName: string; userId: number };

let user1: User;
user1 = { userName: "imran", userId: 520 };
users.push(user1);

let user2: User;
user2 = { userName: 'likon', userId: 519 };
users.push(user2);

let user3: User;
user3 = { userName: 'rafid', userId: 518 };
users.push(user3);


console.log(users);