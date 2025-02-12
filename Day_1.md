**Goal:** Understand JavaScript basics and start interacting with the browser.

**First Day:**

**Introduction to JavaScript and its role in web development.**

  ( we gone do some explanation of what javascript is and examples with different websites and pictures maybe on how it changes the websites)

  **Mini Exercise:**  
  Open the browser’s console (F12 → Console).  
  Type alert("Hello campers, welcome to JavaScript!") and see what happens

**Explanation of key concepts like: Variables (let, const, var) and data types (strings, numbers, booleans, arrays).**

    Variables store information that can be used and changed in a program.
  
    JavaScript has different data types, including:

  - Strings → Text ("Hello").
  - Numbers → Numbers (25).
  - Booleans → True/False (true, false).
  - Arrays → Lists (\["apple", "banana"\]).

    let name = "Emma"; // String
    
    let age = 15; // Number
    
    let isStudent = true; // Boolean
    
    let hobbies = \["coding", "reading", "gaming"\]; // Array
    
    **Mini Exercise:**  
    Declare a variable city and set it to your hometown.  
    Print it in the console using console.log(city);.

**Introduction to Operators (+, -, \*, /, %).**

    Operators allow JavaScript to perform math calculations and comparisons.
    
    - \+ (Addition)
    - \- (Subtraction)
    - \* (Multiplication)
    - / (Division)
    - % (Modulus - gives the remainder)
    
    let num1 = 10;
    
    let num2 = 3;
    
    console.log(num1 + num2); // 13
    
    console.log(num1 - num2); // 7
    
    console.log(num1 \* num2); // 30
    
    console.log(num1 / num2); // 3.33
    
    console.log(num1 % num2); // 1 (remainder)
    
    **Mini Exercise:**
    
    Create two variables and multiply them.  
    Use % to check if a number is even or odd (num % 2 === 0).
    
 **Getting user input with prompt() and displaying output with console.log() and alert().**

    - prompt() asks the user for input.
    - console.log() displays messages in the browser console (for debugging).
    - alert() pops up a message box.
    
    let userName = prompt("What is your name?");
    
    alert("Hello, " + userName + "! Welcome to Glow Code.");
    
    console.log("User entered name: " + userName);
    
    **Mini Exercise:  
    **Ask the user for their age and display a message saying how old they will be in 5 years.  
    Use console.log() to print a sentence with their age.

**Review**

  - What is the difference between let and const?
  - What will console.log(10 % 3); output?
  - What does prompt() do?

**Final Exercise :**  
  Create a mini "User Profile Generator" where:
  
  1. The user enters their name, favorite color, age, and hobbies using prompt().
  2. The program displays a personalized greeting using alert().
  3. Print all details to the console.
