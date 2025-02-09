/*
Debouncing and throttling are two techniques used to control
 the frequency of execution of a function. These techniques
  are particularly useful in scenarios such as handling user
   input events like scroll, resize, keypress, etc., 
   where frequent execution
 of the event handler can lead to performance issues.
 */
/*<!DOCTYPE html>
<html>
<head>
  <title>Throttle Example</title>
</head>
<body>
  <div style="height: 2000px;">
    Scroll down to load more content...
  </div>
  <script>
    function throttle(func, limit) {
      let lastFunc;
      let lastRan;
      return function(...args) {
        if (!lastRan) {
          func.apply(this, args);
          lastRan = Date.now();
        } else {
          clearTimeout(lastFunc);
          lastFunc = setTimeout(() => {
            if ((Date.now() - lastRan) >= limit) {
              func.apply(this, args);
              lastRan = Date.now();
            }
          }, limit - (Date.now() - lastRan));
        }
      };
    }

    function loadMoreContent() {
      console.log('Loading more content...');
    }

    const handleScroll = throttle(function() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        loadMoreContent();
      }
    }, 1000);

    window.addEventListener('scroll', handleScroll);
  </script>
</body>
</html>
 */
//--------------------------------CRP----------------------
/* 
The Critical Rendering Path (CRP) is the sequence of steps that the browser takes to render a web page.
 It involves processing HTML, CSS, and JavaScript to construct the Document Object Model (DOM) and 
 the CSS Object Model (CSSOM), which are then combined to create the Render Tree.
  The Render Tree is then used to paint the pixels on the screen.

Understanding and optimizing the CRP is crucial for improving web page performance,
 as it directly affects how quickly a page becomes visible and interactive for users.

### Key Steps in the Critical Rendering Path:

1. **Document Object Model (DOM) Construction:**
   - The browser parses the HTML to build the DOM tree, which represents the structure and content of the document.

2. **CSS Object Model (CSSOM) Construction:**
   - The browser parses CSS to build the CSSOM tree, which represents the styles for each element in the document.

3. **Render Tree Construction:**
   - The browser combines the DOM and CSSOM to create the Render Tree, which includes only the elements needed for rendering (excluding non-visible elements like `<head>`).

4. **Layout:**
   - The browser calculates the size and position of each element in the Render Tree, a process also known as "reflow".

5. **Paint:**
   - The browser paints the pixels on the screen based on the calculated layout.

### Example of Critical Rendering Path:

1. **HTML Parsing and DOM Construction:**
   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>Critical Rendering Path</title>
       <link rel="stylesheet" href="styles.css">
       <script src="script.js" defer></script>
     </head>
     <body>
       <h1>Hello, World!</h1>
       <p>This is an example of the critical rendering path.</p>
     </body>
   </html>
   ```

2. **CSS Parsing and CSSOM Construction:**
  
3. **Render Tree Construction:**
  - The Render Tree includes only the elements that need to be rendered:
    - `<body>`
    - `<h1>`
    - `<p>`

4. **Layout Calculation:**
  - The browser calculates the positions and sizes of `<h1>` and `<p>`.

5. **Painting:**
  - The browser paints the text "Hello, World!" in blue and the paragraph in green.

### Optimizing the Critical Rendering Path:

1. **Minimize Critical Resources:**
  - Reduce the number and size of resources needed for the initial render (e.g., CSS and JavaScript files).
  - Inline critical CSS to reduce render-blocking resources.

2. **Defer Non-Critical Resources:**
  - Use `defer` or `async` attributes for JavaScript to load scripts without blocking rendering.
  - Load non-essential resources lazily.

3. **Reduce Resource Load Time:**
  - Optimize the delivery of resources by compressing files, using efficient formats, and leveraging caching.
  - Use a Content Delivery Network (CDN) to serve resources from a location closer to the user.

4. **Optimize CSS:**
  - Minimize and combine CSS files to reduce the number of HTTP requests.
  - Remove unused CSS.

5. **Optimize JavaScript:**
  - Minimize and combine JavaScript files.
  - Avoid long-running JavaScript execution that can block rendering.

### Example of Optimization:

#### Original HTML:
```html
<!DOCTYPE html>
<html>
 <head>
   <title>Critical Rendering Path</title>
   <link rel="stylesheet" href="styles.css">
   <script src="script.js"></script>
 </head>
 <body>
   <h1>Hello, World!</h1>
   <p>This is an example of the critical rendering path.</p>
 </body>
</html>
```

#### Optimized HTML:
```html
<!DOCTYPE html>
<html>
 <head>
   <title>Critical Rendering Path</title>
   <style>
     /* Inline critical CSS */
     /*
     body {
       font-family: Arial, sans-serif;
     }
     h1 {
       color: blue;
     }
     p {
       color: green;
     }
   </style>
   <script src="script.js" defer></script>
 </head>
 <body>
   <h1>Hello, World!</h1>
   <p>This is an example of the critical rendering path.</p>
 </body>
</html>
```

### Summary

Optimizing the Critical Rendering Path improves 
page load performance and ensures that users see the content as
 quickly as possible. Key techniques include minimizing critical 
 resources, deferring non-critical resources, and reducing resource
  load times. Understanding the CRP is essential for web developers
   aiming to create fast, responsive web applications.
*/

//-------------------------function currying-------------------------

