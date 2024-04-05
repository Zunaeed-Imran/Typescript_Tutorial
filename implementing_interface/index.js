// in interface we use function signature.
var User = /** @class */ (function () {
    function User(fullName, age) {
        var _this = this;
        this.fullName = fullName;
        this.age = age;
        this.formetUser = function () {
            return "name: ".concat(_this.fullName, ", age ").concat(_this.age);
        };
    }
    return User;
}());
var user = new User("Mr. imran", 22);
console.log(user.formetUser());
