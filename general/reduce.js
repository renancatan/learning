const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15

const strings = "hello world";

// In this example, the reduce() method is used to reverse the characters in the string. 
// The string is first split into an array of individual characters using the split('') method. 
// The callback function takes two arguments, accumulator and currentValue, and returns the currentValue followed by the accumulator. 
// The initialValue of an empty string '' is passed as the second argument to the reduce() method, which is the initial value of the accumulator.
const reversedString = strings.split('').reduce(
    (accumulator, currentValue) => {
  return currentValue + accumulator;
}, '');

console.log(reversedString); // Output: "dlrow olleh"


// myTest

myArray = [1,3,6];
// acumulator will take each value of the array, and will "deliver" for current value
// current value alone, instead is just the last value of the array, so it needs the acumulator
// to take all iterated value from array
const mySum = myArray.reduce(
    (acumulator, currentValue) => {
        return acumulator + currentValue; 
    }
, 0);

console.log(mySum);