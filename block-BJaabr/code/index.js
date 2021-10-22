// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(){
  return one;
}
// - Write a Function Expression
const addNumber = function addOne(){
  return one;
}
addOne();
// - Write an Arrow Function without curly brackets(if possible)
const addNumber = () => one ;

// - Write an Arrow Function with curly brackets
const addNumber = ()
=>{
  return one;
}
  // - Execute the function
addOne();
// - Execute the function and store the return value in a variable.
let returnValue = addOne(48, 43);
// - What is the typeof returnValue
// typeof returnValue //number
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne();
// - Write a Function Expression
const substractNumber = function substractOne(){
  return numA - numB;
}
// - Write an Arrow Function without curly brackets(if possible)
const substractNumber = () =>
   numA - numB;

// - Write an Arrow Function with curly brackets
const substractNumber= () =>{
  return numA - numB;
}
// - Execute the function
lsubstractOne();
// - Execute the function and store the return value in a variable.
let returnValue = substractOne(343, 343);
// - What is the typeof returnValue
// typeof returnValue is number
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum();
// - Write a Function Expression
const substracttwo = function sum(){
  return num1 + num2;
}
// - Write an Arrow Function without curly brackets(if possible)
const substracttwo = () =>
   num1 + num2;

// - Write an Arrow Function with curly brackets
const substracttwo = () =>{
  return num1 + num2;
}
// - Execute the function
sum();
// - Execute the function and store the return value in a variable
let returnValue = sum(82, 187);
// - What is the typeof returnValue
// typeof returnValue is number
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square();
// - Write a Function Expression
const squareNumber = function square(){
  return num * num;
}
// - Write an Arrow Function without curly brackets(if possible)
const squareNumber = ()=>
   num * num;

// - Write an Arrow Function with curly brackets
const squareNumber = ()=> {
  return num * num;
}
// - Execute the function
 square();
// - Execute the function and store the return value in a variable
let returnValue = squre(72);
// - What is the typeof returnValue
//typeof returnValue is number
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater();
// - Write a Function Expression
const greaternumber = function isGreater(){
  if(x > y){
    return true;
  }
  else{
    return false;
  }
}
// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets
const greaternumber = () =>{
  if(x > y){
    return true;
  }
  else{
    return false;
  }
}
// - Execute the function
isGreater();
// - Execute the function and store the return value in a variable
let returnValue = isGreater(3, 2);
// - What is the typeof returnValue
// typeof returnValue is number
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven();
// - Write an anonymous Function Expression
const oddOrEvenNumber = function (number){
  return number;
}
// - Write an named Function Expression
const oddOrEvenNumber = function oddOrEven(number){
  return number;
}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
const oddOrEvenNumber = (number) =>
 number % 2 !== 0?
 `Number is odd`
 :
 `Number is even`;
// - Write an Arrow Function with curly brackets
const oddOrEvenNumber = (number) =>{
 number % 2 !== 0?
 `Number is odd`
 :
 `Number is even`;
}
// - Execute the function
oddOrEven();
// - Execute the function and store the return value in a variable
let returnValue = oddOrEven(4)
// - What is the typeof returnValue
//typeof returnValue is number