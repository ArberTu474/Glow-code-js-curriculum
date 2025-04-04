# The DOM & Selecting Elements - Day 2

The Document Object Model `DOM` is a structured representation of the HTML document that allows JavaScript to access, modify, and interact with webpage elements dynamically.

When a webpage loads, the browser creates a tree-like structure of the entire document. Each HTML element becomes a node, and JavaScript can manipulate these nodes to change text, styles, images, or even add/remove elements dynamically.

Imagine you have a book (the webpage):

- The book cover is the document (the entire webpage).
- Each chapter is a `<div>` or <`section>`.
- The headings are `<h1>`, `<h2>`, etc.
- The paragraphs are `<p>`.
- If you were to highlight text or add notes, you’re modifying the content dynamically—just like JavaScript modifies the DOM!

When JavaScript interacts with the DOM, it's like using a pencil to update a book!

> And then we can go on and add an analogy to real life to make it more clear how everything interacts:this is optional feel free to change to smth else

Think of a smart home where everything (`lights`, `fans`, `doors`) is connected to a central system.

- HTML elements are like the appliances (`lights`, `thermostat`, `doors`).
- CSS styles are like decorations (wall colors, curtain styles).
- JavaScript (DOM manipulation) is like the remote control or smart assistant (Alexa, Google Home) that changes things dynamically

Example:

- You tell Alexa (JavaScript): `Turn the lights blue`.
- Alexa (JavaScript) finds the lightbulb (HTML element in the DOM) and changes its color (CSS property) dynamically.
  In a website, JavaScript acts like Alexa—listening to user interactions and updating elements on demand!

## How JavaScript Interacts with the DOM

1. ### Selecting Elements - JavaScript grabs elements from the page.

   ```js
   // Selects an element by ID
   document.getElementById('title')
   ```

   ```js
   // Selects the first element that matches a CSS selector
   document.querySelector('p')
   ```

   ```js
   // Selects all matching elements as a NodeList
   document.querySelectorAll('selector')
   ```

2. ### Changing Content & Styles - JavaScript modifies elements dynamically.

   ```js
   // Changes the text inside an element
   document.getElementById('title').textContent = 'New Title!'
   ```

   ```js
   // Changes the text color
   document.querySelector('p').style.color = 'blue'
   ```

   ```js
   // Changes the background color
   document.querySelector('h1').backgroundColor = 'yellow'
   ```

3. ### Responding to User Actions (Events) - JavaScript listens for `clicks`, `hovers`, or `inputs`.

   ```js
   // Listens for clicks on the element with id = “btn” and alerts the user by saying: “Button Clicked”
   document.getElementById('btn').addEventListener('click', function () {
     alert('Button Clicked!')
   })
   ```

4. ### Adding or Removing Elements - JavaScript creates and deletes elements dynamically.

   ```js
   let newParagraph = document.createElement('p')

   newParagraph.textContent = 'This is a new paragraph!'

   document.body.appendChild(newParagraph)
   ```

## Exercises

### Exercise number 1:

Change color of text

```html
<p id="colorText">Click the button to change my color!</p>
<button id="colorButton">Change Color</button>

<script>
  document.getElementById('colorButton').onclick = function () {
    document.getElementById('colorText').style.color = 'blue'
  }
</script>
```

### Steps:

1. Selection of the button with `document.getElementById("colorButton")`.
2. Use of `.onclick` to run the JavaScript code when the button is clicked.
3. Change of the color of the paragraph by selecting `colorText` and modifying `.style.color`.

### Exercise number 2:

Change text

```html
<p id="message">Hello!</p>
<button id="myButton">Click Me</button>

<script>
  document.getElementById('myButton').addEventListener('click', function () {
    document.getElementById('message').textContent = 'You clicked the button!'
  })
</script>
```

### Exercise number 3:

Change background color

```html
<button id="changeColor">Change Background</button>

<script>
  document.getElementById('changeColor').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue'
  })
</script>
```

### Exercise number 4:

Toggle button

```html
<button id="themeButton">Toggle Light/Dark Mode</button>

<script>
  document.getElementById('themeButton').onclick = function () {
    document.body.classList.toggle('dark-mode')
  }
</script>

<style>
  .dark-mode {
    background-color: black;
    color: white;
  }
</style>
```

### Exercise number 5:

Counter

```html
<p>Counter: <span id="counter">0</span></p>
<button id="increase">Increase</button>
<button id="decrease">Decrease</button>

<script>
  let count = 0
  document.getElementById('increase').onclick = function () {
    count++
    document.getElementById('counter').textContent = count
  }
  document.getElementById('decrease').onclick = function () {
    count--
    document.getElementById('counter').textContent = count
  }
</script>
```

## Other notes

Few points to mention before ending the lesson and maybe a few questions to ask if the concepts were clear:

- The DOM allows JavaScript to dynamically update
  HTML elements.
- We use `document.getElementById()` and `document.querySelector()` to select elements.
- We modify `text`, `styles`, and `visibility` using `.textContent`, `.style`, and `.classList.toggle()`.
- We handle events like button clicks using `addEventListener()` or inline `onclick`.

## Questions:

1. What is the purpose of the `getElementById()` method?
2. How can you change the text inside an HTML element using JavaScript?
3. How do you create a new element using JavaScript?
4. What is the method used to change an element’s CSS style in JavaScript?
5. What does `document.querySelector()` do?
