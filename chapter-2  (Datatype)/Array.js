//array
//array is contigues memory allocation (creating spaces)
//mutable datatype


//const arr=[1,2,3]
//console.log(arr)
/*
var a=[1]
a.push(4)      //back insert
a.unshift(11)  //front insert
console.log(a)
console.log(typeof(a))
*/

let array=[1,2,3,4,5]
/*
array.pop()     //back delete
array.shift()   //front delete
console.log(array)
*/

//console.log(array.includes(6))//6 is not present [false]
//console.log(array.indexOf(3))//3 will be at the index [2]
//console.log(array.slice(1,3))//last range not included
//console.log(array.splice(1,3))// last range included [1-index to 3 element delete ]
//console.log(array.splice(2,0,6,7,8))//instertion purpose
//splice(index,deleteItem,element)
//console.log(array)

 
//example -3
/*
const a=[1,2,3,4]

const b=[5,6,7,8]
const c=[...a,...b]      //rest operator 
console.log(c)

const array2 =[1,2,3,[4,5,6,7],[8,9]]
const realArray =array2.flat(8) //flat is used for the removing array  
console.log(realArray)

*/

//console.log(Array.isArray("hitesh"))//false
//console.log(Array.from("hitesh")) 
//console.log(Array.from({name:"hitesh"}))