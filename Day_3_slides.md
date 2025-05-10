# Slides for Day 3

> Give the girls a small task to write a program that prints `Hello World` 5 times. They might use copy and paste, but they are going to find the process of writing the same instructions over and over boring.

> Give them the task to write `Hello World` 1000 times. They might say this task is impossible, but this is the perfect time to introduce them to `for` and `while` loops.

---

## 1 How to write good code

Writing the same code over and over can get boring and very repetitive. Thats why we try to avoid this when we program. This behavior can be described as `DRY`.

### But what is DRY???

DRY stands for:

- `D`on't
- `R`epeat
- `Y`ourself

## 2 Why DRY is important

- Less code means fewer mistakes
- Easier to fix (just change it in one place)
- Cleaner and easier to read

## 3 Loops

Writing a loop is a way to write DRY code.

A loop is a way to make the computer repeat something again and again automatically!

Javascript has different types of loops. We will learn about the `while` and `for` loops.

## 4 For loop

A for loop is a way to repeat something a certain number of times.

It’s like telling the computer: "Do this task 5 times"

```js
for (let i = 0; i < 7; i++) {
  // a block of code
}
```

## 5 How does a for loop work

```js
//    iterator condition incrementing
//      \        |      |
for (let i = 0; i < 7; i++) {
  // a block of code
}
```

- `let i = 1` → Start counting at 0

- `i < 7` → Keep going while i is less then 7

- `i++` → Add 1 every time (count up)

- Inside the `{ }` you write what you want to repeat!

## 6 Exercise 1

Use a for loop to print `Hello World` 10 times using a for loop.

## 7 Exercise 2

Write a program to print all numbers between 1 and 10. You can use the `index` (iterator) value to help you.

## 8 While loop

A while loop repeats something as long as a condition is true.

A while loop is a simplified version of a `for` loop, but it contains all the elements of a `for` loop.

Here is an example of how a `while` loop is written:

```js
let i = 0

while (i < 7) {
  // a block of code
  i++
}
```

> Do a little exercise with the girls where they should identify the `index`, `condition` and the `incrementation`.

## 9 Exercise 3

Now use a `while` loop to print all number between 5 and 10.

## 10 Exercise 4 (Optional)

> If the girls seem confident with what they have learned and if you have time to spare, you can do this exercise.

## 11 Functions

Functions are another way to write DRY code.

A function is a mini-program inside your program. It does one specific job and you can use it many times.

In general we give an input to a function and it gives us back an output. We can look at functions as back boxes, we don't know what happens inside the function, but if we give the right input it will respond with the right output.

## 12 Why are functions important

- Write code once, use it many times
- Makes your code organized
- Helps with big programs by breaking them into small parts

## 13 Function syntax

```js
function myFunction(/* parameters */) {
  // function body
}

// Function call
myFunction()
```

- `function` - is a keyword that tells Javascript to create a function
- `myFunction` - is the name. We can call our functions by using their names
- `( )` - we pass input vales here
- `{ }` - the block of code that will run, when we call our function

## 14 Functions with input values (parameters)

Function parameters are like blanks, they let you pass information into the function so it can use it.

This is a function that can greet anyone, if you know their name:

```js
function greet(name) {
  displayLn('Hello', name, '!')
}

greet('Ana')
greet('Ben')
greet('Mike')
```

## 15 Exercise 5

Write a function called `repeat` that prints `Hello World` a specific number of times. Use a parameter to specify how many times you want `Hello World` to be printed.

## 16 Exercise 6

Modify [Exercise 5](#15-exercise-5) to take another parameter `name` and include that name to the greeting.
