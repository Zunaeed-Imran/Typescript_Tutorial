var Practice1 = /** @class */ (function () {
    function Practice1(username, age) {
        this.username = username;
        this.age = age;
    }
    Practice1.prototype.pract1Show = function () {
        console.log("name: ".concat(this.username, " age: ").concat(this.age));
    };
    return Practice1;
}());
var user3 = new Practice1("imran", 45);
user3.pract1Show();
