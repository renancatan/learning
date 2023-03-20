"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
}
exports.default = Person;
;
let p1 = new Person("renan", 277);
// p1.name = "renan"  (necessary when there's no constructor)
// p1.age = 277
console.log(`Name ${p1.name}, Age: ${p1.age}`);
