/*
HTTP-Cokies
small piece of data server send to user web browser,browser will store the cokiesand 
send back to the same server with later request
session mgmt- login,shoppingCart, gameScore
Personlization

*/ 

//local storage 
/*
Local Storage in JavaScript provides a way to store key-value pairs 
in a web browser. Unlike cookies, the data stored in local storage 
is not sent to the server with each request and has a much larger
 storage limit. It's useful for persisting data across sessions,
 as it doesn't expire unless explicitly removed.
 */
//localStorage.setItem("name","ankit")
//const username= localStorage.getItem('name')
//console.log(username)
//remove ,clear will also used here


//fetch Api
/* 
async function fetchData(url) {
  try {
    const response = await fetch(url);

    // Check if the response status is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json(); // Parse the response as JSON
    console.log('Data received:', data);
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  }
}

// Example usage
const randomURL = 'https://jsonplaceholder.typicode.com/posts/1'; 
// Replace with your random URL
fetchData(randomURL);

*/