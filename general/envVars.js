/* "process" is a global object in Node.js that provides information about, and control over, the current Node.js process. The process object is always available in any Node.js application without the need to use require() to load it.
"env" is a property of the process object that holds an object containing the user environment. It's a set of key-value pairs representing the various environment variables that are available to the current process. Each key-value pair represents an environment variable, where the key is the name of the variable, and the value is the value assigned to that variable.
In the line process.env.MY_VARIABLE_PARENT = "parent value";, we are setting a new environment variable named MY_VARIABLE_PARENT with the value of "parent value".
By setting an environment variable using process.env, we can make that variable available to any child processes created by the current process. However, any changes made to environment variables using process.env are only effective within the current process and its child processes. The changes do not affect other processes or the system environment.
*/

process.env.MY_VARIABLE = "my value";
console.log(process.env.MY_VARIABLE)

// export MY_VARIABLE2="my value"  // Linux shell
