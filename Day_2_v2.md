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

- Give them mathematical expression and them them to convert them to code. Save the result of the expression to a variable named `result`.
- Example expressions:

  - $\Large\frac{5 + 7}{3}$

  - $1 + \Large(\frac{5 + 7}{3})$

  - $2 + ((3 + 1) * 5)^2$

  - $\Large\frac{-b + \sqrt{D}}{2a}$

    > _Also explain to them that they can use a function to calculate the square root. Use `Math.sqrt()`_

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
- Tell them about the `comparison` and `logical` operators

  - Comparison operators are used to compare to values or 2 data types in some cases.
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

  - Make it very clear that all of these operators when used in expression return a `boolean` value that is, `true` or `valse`.
  - Some of these operators might be intuitive to understand, but make sure you explain the difference between `==` and `===`. This is an example:

  ```js
  displayLn("5" == 5)
  // This code will result 
  ``` 