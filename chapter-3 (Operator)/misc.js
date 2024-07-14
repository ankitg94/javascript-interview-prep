//rest,spread operator 
//rest-collect function-Parameter 
//spread-expand function-Arguments

/*
const a="ashu"
const b="ankit"
console.log(a+b)
let copiedVariable=[...a,...b]//spread operator
console.log(copiedVariable)

let array1 =[1,2,3,4,5,6]
let array2 =[7,8,9,10,11]
//console.log(array1+array2)
let finalArray =array1+array2;
let newArray =[...array1,...array2]
console.log(typeof(finalArray))
console.log("spread operator",newArray)
console.log(typeof(newArray))
*/

function sample(a,b,...c){//rest opertor
   let d=c;
   console.log(a,b)
   console.log(d)
}
//sample(10,20,30,40,50,60)
let array =[1,2,3,4,5,6] //spread operator
sample(...array)


//nullish coeliscing 
// this conecpt will used for  run  the second condition
// if first conditon is null/undefined 
let user;
let defaultUser = "Guest";

// Using nullish coalescing operator
let displayUser = user ?? defaultUser;
console.log(displayUser);  // Output: "Guest"

user = "Alice";
displayUser = user ?? defaultUser;
console.log(displayUser);  // Output: "Alice"
