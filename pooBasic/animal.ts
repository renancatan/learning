export default class Animal {
    constructor(kind: string, name: string, age: number) {
        this.kind = kind;
        this.name = name;
        this.age = age;
    };
    kind: string;
    name: string;
    age: number;

    // building methods
    public communicate(): void {
        console.log("Hello, I am the method from mother class");
    }; 
};

class Dog extends Animal {
    breed: string

    constructor(kind: string, name: string, age: number, breed: string) {
        super(kind, name, age)
        this.breed = breed;
    };

    public communicate(): void {
        console.log("I am from the 'child' class: Dog, which inherits from 'mother': Animal");
    };
};

class Person2 extends Animal {
    personMood: string;

    constructor(kind: string, name: string, age: number, personMood: string) {
        super(kind, name, age)
        this.personMood = personMood;
    };

    public communicate(): void {
        console.log("I am from the 'child' class: Person2, which inherits from 'mother': Animal");
    };
};

let dog1 = new Dog("cachorro de raça", "bob", 5, "hot wheels");
console.log(dog1, dog1.breed);
dog1.communicate();

let per1 = new Person2("Human", "Marley", 27, "happy");
console.log(per1, per1.personMood);
per1.communicate();
