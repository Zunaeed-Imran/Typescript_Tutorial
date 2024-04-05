// generic can work with any type
// we take take more generic as we need.

function printUserInfo<x,y,z>(userId: x, age:y, name:z) {
  console.log(`id is: ${userId} age${age} name${name}`);
}
printUserInfo("44", 25, "imran");
printUserInfo(44, 35, "rana");
printUserInfo(true, 20, "rafia");
