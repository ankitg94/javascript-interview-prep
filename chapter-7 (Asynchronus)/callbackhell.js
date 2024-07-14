//callback hell
/*
Callback hell refers to the situation where nested callbacks
 are used excessively and unintuitively in asynchronous JavaScript code
 . It often arises when multiple asynchronous operations are dependent
  on each other or need to be executed sequentially.
 Here’s why callback hell happens and how it looks:
 // Complex Control Flow
*/ 

/*
asyncOperation1(function(result1, err1) {
  if (err1) {
    console.error("Error in operation 1");
  } else {
    asyncOperation2(result1, function(result2, err2) {
      if (err2) {
        console.error("Error in operation 2");
      } else {
        asyncOperation3(result2, function(result3, err3) {
          if (err3) {
            console.error("Error in operation 3");
          } else {
            // More nested callbacks...
          }
        });
      }
    });
  }
});

*/ 