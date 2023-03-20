// In this example, optional chaining and nullish coalescing are used as short-circuit expressions. Optional chaining is used to access the age property of the person object, which is potentially undefined because it is marked as optional in the Person interface. The ?. operator is used to conditionally access the age property, and the || operator is used to assign a default value of 0 if the age property is falsy.
// Nullish coalescing is used to assign a default value of "Unknown" to the personName variable if the name property of the person object is null or undefined. The ?? operator is used to check for nullish values, which are null and undefined, and assign the default value only if the name property is nullish.

interface Person {
    name: string;
    age?: number;
  }
  
  const person: Person = {
    name: "Alice"
  };
  
  // Using optional chaining as a short-circuit expression to access a potentially undefined property
  const personAge = person?.age || 0;
  console.log(personAge); // Output: 0
  
  // Using nullish coalescing as a short-circuit expression to assign a default value
  const personName = person.name ?? "Unknown";
  console.log(personName); // Output: "Alice"
  