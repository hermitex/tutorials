// 1. What is a JavaScript Function?

/**
 * A block of code that performs a specific task.
 *
 */

// 2. How to Create a JavaScript Function

// rules of variables names

function functionName(/** [parameters] */) {
  // body of the function
  // contains the statements that will executed
  // it is instructions that the computer will execute
}

// 3. How to Call a JavaScript Function
functionName(/** [arguments] */);
// 4. JavaScript Function Parameters and Arguments

// 5. JavaScript Function Return Values
// function anotherFunction(num1 = 5, num1 = 2) {
//   return a + b;
// }
// anotherFunction(5, 2);

// 6. JavaScript Function Scope
// In JavaScript, a variable has two types of scope:

// Global Scope => president of a country

let globalVariable = 5;
function globalScope() {
  console.log(`Printing from inside the function: ${globalVariable}`);
}
// globalScope();
// console.log(`Printing from outside the function: ${globalVariable}`);

// Local Scope => Police commissioner
function localScope() {
  let localVariable = 2; // block-scoping

  console.log(`Printing from inside the function: ${localVariable}`);
}

// localScope();
// console.log(`Printing from outside the function: ${localVariable}`);

// 7. JavaScript Function Closures
// complex
// 8. JavaScript Function Hoisting
hoistableFun();
// nonHoistableFun();

function hoistableFun() {
  console.log("I am hoitable!!");
}

const nonHoistableFun = () => {
  console.log("I am NOT hoitable!!");
};

// Run examples
// the addition function
// the traditional
function add(a, b) {
  let sum = a + b;
  //   console.log(`The sum of ${a} and ${b} is:  ${sum}`);
  return `The sum of ${a} and ${b} is:  ${sum}`;
}

function add(a, b) {
  let sum = a + b;
  //   console.log(`The sum of ${a} and ${b} is:  ${sum}`);
  return `The sum of ${a} and ${b} is:  ${sum}`;
}

function subtraction(a, b) {
  let sum = a - b;
  //   console.log(`The sum of ${a} and ${b} is:  ${sum}`);
  return `The sum of ${a} and ${b} is:  ${sum}`;
}

function multiply(a, b) {
  let sum = a * b;
  //   console.log(`The sum of ${a} and ${b} is:  ${sum}`);
  return `The sum of ${a} and ${b} is:  ${sum}`;
}

function division(a, b) {
  let sum = a / b;
  //   console.log(`The sum of ${a} and ${b} is:  ${sum}`);
  return `The sum of ${a} and ${b} is:  ${sum}`;
}

function modulus(a, b) {
  let sum = a % b;
  //   console.log(`The sum of ${a} and ${b} is:  ${sum}`);
  return `The sum of ${a} and ${b} is:  ${sum}`;
}

// let addFun = (a, b) => {
//   let sum = a - b;
//   return sum;
// };

// function expressions
// let addFun = (a, b) => a + b; // fat arrow function

// let result = addFun(2, 15);
// console.log(result);

// Advantages of functions
// reusabibility of code
// neat arrangement of of since we are encapsulate logic into blocks

console.log(add(3, 6));
console.log(subtraction(3, 6));
console.log(multiply(3, 6));
console.log(modulus(3, 6));
console.log(division(3, 6));

console.log(add(3, 6));
console.log(subtraction(3, 6));
console.log(multiply(3, 6));
console.log(modulus(3, 6));
console.log(division(3, 6));

console.log(add(3, 6));
console.log(subtraction(3, 6));
console.log(multiply(3, 6));
console.log(modulus(3, 6));
console.log(division(3, 6));

console.log(add(3, 6));
console.log(subtraction(3, 6));
console.log(multiply(3, 6));
console.log(modulus(3, 6));
console.log(division(3, 6));

console.log(add(3, 6));
console.log(subtraction(3, 6));
console.log(multiply(3, 6));
console.log(modulus(3, 6));
console.log(division(3, 6));

console.log(add(3, 6));
console.log(subtraction(3, 6));
console.log(multiply(3, 6));
console.log(modulus(3, 6));
console.log(division(3, 6));
