process.env.MY_VARIABLE_PARENT = "parent value";
const child_process = require("child_process");
child_process.execSync("node envChild.js");
console.log(process.env.MY_VARIABLE_PARENT);

// echo $MY_VARIABLE_PARENT  // after running, the value doesn't exist anymore.