/*
Currying is a functional programming technique that transforms a function with multiple arguments into a sequence of functions, each taking a single argument. This allows you to partially apply arguments to a function, enabling more flexible and reusable code.

### Basic Concept of Currying

A curried function takes one argument and returns a new function that takes the next argument, and so on, until all arguments have been provided. The final function in the sequence returns the result.

### Example of Currying in JavaScript

#### Without Currying:
```javascript
function add(x, y) {
  return x + y;
}

console.log(add(2, 3)); // Outputs: 5
```

#### With Currying:
```javascript
function add(x) {
  return function(y) {
    return x + y;
  };
}

const add2 = add(2);
console.log(add2(3)); // Outputs: 5
console.log(add(2)(3)); // Outputs: 5
```

In the curried version, `add` is a function that takes one argument and returns a new function that takes the next argument.

### Currying with ES6 Arrow Functions

You can also use arrow functions to make the syntax more concise:

```javascript
const add = x => y => x + y;

const add2 = add(2);
console.log(add2(3)); // Outputs: 5
console.log(add(2)(3)); // Outputs: 5
```

### Practical Example: Currying for More Flexible Function Composition

Consider a more practical example where currying can be useful: formatting a string with a prefix.

#### Without Currying:
```javascript
function format(prefix, message) {
  return `${prefix} ${message}`;
}

console.log(format('[INFO]', 'This is an informational message.'));
console.log(format('[ERROR]', 'This is an error message.'));
```

#### With Currying:
```javascript
const format = prefix => message => `${prefix} ${message}`;

const info = format('[INFO]');
const error = format('[ERROR]');

console.log(info('This is an informational message.'));
console.log(error('This is an error message.'));
```

In the curried version, you can create specialized formatting functions for different prefixes and reuse them throughout your code.

### Currying a Function with Multiple Arguments

If you have a function that takes multiple arguments, you can write a utility to curry it automatically:

```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

// Example usage
function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)); // Outputs: 24
console.log(curriedMultiply(2, 3)(4)); // Outputs: 24
console.log(curriedMultiply(2, 3, 4)); // Outputs: 24
```

### Summary

Currying is a powerful technique in functional programming that
 transforms functions with multiple arguments into sequences of 
 functions that take one argument at a time. This approach allows
  for more flexible and reusable code, as you can partially apply 
  arguments and create specialized functions. Understanding and 
  utilizing currying can lead to cleaner and more maintainable code,
   especially in complex applications. 
 */

   //---------------genrator function-----------------------
/*
   Generator functions in JavaScript provide a powerful way to create iterators. They allow you to define a function that can be paused and resumed, yielding multiple values over time. Generator functions are defined using the `function*` syntax and `yield` statements within the function body.

### Basics of Generator Functions

1. **Definition:** Generator functions are defined using the `function*` syntax.

   ```javascript
   function* generatorFunction() {
     yield 'value1';
     yield 'value2';
     yield 'value3';
   }
   ```

2. **Yield Statement:** The `yield` statement is used inside a generator function to pause execution and return a value to the caller. Each time `yield` is encountered, the function execution is paused, and the value specified by `yield` is returned.

   ```javascript
   function* generatorFunction() {
     yield 'value1';
     yield 'value2';
     yield 'value3';
   }

   const generator = generatorFunction();

   console.log(generator.next()); // { value: 'value1', done: false }
   console.log(generator.next()); // { value: 'value2', done: false }
   console.log(generator.next()); // { value: 'value3', done: false }
   console.log(generator.next()); // { value: undefined, done: true }
   ```

   - Each call to `generator.next()` returns an object with `value` and `done` properties.
   - `value`: The yielded value.
   - `done`: A boolean indicating whether the generator function has completed (`true`) or not (`false`).

3. **Iteration:** Generator functions can be iterated over using `for...of` loop or by manually calling `next()` until `done` is `true`.

   ```javascript
   function* generatorFunction() {
     yield 'value1';
     yield 'value2';
     yield 'value3';
   }

   for (let value of generatorFunction()) {
     console.log(value);
   }
   // Outputs:
   // value1
   // value2
   // value3
   ```

### Passing Values to and from Generators

Generators can also receive values from the outside using `next(value)` and return a final value when they complete using `return(value)`.

#### Example:

```javascript
function* generatorFunction() {
  const received = yield 'First value';
  console.log('Received:', received);

  const secondReceived = yield 'Second value';
  console.log('Second Received:', secondReceived);

  return 'Final value';
}

const generator = generatorFunction();

console.log(generator.next());   // { value: 'First value', done: false }
console.log(generator.next(10)); // Received: 10, { value: 'Second value', done: false }
console.log(generator.next(20)); // Second Received: 20, { value: 'Final value', done: true }
console.log(generator.next());   // { value: undefined, done: true }
```

### Use Cases for Generator Functions

1. **Lazy Evaluation:** Generator functions allow for lazy evaluation of values, meaning you can compute values on demand rather than all at once.

2. **Infinite Sequences:** They are useful for representing infinite sequences of data, such as numbers in a sequence or data streams.

3. **Asynchronous Programming:** Generators can be used with asynchronous operations to simplify asynchronous code using `yield` with promises.

4. **Control Flow:** They provide a different approach to control flow compared to traditional functions, enabling more complex and readable code in certain scenarios.

### Summary

Generator functions in JavaScript provide a powerful way to create
 iterators with a syntax that allows pausing and resuming function 
 execution. They are particularly useful for handling asynchronous
  operations, lazy evaluation, and representing infinite sequences.
   Understanding and utilizing generator functions can lead to cleaner 
   and more expressive code in various programming scenarios.

   */