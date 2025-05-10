# Slides for Day 2

## 1 Operators

Operators are symbols that tell the computer to do something with values.

An operand is the thing the operator works on, usually numbers or variables.

```js
//   Operators
//    |   |
let x = 4 + 5
//      |   |
//     Operands
```

## 2 Arithmetic Operators

> Make sure to use these operators in the console by writing different expressions and printing the results.

- `+` → Add

- `-` → Subtract

- `*` → Multiply

- `/` → Divide

- `%` → Remainder

- `**` → Power

## 3 Assignment Operators

- `=` → Sets the value

- `+=` → Adds and updates

- `-=` → Subtracts and updates

```js
let x = 5

x = x + 2
// is the same as
x += 2
```

## 4 Exercise 1

Write expressions that are equivalent to the mathematical expressions given below.

> _Also explain to them that they can use a function to calculate the square root. Use `Math.sqrt()`_

- $\Large\frac{5 + 7}{3}$

- $1 + \Large(\frac{5 + 7}{3})$

- $2 + ((3 + 1) * 5)^2$

- $\Large\frac{-b + \sqrt{D}}{2a}$

## 5 Arithmetic Operators with Strings

The `+` addition operator can be used to combine to string together

```js
displayLn('Hello' + 'World')
```

## 6 Logical Operators

> Take the time to explain these operators. A `0` represents `false`, `1` represents `true`.
> Make it very clear that all of these operators when used in expression return a boolean value that is, true or false.

- `&&` And
- `||` Or
- `!` Not

### AND Logic

|               X               |               Y               |              AND              |
| :---------------------------: | :---------------------------: | :---------------------------: |
|  <p style="color: red">0</p>  |  <p style="color: red">0</p>  |  <p style="color: red">0</p>  |
|  <p style="color: red">0</p>  | <p style="color: green">1</p> |  <p style="color: red">0</p>  |
| <p style="color: green">1</p> |  <p style="color: red">0</p>  |  <p style="color: red">0</p>  |
| <p style="color: green">1</p> | <p style="color: green">1</p> | <p style="color: green">1</p> |

### OR Logic

|               X               |               Y               |              OR               |
| :---------------------------: | :---------------------------: | :---------------------------: |
|  <p style="color: red">0</p>  |  <p style="color: red">0</p>  |  <p style="color: red">0</p>  |
|  <p style="color: red">0</p>  | <p style="color: green">1</p> | <p style="color: green">1</p> |
| <p style="color: green">1</p> |  <p style="color: red">0</p>  | <p style="color: green">1</p> |
| <p style="color: green">1</p> | <p style="color: green">1</p> | <p style="color: green">1</p> |

### NOT Logic

|               X               |              NOT              |
| :---------------------------: | :---------------------------: |
|  <p style="color: red">0</p>  | <p style="color: green">1</p> |
| <p style="color: green">1</p> |  <p style="color: red">0</p>  |

## 7 Comparison Operators

> Explain the difference between `==` and `===`

- `==` equal to

- `===` equal value and equal type

- `!=` not equal

- `!==` not equal value or not equal type

## 8 Practice the new concepts

Find what is going to be displayed in the console by every print statement. Predict the output and then use the console to verify the answer.

```js
displayLn(true && true)
displayLn(false && true)

displayLn(false || true)
displayLn(false || false)

displayLn(!false)
```

## 9 If statement

An if statement lets your program make decisions.
It tells the computer, if something is true, then do this!

We can say: If it’s raining, then take an umbrella.
That’s just like how an if statement works in code.

## 10 If statement syntax

This is how we write an if statement:

```js
if (condition) {
  // this block of code is executed if the condition is true
} else {
  // this block of code is executed if the condition is false
}
```

- `if` – starts the decision

- `Condition`, inside the `()` – it must be `true` or `false`

- `First code block`, inside the `{}` – runs only if the condition is `true`

- `else code block`, inside the `{}` – runs only if the condition is `false`

- The `else code block` is optional

## 11 Example 1

> Let the girls write this example so they get comfortable with the syntax. Change the `score` so you get different results when you run the code.

```js
let score = 12

if (score > 10) {
  displayLn('You win!')
} else {
  displayLn('You lose!')
}
```

## 12 Example 2

> This is another example that you can write and let the girls interpret the code.

Another example

```js
let isRaining = true

if (isRaining) {
  displayLn('Make sure to take an umbrella today!')
} else {
  displayLn('Today is a sunny day!')
}
```

## 13 Exercise 2

- Write a program that identifies if a person is eligible to vote or not.
- Print a message to the user if they can vote or not.
- Test your program with different values.

## 14 If – Else If – Else Statement

This kind of statement helps your code choose between many options, not just two.

```js
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```

It says:

“If this is true, do this…

Else if something else is true, do that…

Else, do something different!”

## 15 Exercise 3

> Let the girls analyze the exercise and spot some important keywords, like: `if`, `than`, `otherwise`, so they can write the correct if statement.

Write a program that prints a greeting based on the time of day. If time is less then `10`, print `Good morning`. If the time is less than `20`, print `Good day`, otherwise print "Good evening".

---

> If you have time you can come up with different exercises where you can include the logical operators `&&`, `||` and `!`.
