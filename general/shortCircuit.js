// Short-circuit expressions are logical expressions that evaluate the second operand only if the first operand does not suffice to determine the value of the expression. In other words, if the first operand of a logical expression is enough to determine the outcome, then the second operand is not evaluated at all. Short-circuit expressions are commonly used in conditional statements and assignments.

const foo = true;
const bar = false;

// Using the && operator as a short-circuit expression to conditionally execute code
if (foo && bar) {
  console.log("This will not be executed because bar is false.");
} else {
  console.log("This will be executed because bar is false.");
}

// Using the || operator as a short-circuit expression to assign a default value
const baz = null;
const qux = baz || "default";
console.log(qux); // Output: "default"
// In this example, the && and || operators are used as short-circuit expressions. The && operator is used in an if statement to conditionally execute code if both foo and bar are true. However, because bar is false, the code in the else block is executed instead. The || operator is used to assign a default value to qux if baz is falsy. Because baz is null, the string "default" is assigned to qux.