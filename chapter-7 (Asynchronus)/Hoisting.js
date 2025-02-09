/*
Hoisting is a JavaScript mechanism where variables and function declarations are
 moved to the top of their containing scope during the compilation phase before the
  code is executed. This means that you can use functions and variables before 
  they are actually declared in the code.

### How Hoisting Works:

1. **Variable Hoisting:**
   - Variables declared with `var` are hoisted to the top of their function or global scope.
   - However, only the declaration is hoisted, not the initialization. This means the variable will
    be `undefined` until the line where it is initialized.

2. **Function Hoisting:**
   - Function declarations are fully hoisted. This means the entire function can be called
    before its declaration in the code.

3. **Let and Const:**
   - Variables declared with `let` and `const` are also hoisted but are not initialized.
    They are in a "temporal dead zone" from the start of the block until the declaration
     is encountered, which means accessing them before the declaration results in a `ReferenceError`.

### Examples:

1. **Variable Hoisting:**

```javascript
console.log(a); // undefined
var a = 5;
console.log(a); // 5
```

In the above example, the declaration `var a` is hoisted to the top, but the initialization (`a = 5`) is not. Hence, `console.log(a)` before the initialization prints `undefined`.

2. **Function Hoisting:**

```javascript
greet(); // "Hello, world!"

function greet() {
  console.log("Hello, world!");
}
```

Here, the function declaration `greet` is hoisted to the top, allowing it to be called before its actual declaration in the code.

3. **Let and Const Hoisting:**

```javascript
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 20;
```

Variables `b` and `c` are hoisted, but accessing them before their declarations results in a `ReferenceError` due to the temporal dead zone.

### Summary:

- **Hoisting** moves declarations to the top of their scope.
- `var` declarations are hoisted but initialized with `undefined`.
- Function declarations are hoisted entirely.
- `let` and `const` declarations are hoisted but not initialized, causing a temporal dead zone.

Understanding hoisting helps prevent errors
 related to accessing variables before their declarations and 
 makes it clearer how JavaScript interprets the code.

*/ 

//closures

/*
Closures are a fundamental concept in JavaScript that allow a function to access variables 
from an enclosing scope, even after that scope has finished executing.
 This is possible because functions in JavaScript form 
 closures around the scope in which they were declared.

### Explanation:

A closure is created when a function is defined inside another function
 and the inner function references variables from the outer function.
  The inner function retains access to the outer function's variables even after the outer function has returned.

### Example:

Let's look at a practical example to understand closures better:

```javascript
function createCounter() {
  let count = 0; // This is the outer function's local variable

  return function() { // This is the inner function, forming a closure
    count += 1;
    return count;
  };
}

const counter = createCounter(); // `createCounter` returns the inner function

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

### Explanation of the Example:

1. **Outer Function (`createCounter`):**
   - `createCounter` defines a local variable `count` and returns an inner function.
   - The inner function increments `count` by 1 and returns the updated value.

2. **Inner Function (Closure):**
   - The returned inner function forms a closure, capturing the `count` variable from the outer function's scope.
   - Even after `createCounter` has finished executing, the inner function retains access to `count`.

3. **Using the Closure:**
   - `const counter = createCounter();` calls `createCounter`, which returns the inner function and assigns it to `counter`.
   - Each time `counter()` is called, the inner function is executed, updating and returning the `count` variable.

### Real-World Example:

Closures are widely used in JavaScript for various purposes, such as data privacy and function factories. Here's a more real-world example involving event handlers:

```javascript
function setupEventHandlers() {
  let message = "Hello, world!"; // Outer function's local variable

  document.getElementById("myButton").addEventListener("click", function() {
    alert(message); // Inner function (event handler) forms a closure
  });
}

setupEventHandlers();
```

### Explanation of the Real-World Example:

1. **Outer Function (`setupEventHandlers`):**
   - Defines a local variable `message`.
   - Sets up an event handler for a button with the ID `myButton`.

2. **Inner Function (Closure):**
   - The event handler function forms a closure, capturing the `message` variable.
   - When the button is clicked, the event handler is executed, displaying the alert with the `message`.

3. **Using the Closure:**
   - `setupEventHandlers()` sets up the event handler, but the `message` variable remains accessible to the event handler function even after `setupEventHandlers` has finished executing.

### Key Points:

- **Scope Chain:** Closures have access to variables from their own scope, the scope in which they were defined, and the global scope.
- **Data Privacy:** Closures can be used to create private variables that can only be accessed by specific functions.
- **Function Factories:** They allow the creation of functions that can maintain state across multiple invocations.

Closures are a powerful feature in JavaScript that enable a
 wide range of programming patterns and techniques, making
  them essential to understand for 
effective JavaScript development.
*/