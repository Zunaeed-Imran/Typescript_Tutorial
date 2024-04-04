var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var parentPractice = /** @class */ (function () {
    function parentPractice(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    return parentPractice;
}());
var childPractice = /** @class */ (function (_super) {
    __extends(childPractice, _super);
    function childPractice(userName, age, Id) {
        var _this = _super.call(this, userName, age) || this;
        _this.Id = Id;
        return _this;
    }
    childPractice.prototype.display = function () {
        console.log(this.userName + " " + this.age + " " + this.Id);
    };
    return childPractice;
}(parentPractice));
var display1 = new childPractice("imran", 20, 6546464);
display1.display();
