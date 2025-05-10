# Day 2

## Topics

- Introduce them to `arithmetic` and `logical` operators.

- Arithmetic Operators `+`, `-`, `*`, `\`, `%`

  - Explain what is a `operator` and a `operand`
    ```js
    //   Operators
    //    |   |
    let x = 4 + 5
    //      |   |
    //     Operands
    ```
  - Clarify that the order of operations is the same as it is in Math. `()` -> `**` -> `*` -> `/` -> `%` -> `+` -> `-`
  - Explain the usage power operator `**`. `2 ** 3 = 8`
  - Explain the division remainder operator `%`. `8 % 2 = 0`
  - Explain the increment `++` and decrement `--` operators.
  - Give some examples on how to use these operators. Use the console application to display the results

    ```js
    let a = 5
    let b = 6

    displayLn(5 + 6)
    displayLn(5 - 6)
    displayLn(5 * 6)
    displayLn(5 / 6)
    displayLn(5 % 6)

    displayLn(b++)

    displayLn(5 + 6 * 2)
    displayLn((5 + 6) * 2)
    ```

  - Explain to them why this code works and what is does:

    ```js
    let x = 5
    x = x + 2
    displayLn(x)

    // The short hand version
    x += 2
    ```

  - Also

### Exercise 1

- Give them mathematical expression and tell them to convert them to code. Save the result of the expression to a variable named `result`.
- Example expressions:

  - $\Large\frac{5 + 7}{3}$

  - $1 + \Large(\frac{5 + 7}{3})$

  - $2 + ((3 + 1) * 5)^2$

  - $\Large\frac{-b + \sqrt{D}}{2a}$

    > _Also explain to them that they can use a function to calculate the square root. Use `Math.sqrt()`_

### Exercise 1 Solution

```js
let result1 = (5 + 7) / 3
displayLn(result1)

// --------------------------------------

let result2 = 1 + (5 + 7) / 3
displayLn(result2)

// --------------------------------------

let result3 = 2 + ((3 + 1) * 5) ** 2
displayLn(result3)

// --------------------------------------

let a = 2
let b = 4
let c = -3

// Calculate D
let D = b * b - 4 * a * c

let x1 = (-b + Math.sqrt(D)) / (2 * a)
let x2 = (-b - Math.sqrt(D)) / (2 * a)
```

- More on `arithmetic operators`
  - Tell them that the so called arithmetic operators can be used by other data types.
  - You can use the `+` to combine to `strings`. This is called string concatenation.
    ```js
    displayLn('Hello' + 'World')
    ```
  - But not every operator is compatible with every data type. For example you can't use `*` in `string`:
    > [!CAUTION]
    > This code with not run
    ```js
    displayLn('Hello' * 'World')
    ```
- Tell them about the `comparison` operators

  - Comparison operators are used to compare 2 values or 2 data types in some cases.
  - The mos common types of comparisons are:

    1. `==` equal to
    2. `===` equal value and equal type
    3. `!=` not equal
    4. `!==` not equal value or not equal type

    ***

    5. `>` greater than
    6. `>=` greater than or equal to
    7. `<` less than
    8. `<=` less than or equal to

  - Make it very clear that all of these operators when used in expression return a `boolean` value that is, `true` or `false`.
  - Some of these operators might be intuitive to understand, but make sure you explain the difference between `==` and `===`. This is an example:

    ```js
    // This code will print `true`
    displayLn('5' == 5)

    // This code will print `false`
    displayLn('5' === 5)
    ```

  - Also an operator that you might want to take some time to explain is the not equal `!=` and not equal value or not equal type `!==`

- Tell them about `logical` operator

  - Mos common `logical` operators
    1. `&&` - and operator (both conditions should be `true`)
    2. `||` - or operator (one or both conditions can be `true`)
    3. `!` - not operator (inverts the value of the operation, from `true` to `false` and vice versa)
  - Make sure to give examples of `and` and `or` operators.
  - Use the console to test different conditions with the new operators.

    ```js
    displayLn(true && true)
    displayLn(false && true)

    displayLn(false || true)
    displayLn(false || false)

    displayLn(!false)
    ```

    Output:

    ```js
    true
    false
    true
    false
    true
    ```

- Introduce the structure and why we use `if` statements.

  - If statements are used to make decisions by executing different code based on whether a condition is `true` or `false`.
  - The syntax for an `if` statement:
    ```js
    if (condition) {
      // this block of code is executed if the condition is true
    } else {
      // this block of code is executed if the condition is false
    }
    ```
  - We use the reserved keyword `if`.
  - Inside the parentheses `( )` we place an expression that evaluates to a boolean value, either `true` or `false`
  - If the condition holds to `true` the first block of code (that is inside `{ }`) will be executed. If the condition is `not true` the second block of code, that is noted by the `else` keyword will the executed.
  - Example exercise:

    ```js
    let isRaining = true

    if (isRaining) {
      displayLn('Make sure to take an umbrella today!')
    } else {
      displayLn('Today is a sunny day!')
    }
    ```

### Exercise 2

- Write a program that identifies if a person is eligible to vote or not.
- Print a message to the user if they can vote or not.
- Test your program with different values.

### Exercise 2 solution

```js
let age = 15

if (age >= 18) {
  displayLn('You can vote')
} else {
  displayLn('You can vote')
}
```

- You can have multiple condition in a `if` statement. We use this syntax:

  ```js
  if (condition1) {
    //  block of code to be executed if condition1 is true
  } else if (condition2) {
    //  block of code to be executed if the condition1 is false and condition2 is true
  } else {
    //  block of code to be executed if the condition1 is false and condition2 is false
  }
  ```

  - This is an example program that displays your grad based on the points taken in a test:

    ```js
    let points = 85

    if (points >= 90) {
      displayLn('Grade: A')
    } else if (points >= 80) {
      displayLn('Grade: B')
    } else if (points >= 70) {
      displayLn('Grade: C')
    } else if (points >= 60) {
      displayLn('Grade: D')
    } else {
      displayLn('Grade: F')
    }
    ```

### Exercise 3

- Write a program that prints a greeting based on the time of day. If time is less then `10`, print `Good morning`. If the time is less than `20`, print `Good day`, otherwise print "Good evening".

### Exercise 3 solution

```js
if (time < 10) {
  greeting = 'Good morning'
} else if (time < 20) {
  greeting = 'Good day'
} else {
  greeting = 'Good evening'
}
```

> [!TIP]
> Make sure while completing the exercises to include the logical operators `&&` and `||`. You can change the exercises, but make sure to implement the concepts for `if – else if – else`.
