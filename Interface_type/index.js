// interface face in cooding.
var users = [];
var user1 = {
    id: 1,
    name: "imran",
    age: 25,
};
var user2 = {
    id: 2,
    name: "ranas",
    age: 32,
};
users.push(user1);
users.push(user2);
var printUserInfo = function (user) {
    console.log("userid".concat(user.id, ", name").concat(user.name, ", age").concat(user.age));
};
users.forEach(function (users) { return printUserInfo(users); });
