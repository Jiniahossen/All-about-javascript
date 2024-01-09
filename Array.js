function sumOfEvens(arr) {

    // filter for events, push to new array, then sum

    let evenArr = arr.reduce((a, e) => a.concat(e), [])
    return evenArr.reduce((a, e) => {
        if (e % 2 === 0) {
            console.log(e)
            a + e;
        }
    }, 0)
}

sumOfEvens([
    [1, 0, 2],
    [5, 5, 7],
    [9, 4, 3]
])

function reverseArray(inputArray) {
    const reversedArray = inputArray.slice().reverse();
    return reversedArray;
}

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
