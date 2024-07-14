//async-await will be used for the async operation 
//when ever await will used it will pause the execution of their surrounding
//try-catch will used for the checking the error success-will handle by try 
//and error will handle by catch()   
const abc=async()=>{
  try {
    let a=5;
    let b=6;
    let c=a+b;
    await console.log(c)
    console.log("done")


  } catch (error) {
    console.log("Error in above code")
  }
}
abc()