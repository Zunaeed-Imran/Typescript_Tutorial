var Practice2 = /** @class */ (function () {
    function Practice2(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    Practice2.prototype.practiceShow = function () {
        console.log(this.userName + this.age);
    };
    return Practice2;
}());
var user4 = new Practice2("ranas", 35);
user4.practiceShow();
