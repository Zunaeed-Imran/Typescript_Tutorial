// built in type: numebr, string, boolean, void, undefined, null


let userId: number;
let firstName: string;
let lastName: string;
let isActivated: boolean;

userId = 520;
firstName = "imran";
lastName = "rifat";
isActivated = true;

let fullName = firstName.concat(lastName);

console.log(
  `
  id: ${userId},
  Name: ${fullName},
  account activated: ${isActivated}
  `
);

console.log(fullName.split(" "));
console.log(userId.toLowerCase());