# Day 1

## Topics

- What is JS, and why we use it(Recap of the last camp).
- What is a programming language

- Introduce them to the core topics that they will learn about: variables, conditions, loops and functions.

- Introduce them to their coding environment (GLOW Console)

  - Open the `console` project in VS Code and explain the file structure
  - Explore the console interface.
  - Tell them where they are going to write their code

- Write their first `Hello World` program

  - Tell them how to use the `display()` and `displayLn()` functions
  - Explain why we use `( )` and `" "` to print a words

- Make a analogy about variables (Variables are like a box with a label)
- Explain the syntax for writing a variable: `let x = 5;`

  - Explain what the `let` keyword is.
  - Give examples of valid and invalid variables names
  - Clarify that the assignment operator `=` does not mean the same thing as the equals operator in Math.
  - Give examples of different data types that you can store in a variable.
  - Give them the rules for variable names

- Introduce some primitive data types (number, string, boolean)
  - Use the `typeof` operator in front of a variable and print the value, so the girls can see dhe data type of different variables.
  - Print different variables with different data types using one `display()` function call.

### Exercise 1

- Tell the girls to print a simple paragraph where they should describe a person. They should include in the description the persons `name`, `age` and their `favorite color`.
- Tell them to use variables for the `name`, `age` and `favorite color` and display different descriptions just by changing the variables.
- **Bonus:** If the paragraphs are to long you can tell them to use `\n`, which is an `escape character` that mimics the <kbd>Enter</kbd> key.

### Exercise 1 Solution

```js
let name = "Ben";
let age = 15;
let favoriteColor = "blue";

displayLn("Hello my name is", name, "and I am", age, "years old.\nMy favorite color is", favoriteColor);
```

- **Extra _(Optional)_**
  - You can teach the them about `Template Literal`, which is a type of string that makes it easier for you to embed variables into a string.
  
  - The solution with `Template Literal` would look something like this:

  ```js
  displayLn(`Hello my name is ${name} and I am  ${age} years old.\nMy favorite color is ${favoriteColor}`);
  ```

- Work with them to break up problems into smaller ones(Think like a programmer)
  - You can play a game where the girls give you instructions to do something, but the instructions should be short and very specific(like they are programming).
  - Explain that every program works by executing each line one at the time form the top to the bottom.

- More about variables
  - Introduce 2 new concepts: variable `declaration` and variable `initialization` and how these to operations can be combined in one line. 
    ```js
    // variable declaration
    let x;

    // variable initialization
    x = 5;

    // doing both in one line
    let x = 5;
    ```
  - Tell them that it is possible to change the data type that the variable holds during execution. Use `display()` to showcase this. 
    ```js
    let x = 5;
    displayLn(x);

    x = "hello";
    displayLn(x);
    ```
    Output:
    ```sh
    5
    hello
    ```
### Exercise 2

- Create a program that swaps the values of 2 variables and print them before and after swapping them.
- Make sure not to code the solution right away. The girls should give ideas on how to solve this problem. 
- Some common analogies for this problem is swapping the liquids between to glasses of water, where you should use a third glass. Or the examples where you have two balls on your hands and you need a helper hand (a friend for example) to swap them. 
- **Bonus:** Tell them about comments. Comments don't effect how the program works they just clarify the function of our code. (You use `//` to write an inline comment) 

### Exercise 2 Solution

```js
let x = "red";
let y = "blue";

displayLn(x, y);

// Swapping 
let temp = x;
x = y;
y = temp;

displayLn(x, y);

```
Output:

```sh
red blue
blue red
```

