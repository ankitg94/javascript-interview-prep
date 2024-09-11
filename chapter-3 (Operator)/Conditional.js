//first question if-else

let age=18

if(age>18){
    console.log("he can vote")
}
else if(age==18){
     console.log("he will going to mature")
}
else{
    console.log("he can't vote")
}

//second question(switch case)

let month=8
switch (month) {
    case 1:
    console.log("Jan") 
    break;
    case 2:
    console.log("feb")
    break;
    case 3:
    console.log("mar")
    break;
    case 4:
    console.log("apr")     
    break;

    default:
        console.log("you have given me out of box number ")
        break;
}

//third question ( terniary operator )

let myAge=12
const result=myAge>18?"bear":"juice"
console.log(result)

let myName="ankit"
const result2 =myName=="ankit"?"yes is it":"no get out"
console.log(result2) 
