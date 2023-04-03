
// In this file, we log the value of the environment variable MY_VARIABLE_PARENT 
// to the console and set a new environment variable MY_VARIABLE_CHILD.

console.log(process.env.MY_VARIABLE_PARENT);
process.env.MY_VARIABLE_CHILD = "child value";
console.log(process.env.MY_VARIABLE_CHILD);

