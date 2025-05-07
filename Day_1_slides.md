# Slides for Day 1

## 1 (What is programming ?...)

> Ask the girls what they know about programming or if they have heard about the term programming

Programming is how we talk to computers!
We give them instructions so they know what to do, just like a recipe tells you how to make a cake.

## 2 How are computers build

> The girls can ask questions or add information about the things that thy might know. Also you can tell them more things about how a computer is build based on how interested the girls are.

Computers are machines that use some components called transistors(Transistors are tiny switches inside computers) that help them to perform calculations, execute logical operations and even store data.

Computers have many different pats, but the most important part of a computer is the CPU. CPU execute instructions and have billions of tiny transistors.

## 3 Programming Languages

Programming languages are how we talk to computers. They help us give computers instructions to follow.

You could give instructions to computer by just writing 1 or 0, but that would be very very hard... Thats why we use programming languages.

Some popular programming languages are: JavaScript, C++, C, Python, Java etc

## 4 What is JavaScript and why we use it

JavaScript is a programming language that makes websites come to life!
It helps websites do cool things like move, change, and respond when you click or type.

But JavaScript is also used to build other things that are not related to web development.

## 5 Some programming concepts

> Make sure just to mention these topics because we are going to discuss the later.

We are going to learn about variables, conditions, loops and functions.

---

> Introduce them to their IDE [GLOW CODE Console](https://glow-code-console.netlify.app/) and instruct them on how to use VsCode. You can introduce them to other ways of running JAvaScript code, like by using an [online text editor](https://www.programiz.com/javascript/online-compiler/).

---

## 6 Peanut Butter and Jelly Game

> Organize something similar to [this](https://www.youtube.com/watch?v=okkIyWhN0iQ). Girls should give you very specific instructs on how to make a peanut butter and jelly sandwich. Make sure to have a normal looking sandwich at the end. hahah :)

## 7 Variables

A variable is like a box that holds information.
You can name the box and put something inside it, like a number, word, or value.

Variables help use store information in an organized way.
Labeling our data (storing our data in variables) makes it easier to work with.

## 8 Variable syntax

> Explain every bit of this expression and take things slowly, this ming be thw first time that the girls write something like this. Let them ask question if they don't understand something.

```js
let age = 15
```

## 9 What does each word stand for

```js
let age = 15
```

- `let`: This is a keyword that tells the computer:

  “Hey! I’m about to create a new variable!” (Let me make a new box.)

- `age`: This is the name of the variable.

  It’s what you call the “box” so you can find it later.

  You can name it almost anything you want (but it should make sense).
  Here, we're calling it age, because we're storing someone’s age.

- `=`: This is the assignment operator.

  Put this value into the box called `age`.

- `15`: This is the value we're storing in the variable.

  So now the `age` variable holds the number 15.

- `;`: This tells the computer: “I’m done with this instruction.”

## 10 Variable naming rules

- Must Start with a Letter, underscore or Dollar Sign

  ✅ Good: `name`, `_score`, `$money`

  ❌ Bad: `1score` (can't start with a number!)

- No Spaces Allowed

  ✅ Good: `userName` or `user_name`

  ❌ Bad: `user name`

- Case Sensitive

  `Age`, `AGE`, and `age` are all different variables.

- Don’t Use Reserved Words
  You can’t use words JavaScript already uses, like:
  `let`, `var`, `if`, `else`, `function`, etc.

---

> Practice a bit with the console and create different variables with different data types. By now the girls should know how to use the function `displayLn()`.
> You can instruct them to use the `typeof` operator to verify the type of variables like this:

```js
let age = 15
let name = 'Ben'

displayLn(typeof age)
displayLn(typeof name)
```

output:

```sh
number
string
```

---

## 11 Exercise 1

- Tell the girls to print a simple paragraph where they should describe a person. They should include in the description the persons `name`, `age` and their `favorite color`.
- Tell them to use variables for the `name`, `age` and `favorite color` and display different descriptions just by changing the variables.
- **Bonus:** If the paragraphs are to long you can tell them to use `\n`, which is an `escape character` that mimics the <kbd>Enter</kbd> key.

## 12 Variable declaration and variable initialization

In JavaScript, variables go through two main steps:

- **Declaration** – telling the computer the variable exists

- **Initialization** – giving it a value

## 13 Variable declaration

Declaration means you're creating the variable, but not giving it a value yet.

(The box is empty for now.)

```js
let age
```

## 14 Variable initialization

Initialization means you give the variable a value for the first time.

```js
age = 15
```

(Now the `age` box holds the value 15)

## 15 Doing both at the same time

You can declare and initialize in one line:

```js
let age = 15
```

---

> Explain the difference between `initialization` and `assignment`
> Later, you can change the value, and that’s called assignment, not initialization.
>
> ```js
> let age = 15
>
> age = 18 // assignment
> ```

---

## 16 Exercise 2

- Create a program that swaps the values of 2 variables and print them before and after swapping them.
- Make sure not to code the solution right away. The girls should give ideas on how to solve this problem.
- Some common analogies for this problem is swapping the liquids between to glasses of water, where you should use a third glass. Or the examples where you have two balls on your hands and you need a helper hand (a friend for example) to swap them.
- **Bonus:** Tell them about comments. Comments don't effect how the program works they just clarify the function of our code. (You use `//` to write an inline comment)
