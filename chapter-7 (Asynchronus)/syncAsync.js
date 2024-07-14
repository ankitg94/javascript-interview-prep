/*
Synchronous Operations (Sync):

blocking mode like [login-auth system]

Executed sequentially, one task at a time.
Each operation must complete before the next one begins.
Blocks further execution until it finishes.
Typically easier to understand and reason about, especially for 
simpler tasks.
*/

/*
Asynchronous Operations (Async):
Non-blocking mode [access multiple file ]

Executes tasks concurrently or in parallel with other operations.
Does not block further execution; allows the program to continue running.
Uses callbacks, promises, or async/await for handling results or errors.
Commonly used for operations that involve waiting for responses from servers,
file I/O, animations, or any task that might take time to complete.
*/

//sync example 
/*
let var1="start"
console.log(var1)
for(let i=1;i<=3;i++){
    console.log("sync result",i)
}
let var2 ="end"
console.log(var2) 
*/

//async example
/*
setTimeout(()=>{
    console.log("async operation")
},3000)
let var3="start";
console.log(var3)

let var4="End";
console.log(var4)
*/