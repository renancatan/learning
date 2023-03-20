// The reduce() method is a higher-order function available in JavaScript, which is used to reduce an array to a single value by iterating over each element of the array and accumulating a final result. It takes a callback function as a parameter, which is applied to each element in the array to accumulate a final value. The syntax for reduce() is as follows:


// array.reduce(callback[, initialValue])
// The callback function takes two arguments, accumulator and currentValue, and returns the new value of accumulator. The accumulator is the initial value of the reduce operation, or the return value of the previous iteration of the callback function. The currentValue is the current element being processed in the array.

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

const ageSum = users.reduce((accumulator, currentUser) => {
  return accumulator + currentUser.age;
}, 0);
  
//AGES AVG
// const ageAverage = users.reduce((accumulator, currentUser, index) => {
// accumulator.sum += currentUser.age;
// accumulator.count = index + 1;
// return accumulator;
// }, { sum: 0, count: 0 });

// console.log(ageAverage.sum / ageAverage.count); // Output: 30
  
console.log(ageSum); // Output: 90



// Reduce with string example
const strings = "hello world";

const letterCount = strings.split('').reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {} as { [key: string]: number });

console.log(letterCount); // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
