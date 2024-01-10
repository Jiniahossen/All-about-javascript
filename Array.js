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
