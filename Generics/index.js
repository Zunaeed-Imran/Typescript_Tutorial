// generic can work with any type
// we take take more generic as we need.
function printUserInfo(userId, age, name) {
    console.log("id is: ".concat(userId, " age").concat(age, " name").concat(name));
}
printUserInfo("44", 25, "imran");
printUserInfo(44, 35, "rana");
printUserInfo(true, 20, "rafia");
