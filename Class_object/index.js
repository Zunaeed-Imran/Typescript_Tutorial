// in class we can have: Properties, constructor, methods.
var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.displayShow = function () {
        console.log("name: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
var user1 = new User("imran", 20);
user1.displayShow();
var user2 = new User("likku", 19);
user2.displayShow();
