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

//[2]-what is nodejs?
/*nodeJs will provide  run time env for javascript execution on 
the server */

//[3]-what is keywords?:reserved words

//[4]-what is identifiers?:name which identify the variable


//[5]-what is variables?
/*
a container,used for storing different type of data
1-variable can be declare by three way 
(var,let,const,no keyword)

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



//[6]-what is data type ?
/*
[1]-Primitive(trivial)    
call by value (copy-No actual change in orignal datatype )
Number,                                    
Bigint,
string,
boolean,
null -  [Standalone value],
undefined - [declare but not assign],
symbol

[2]-NonPrimitive(non-trivial)

call by refrence(actual changes)
Objects, 
array,
functions
*/

//[7]- Operator
/*
Prefix  +1 (first increment)
Postfix 2+  (last increment)
what is strict equality?

4 == 4    true (comparison operator)
4 === "4" false (it will check datatype with  equality)

*/ 
