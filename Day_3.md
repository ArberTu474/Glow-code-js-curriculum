# Day 3 - Introduction to Functions
### Goal:
-	Understand what `functions` are in JavaScript.
-	Learn how to `define` and `call` functions.
-	Use functions to keep code `clean`, `organized`, and `reusable`
## What Are Functions?
### Definition:
A function is a block of code that performs a specific task. It is executed when `called` or `invoked`.
### We give an example from real-life to make an analogy
Think of a `function` like a recipe:
-	You write the steps once.
-	You can reuse them every time you want to cook that dish.
  
For example, if making tea is a function, it might include:
-	Boil water
-	Add tea leaves
-	Pour into a cup
-	Done!

You don’t repeat the steps each time, you just say, `make tea`.
## Syntax of a Function:
```js
function sayHello() {
  alert("Hello, Glow Coders!");
}

sayHello(); // Calls the function
```
### Explanation:
- `function`: keyword to define a function.
-	`sayHello`: function name.
-	`()` : no parameters are passed.
-	`{}`: code block with the task to perform.
## Live Coding Examples:
1.	### Basic function call:
```js
    function greetUser() {
      let name = prompt("What's your name?");
      alert("Welcome, " + name + "!");
    }
    greetUser();
```
2. ### Function with parameters:
```js
      function greet(name) {
        console.log("Hello " + name + "!");
      }
      
      greet("Lori");
      greet("Sara");
```
### Explanation:
-	`name` is a parameter (input).
-	Function can be reused for any name.
  
3.	### DOM + Function:
   ```html
      <p id="message">Click the button</p>
      <button onclick="changeText()">Change</button>
      
      <script>
        function changeText() {
          document.getElementById("message").textContent = "You changed me!";
        }
      </script>
  ```
4.	### Function to change background color:

``` html
    <button onclick="setBlue()">Blue</button>
    <button onclick="setPink()">Pink</button>
    
    <script>
      function setBlue() {
        document.body.style.backgroundColor = "lightblue";
      }
    
      function setPink() {
        document.body.style.backgroundColor = "pink";
      }
    </script>
```
## Practice exercises:
### Easy:
Create a function that shows an alert with a fun fact.
```js
    function showFact() {
      alert("Did you know JavaScript was created in just 10 days?");
    }
```
### Medium:
Function to calculate and show user's age.
```js
    function calculateAge() {
      let birthYear = prompt("What year were you born?");
      let age = 2025 - Number(birthYear);
      alert("You are " + age + " years old!");
    }
```
### A bit harder:
Counter with Increase/Decrease using functions.
```html 
    <p>Counter: <span id="counter">0</span></p>
    <button onclick="increase()">+</button>
    <button onclick="decrease()">-</button>
    
    <script>
      let count = 0;
    
      function increase() {
        count++;
        document.getElementById("counter").textContent = count;
      }
    
      function decrease() {
        count--;
        document.getElementById("counter").textContent = count;
      }
    </script>
```

## Mini Project:
> We could optionally give the girls a mini project that changes the text and color background using functions when a button is clicked
### Mood Changer
-	3 buttons: Happy, Sad, Excited.
-	Each button changes text and background color.
-	Use different functions for each mood.
```html
    <p id="mood">How are you feeling?</p>
    <button onclick="setHappy()">Happy</button>
    <button onclick="setSad()">Sad</button>
    <button onclick="setExcited()">Excited</button>
    
    <script>
      function setHappy() {
        document.body.style.backgroundColor = "yellow";
        document.getElementById("mood").textContent = "Feeling Happy!";
      }
    
      function setSad() {
        document.body.style.backgroundColor = "lightblue";
        document.getElementById("mood").textContent = "Feeling Sad";
      }
    
      function setExcited() {
        document.body.style.backgroundColor = "orange";
        document.getElementById("mood").textContent = "Feeling Excited!!";
      }
    </script>
```
## Review:
- Functions are reusable blocks of code.
-	Use function keyword to define them.
-	Call a function by using its name followed by ().
-	Functions help organize code and reduce repetition.

## Questions to check understanding:
-	What is a function?
-	How do you define and call a function in JavaScript?
-	What is the difference between a function with parameters and one without?
-	Why are functions useful in programming?


