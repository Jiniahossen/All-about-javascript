//creating/declarared/defined function 

function printMe() {
    console.log('print.....');
}

printMe();


//function with parameters
function printMe2(param) {// passing parameter
    console.log(param);
}
printMe2('Jinia'); //arguments


//function defining a variable 

const printMEAgain=function(){
    console.log('print me agin.....');
}

printMEAgain();

//function defining in a variable with parameters

const printMeAginWithParams=function(a,b){
    console.log(a,b);
}
printMeAginWithParams(10,20);

//returning something from function 

function sum(a,b){
    let plus=(a+b);
    return plus;
}

let ans=sum(10,20);
console.log(ans);

//deault parameters

function sum2(a,b){
    return(2*(a+b));
}

// console.log(
// sum(20) //ans is NaN
// );  for that we can declaraed default parameters like this

function sum3(a=0,b=0){ //we are declaraing default parameters value
    return(2*(a+b));
}
console.log(sum3(10)); 

//Rest parameters

function collectThings(x,...y){      
 console.log(x);
 console.log(y);

}
collectThings(1,2,38,49,5,7,38,282,283,382,93,94,58,3,4,6,7,);//[Rest parameters allow a function to accept any number of or infinite number of argument a an array;A function can only have one Rest parameters.Rest parameters must be the last parameters.]

//arrow function

const arrow=(x,y)=>{
    return(a+b)
}

//nested function

function outer(){
    console.log('Outer...');
    function inner(){
        console.log('Inner...');
    }
    inner();  //we have to execute the nested function in the scope of the main unction
}

outer();

//closures

function Outer(x){
    function inner(y){
        return x+y;
    }
    return inner;
}

const outerReturn=Outer(20);
console.log(outerReturn(5));


//callback function

function getMoney(money){
    money();
}

getMoney(function(){
    console.log('Here is your money!');
})



