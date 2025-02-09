/*The DOM in JavaScript provides a structured way to interact 
with web documents dynamically. It allows you to access elements,
 modify content and styles, add or remove elements, and respond to 
 user interactions. Understanding DOM manipulation is essential for 
building interactive and responsive web applications
*/
/*
DOM (Document Object Model) in JavaScript refers to the hierarchical representation of HTML or XML 
documents as a tree structure. It provides a way for programs and scripts to dynamically access
 and manipulate the content, structure, and style of web documents.

### Understanding the DOM

1. **Tree Structure**: The DOM represents an HTML or XML document as a tree of objects. Each element, attribute, and piece of text in the document is a node in this tree.

2. **Nodes**: There are several types of nodes in the DOM tree:
   - **Element nodes**: Represent HTML elements (`<div>`, `<p>`, `<a>`, etc.).
   - **Text nodes**: Contain text within an element.
   - **Attribute nodes**: Represent attributes of elements.
   - **Comment nodes**: Represent comments in the document.

3. **API**: The DOM provides an API (Application Programming Interface) that allows programs to:
   - Access and modify document content.
   - Add, delete, or modify elements and attributes.
   - Respond to events triggered by user actions or the browser.
   - Manipulate styles and classes.

### Accessing Elements

In JavaScript, you can access elements in the DOM using methods provided by the `document` object:

- **By ID**: Access an element with a specific ID attribute.
  ```javascript
  const elementById = document.getElementById('elementId');
  ```

- **By Class Name**: Access elements with a specific class name.
  ```javascript
  const elementsByClass = document.getElementsByClassName('className');
  ```

- **By Tag Name**: Access elements with a specific tag name.
  ```javascript
  const elementsByTag = document.getElementsByTagName('div');
  ```

- **Query Selector**: Access the first element that matches a specified CSS selector.
  ```javascript
  const element = document.querySelector('#elementId .className');
  ```

- **Query Selector All**: Access all elements that match a specified CSS selector.
  ```javascript
  const elements = document.querySelectorAll('p');
  ```

### Manipulating Elements

Once you have access to an element, you can manipulate it by modifying its properties, attributes, or content:

- **Accessing Inner HTML**: Get or set the HTML content inside an element.
  ```javascript
  const element = document.getElementById('elementId');
  console.log(element.innerHTML); // Get HTML content
  element.innerHTML = '<p>New content</p>'; // Set HTML content
  ```

- **Accessing Text Content**: Get or set the text content inside an element.
  ```javascript
  const element = document.getElementById('elementId');
  console.log(element.textContent); // Get text content
  element.textContent = 'New text content'; // Set text content
  ```

- **Modifying Attributes**: Get or set attributes of an element.
  ```javascript
  const element = document.getElementById('elementId');
  console.log(element.getAttribute('href')); // Get attribute value
  element.setAttribute('href', 'https://example.com'); // Set attribute value
  ```

- **Styling**: Manipulate the style of an element.
  ```javascript
  const element = document.getElementById('elementId');
  element.style.color = 'red'; // Change text color
  element.style.fontSize = '16px'; // Change font size
  ```

### Adding and Removing Elements

You can dynamically add or remove elements from the DOM:

- **Creating Elements**: Create a new element.
  ```javascript
  const newElement = document.createElement('div');
  newElement.textContent = 'New Element';
  ```

- **Appending Elements**: Add a new element as a child of another element.
  ```javascript
  const parentElement = document.getElementById('parentElementId');
  parentElement.appendChild(newElement);
  ```

- **Removing Elements**: Remove an existing element from the DOM.
  ```javascript
  const elementToRemove = document.getElementById('elementToRemoveId');
  elementToRemove.parentNode.removeChild(elementToRemove);
  ```

### Event Handling

You can respond to user interactions or browser events using event listeners:

- **Adding Event Listeners**: Attach a function to execute when an event occurs.
  ```javascript
  const button = document.getElementById('myButton');
  button.addEventListener('click', function() {
      console.log('Button clicked');
  });
  ```
