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
function addOne(n){
  return n + 1;
}
// - Write a Function Expression
const addNumber = function addOne(n){
  return n + 1;
}
addOne();
// - Write an Arrow Function without curly brackets(if possible)
const addNumber = (n) => n + 1 ;

// - Write an Arrow Function with curly brackets
const addNumber = (n)
=>{
  return n + 1;
}
  // - Execute the function
addOne();
// - Execute the function and store the return value in a variable.
let returnValue = addOne();
// - What is the typeof returnValue
// typeof returnValue //number
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(n);
// - Write a Function Expression
const substractNumber = function substractOne(n){
  return n - 1;
}
// - Write an Arrow Function without curly brackets(if possible)
const substractNumber = (n) =>n - 1;
   

// - Write an Arrow Function with curly brackets
const substractNumber= (n) =>{
  return n - 1;
}
// - Execute the function
substractOne();
// - Execute the function and store the return value in a variable.
let returnValue = substractOne();
// - What is the typeof returnValue
// typeof returnValue is number
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(num1, num2);
// - Write a Function Expression
const substracttwo = function sum(num1, num2){
  return num1 + num2;
}
// - Write an Arrow Function without curly brackets(if possible)
const substracttwo = (num1, num2) =>
   num1 + num2;

// - Write an Arrow Function with curly brackets
const substracttwo = (num1, num2) =>{
  return num1 + num2;
}
// - Execute the function
sum();
// - Execute the function and store the return value in a variable
let returnValue = sum();
// - What is the typeof returnValue
// typeof returnValue is number
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(num);
// - Write a Function Expression
const squareNumber = function square(num){
  return num * num;
}
// - Write an Arrow Function without curly brackets(if possible)
const squareNumber = (num)=>
   num * num;

// - Write an Arrow Function with curly brackets
const squareNumber = (num)=> {
  return num * num;
}
// - Execute the function
 square();
// - Execute the function and store the return value in a variable
let returnValue = squre();
// - What is the typeof returnValue
//typeof returnValue is number
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x, y);
// - Write a Function Expression
const greaternumber = function isGreater(x, y){
  if(x > y){
    return true;
  }
  else{
    return false;
  }
}
// - Write an Arrow Function without curly brackets(if possible)
const greaternumber = (x, y)=>
  x > y ?
  `true`
  :
  `false`;
// - Write an Arrow Function with curly brackets
const greaternumber = (x, y)=>{
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
let returnValue = isGreater();
// - What is the typeof returnValue
// typeof returnValue is number
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(number){
  if( number % 2 !== 0){
    return `odd`
  }
  else{
    return `even`
  }
}
// - Write an anonymous Function Expression
const oddOrEvenNumber = function (number){
  if( number % 2 !== 0){
    return `odd`
  }
  else{
    return `even`
  }
}
// - Write an named Function Expression
const oddOrEvenNumber = (number){
  if( number % 2 !== 0){
    return `odd`
  }
  else{
    return `even`
  }
}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
const oddOrEvenNumber = (number) =>number % 2 !== 0?`Number is odd`:`Number is even`;
 
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
let returnValue = oddOrEven()
// - What is the typeof returnValue
//typeof returnValue is number