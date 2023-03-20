export default class Person {  // now this class can be exported for another class or can be inherited
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    };

    name: string;
    age: number;
};

let p1 = new Person("renan", 277);

// p1.name = "renan"  (necessary when there's no constructor)
// p1.age = 277

console.log(`Name ${p1.name}, Age: ${p1.age}`);
