// function signature.
var userInfo1;
var userInfo2;
var userInfo3;
// function body
userInfo1 = function () {
    console.log('simple function signature');
};
userInfo2 = function (name) {
    console.log("".concat(name, " is 20 year's old"));
};
userInfo3 = function (name, age) {
    return ("".concat(name, " is ").concat(age, " year's old"));
};
userInfo1();
userInfo2('Imran');
console.log(userInfo3('Imran', 20));
