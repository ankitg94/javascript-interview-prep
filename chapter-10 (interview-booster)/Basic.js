//[1]-what is javascipt ?
/*
 javascript is a programing language which is used designing the
  web page features :
  1-singleThreaded
  2-synchronus(blocking mode)
  3-dynamically-datatype
  4-promises
  5-Closures
  6-v8engine-chrome(js-engine) 
*/ 

//[2]what is client side vs server side ?

//client side execute on browser (take services)
//server side excute on server  (provide services)


//[3]-what is nodejs?
/*
nodeJs will provide  run time env for javascript execution on 
the server 
*/

//[4] Dom ?
/* 
dom is the tree structure of html element of webpage i.e interface
*/

//[5]Selectors ?

/* selectors will help you to get the specific element from the dom 
Either by selecting thier id,tag,className
ex- querySelector,querySelectorAll,getelementbyId etc
*/

//[6]  what is keywords?:reserved words

//[7]  what is identifiers?:name which identify the variable

//[8]  what is variables?
/*
a container,used for storing different type of data
1-variable can be declare by three way 
(var,let,const,no keyword)

variable type |  scope   |   redeclare  | update  
var               global        yes        yes
let               block         yes         no
const             block         no          no

2-scope-lifetime of the variables

2.1-globalScope 
var a=5;

2.2-functionalScope
function(){
--------scope
---------scope
}

2.3-blockScope
{---
sope
---}
ex-let,const
 */

/*
//Example of(var,let,const)
var e=12;
var e=56;      //can be redeclare,can update
let  c=34;
//let c=89     //can't be redeclare,can update
c=48;
const d=45;
//const d=23   // can't be redeclare,
//d=56;         //can't update

console.log(e)
console.log("updated by var ",c)
console.log(d)
console.log(e)
*/
//[9] what is datatype ?
//datatype : is type of variable
/*   
[9.1] - Primitive(trivial-single Value) , immutable   
call by value (copy-No actual change in orignal datatype )
Number,                                    
Bigint,
string,
boolean,
null -  [Standalone value],
undefined - [declare but not assign],
symbol

[9.2] - NonPrimitive(non-trivial-multiple value) ,mutable
call by refrence(actual changes)
Objects, 
array,
functions
*/

//[10] what is operators ?
/* operators is used to perform operation on the operand
 
  type of operator 
 1-unary operator
 Prefix  +1 (first increment)
 Postfix 2+  (last increment)

 2- binary operator
 ex - x+y
 + is the operator
 x,y is the operand
 arithmetic operator ( + ,-,*,/ )
 Assigment operator  ( = )
 comparison operator (== , ===)
 logical operator    (&& , ||)
 
3-terniary operator

condition ? true :false
 */ 

/*
what is strict equality ?

4 === "4" false (it will check datatype with  equality)

what is loose equality ?
4 == 4    true (comparison operator)
*/

//[11] what is hoisting ?

/* only variable (var) & function(fully hoisted) declaration but not the initialization 
are moved to the top of the code
due to this you will able to call the function before their  declaration  

 */

//var a; //declaration
//var a=30; // initialization + declaration
//a=10;
//console.log(a);
//const a;//not possible
//let a;//not possible
//var a;//runn properlly

//console.log(a) //undefind
// console.log(b)//tdz
// console.log(c)//tdz
//var a=10;
// const b;
// let c;
// console.log(abc(3,2))
// var abc=(a,c)=>{
//     let d = a+c
//     return d
// }

// greet()
// function greet(){
//     console.log("hello sir")
// }


// [12]what is asynchronus programing ?
/* 

asynchronous programing is used to run the some operation 
without affecting the main thread (js run on the single thread)
it will used to event loop for this async pgm 

call stack --> webapi (settimeout,api(more priorty))call back queue -->call stack
sequence of execution (priority 1-high)
1-synchronous programing 
2-api requst 
3-promises (async-await)
4-settimeout
5-call back
*/ 

// [13] what is spread operator Vs  rest operator ? 
/* 
  spread operator             rest operator
  copy the variable           copy the variable
  spread the value            collect the value
  args of function            perimeter of func
 */

  //data type conversion 
  // str-num
  // let score="33"// it can be convertable but || "33abc" is not convertable
  // console.log(score)
  // console.log(typeof(score))
  // const ValinNum =Number(score);
  // console.log("converted output",ValinNum)
  // console.log(typeof(ValinNum))
  // // num-str
  // let number = 45
  // console.log(typeof(number))
  // console.log(number)
  // let convertedStr =String(number)
  // console.log("converted to the str",convertedStr+ValinNum+number) //str concate
  // console.log(typeof(convertedStr))
  //num-bool

  // let myNumber = " ";
  // let isbool= Boolean(myNumber)
  // console.log(isbool)
  //note 
  //num->str = str
  //str->num = num case ( true="33" false="33q")

  //console.log("1"+2+2)   //122 output
  //console.log(1+2+"3")  // 33  output

