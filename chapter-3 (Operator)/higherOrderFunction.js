
//callback,higher Order function,destructing
/*
In JavaScript, a callback is a function that is passed as an
argument to another function and is executed after some operation
has been completed. Callbacks are commonly used for asynchronous
operations, like handling responses from server requests,
file reading, timers, etc.
key points
1-Passed as an argument: A callback is a function passed to another
 function as a parameter.

2-Executed after an event: It is typically executed after some
 operation has been completed.
*/

function hellostu(name,call){
    console.log("hello ! "+name+ " ji")
    call()
}
function callbacky(){
    console.log("we are form the the callback")
}
hellostu("ankit",callbacky)

//higher order function
/*
Takes one or more functions as arguments.
Returns a function as its result.
Does both.
*/

let number = [1,2,3,4,5,6,7,,8,9,10]
/*
let double = number.map((i)=>{
       console.log(i*2)
}) 
*/
/*
let filterNumber =number.filter((j)=>{
      if(j>5){
        console.log(j)
      }
}) 
*/
/*
let filterNumber=number.filter((i)=>i>5)
console.log(filterNumber)
*/

//reduce
/*
let ReduceNumber=number.reduce((acc,curr)=>(acc+curr),0)
console.log(ReduceNumber)
*/
//destructuring
/*Array and object destructuring are convenient ways to extract values
 from arrays and objects in JavaScript */

//example-1
/*
const numbers = [1, 2];
const [a, b, c = 3] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
*/

const person = {
    name: 'John',
    age: 30
};

const { name, age } = person;

console.log(name); // Output: John
console.log(age);  // Output: 30

/*

const person = {
    name: 'John',
    age: 30
};

function greet({ name, age }) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

greet(person); // Output: Hello, my name is John and I am 30 years old.
*/

