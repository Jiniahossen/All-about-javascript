//what is object

const object = {
  hello: "world", //here hello is property name(key) and world is property value
};

// console.log(object);

const course = {
  notes: 20,
  lecture: 100,
  title: "Javascript",
  enroll() {
    console.log("Successfully enrolled");
  },
};
course.enroll();
console.log("object", course);
// console.log('enroll',course.enroll());

//creating/declarared/defined function

function printMe() {
  console.log("print.....");
}

printMe();

//function with parameters
function printMe2(param) {
  // passing parameter
  console.log(param);
}
printMe2("Jinia"); //arguments

//function defining a variable

const printMEAgain = function () {
  console.log("print me agin.....");
};

printMEAgain();

//function defining in a variable with parameters

const printMeAginWithParams = function (a, b) {
  console.log(a, b);
};
printMeAginWithParams(10, 20);

//returning something from function

function sum(a, b) {
  let plus = a + b;
  return plus;
}

let ans = sum(10, 20);
console.log(ans);

//deault parameters

function sum2(a, b) {
  return 2 * (a + b);
}

// console.log(
// sum(20) //ans is NaN
// );  for that we can declaraed default parameters like this

function sum3(a = 0, b = 0) {
  //we are declaraing default parameters value
  return 2 * (a + b);
}
console.log(sum3(10));

//Rest parameters

function collectThings(x, ...y) {
  console.log(x);
  console.log(y);
}
collectThings(1, 2, 38, 49, 5, 7, 38, 282, 283, 382, 93, 94, 58, 3, 4, 6, 7); //[Rest parameters allow a function to accept any number of or infinite number of argument a an array;A function can only have one Rest parameters.Rest parameters must be the last parameters.]

//arrow function

const arrow = (x, y) => {
  return a + b;
};

//nested function

function outer() {
  console.log("Outer...");
  function inner() {
    console.log("Inner...");
  }
  inner(); //we have to execute the nested function in the scope of the main unction
}

outer();

//closures

function Outer(x) {
  function inner(y) {
    return x + y;
  }
  return inner;
}

const outerReturn = Outer(20);
console.log(outerReturn(5));

//callback function

function getMoney(money) {
  money();
}

getMoney(function () {
  console.log("Here is your money!");
});

function sumOfEvens(arr) {
  // filter for events, push to new array, then sum

  let evenArr = arr.reduce((a, e) => a.concat(e), []);
  return evenArr.reduce((a, e) => {
    if (e % 2 === 0) {
      console.log(e);
      a + e;
    }
  }, 0);
}

sumOfEvens([
  [1, 0, 2],
  [5, 5, 7],
  [9, 4, 3],
]);

function reverseArray(inputArray) {
  const reversedArray = inputArray.slice().reverse();
  return reversedArray;
}

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)

// Function to filter even numbers from an array
function filterEvenNumbers(inputArray) {
  return inputArray.filter((number) => number % 2 === 0);
}

// Test cases
const array1 = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(array1)); // Output: [2, 4, 6]

const array2 = [7, 8, 9, 10, 11];
console.log(filterEvenNumbers(array2)); // Output: [8, 10]

const array3 = [];
console.log(filterEvenNumbers(array3)); // Output: [] (Empty array, no even numbers)

function triangleArea(a, b, c) {
  return (area = (a + b + c) / 2);
}
console.log("Triangle Area:", triangleArea(5, 6, 7));

function isWithinRange(number) {
  // Check if the number is within 20 of 100 or 400
  return Math.abs(100 - number) <= 20 || Math.abs(400 - number) <= 20;
}

let lang='hello';

const ret= lang && 'Javascript';
console.log(ret);