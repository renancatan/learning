"use strict";
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
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(kind, name, age) {
        this.kind = kind;
        this.name = name;
        this.age = age;
    }
    ;
    // building methods
    Animal.prototype.communicate = function () {
        console.log("Hello, I am the method from mother class");
    };
    ;
    return Animal;
}());
exports["default"] = Animal;
;
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(kind, name, age, breed) {
        var _this = _super.call(this, kind, name, age) || this;
        _this.breed = breed;
        return _this;
    }
    ;
    Dog.prototype.communicate = function () {
        console.log("I am from the 'child' class: Dog, which inherits from 'mother': Animal");
    };
    ;
    return Dog;
}(Animal));
;
var Person2 = /** @class */ (function (_super) {
    __extends(Person2, _super);
    function Person2(kind, name, age, personMood) {
        var _this = _super.call(this, kind, name, age) || this;
        _this.personMood = personMood;
        return _this;
    }
    ;
    Person2.prototype.communicate = function () {
        console.log("I am from the 'child' class: Person2, which inherits from 'mother': Animal");
    };
    ;
    return Person2;
}(Animal));
;
var dog1 = new Dog("cachorro de raça", "bob", 5, "hot wheels");
console.log(dog1, dog1.breed);
dog1.communicate();
var per1 = new Person2("Human", "Marley", 27, "happy");
console.log(per1, per1.personMood);
per1.communicate();
