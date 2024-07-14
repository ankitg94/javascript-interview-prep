/*
Promises are fundamental for managing asynchronous operations in 
modern JavaScript applications. They simplify handling of 
asynchronous tasks, promote cleaner code structure, and 
improve error handling. Embracing promises effectively can
enhance productivity and maintainability, crucial in scenarios
like password cracking ,fetch request;

/*
states-->

Pending: Initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully, and the promise now has a value.
Rejected: The operation failed, and the promise has a reason for the failure.
*/
/*
Syntax

Promises are created using the new Promise(executor)constructor,
where executor is a function with resolve and reject parameters.
They have methods like 
then() (for handling success) 
&catch() (for handling errors).

*/
//example
/*
function crackHash(hash) {
    return new Promise((resolve, reject) => {
      // Simulate cracking process with a timeout
      setTimeout(() => {
        if (hash === 'xyz123hashed') {
          resolve('Password cracked: "xyz123"');
        } else {
          reject(new Error('Hash could not be cracked'));
        }
      }, 2000); // Simulate 2 seconds cracking time
    });
  }
  
  // Using the promise
  crackHash('xyz123hashed')
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error.message);
    });
  */