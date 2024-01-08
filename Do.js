// reverse a string 

let sntnc='Hi kemon acho tumi';

let convertedStnc= sntnc.split(' ').map(function(word){
    return word.split('').reverse().join('')
})

let finalSntnc=convertedStnc.join(' ');
// console.log(finalSntnc);

//check array or object

function checkArray(arr){
     return Array.isArray(arr);
}

// console.log(checkArray([]));
// console.log(checkArray({}));


//How to empty and array in Javascript? Do not reset it to a new array,and do not lopp through to pop each value

let arr=[1,2,3,4,5]
arr.length=0;
// console.log(arr);

//how would you check if an number is an ineteger?
// let a=2;
// console.log(Number.isInteger(a));

function CheckInteger(num){
    if(num%1===0){
        return true;
    }
    else{
        return false;
    }
}

const check=CheckInteger(10.5);
// console.log(check);

//duplicate an array

function duplicate(num){
    return num.concat(num)
}

// console.log(duplicate([1,2,3,4,5,6]));

function reverseNumber(num){
    let rev=0;
    while(num>0){
        let rem=num%10;
        rev=rev*10+rem;
        num=Math.floor(num/10)
    }
    return rev;
}

// console.log(reverseNumber(9526));

//sort a string alphabaticly

const Name='Jinia';
console.log(Name.split('').sort().join(''));
// const Name = [10, 2, 752, 9, 1, 3, 23, 45, 871];
// console.log(Name.sort((a, b) => a - b));
console.log(!""&&"pro")

let age = 25; 
let age2=age;
age2=4;
console.log(age);
//Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

function triangleArea(a,b,c){
    return area=(a+b+c)/2;
}
console.log('Triangle Area:', triangleArea(5,6,7));