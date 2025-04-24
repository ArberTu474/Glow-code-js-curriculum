# Day 3

## Topics

- Explain to the girls the concept of DRY (Do Not repeat Yourself)
_ In programming it is very important to not repeat yourself. We want the machine to do the work for us. 
- Give the girls a small task to rite a program that print `Hello World` 5 times. They might use copy and paste, but they are going to find the process of writing the same instructions over and over boring. 
- Give them the task to write `Hello World` 1000 times. They might say this task is impossible, but this is the perfect time to introduce them to `loops`, `for` and `while` loops.

- In programming `loops` are know as a sequence of instructions that are repeated until a condition is met. 
- Introduce them to the syntax and the usage of a `for` loop. Make sure to explain that we use a `for` loop when we know form the beginning the number of `iterations` (loops) that we want to perform.
- `for` loop syntax:

```js
//    iterator condition incrementing
//      \        |      |
for (let i = 0; i < 7; i++) {
  // a block of code 
}
```
- A `for` loop has these elements: 
  - It has an `iterator` or as called in some cases an `index`. In one form or another the `index` keeps track of the iterations of the loop. 
  - The loop with continue to ru until the `condition` is met. For example at he beginning `i = 0` and we can see that `i < 7` or `0 < 7`. 
  - The last instruction involves increasing the value of our `index`. 

  - Each of these instructions are executed in a specific order:
    1. The value of `i` is set to `0`
    2. We check the condition. I the condition is met we run the code inside the `{ }`.
    3. After that, the value of `i` is increased by `1`. 
    4. After that `step 2` is repeated again and if the condition is not met, we break out of the loop. 

### Exercise 1

- Now tell the girls to use a for loop to print `Hello World` 10 times. 
- Work with them to find the number of iterations that the loop should have. 
- If a correct condition to make sure that the loop runs exactly 10 times.

### Exercise 1 Solution 

```js
for (let i = 0; i < 10; i++) {
  displayLn("Hello World!");
}
```
### Exercise 2 

- Tell them to write a program that print all numbers for `1` to `10`. 
- Work with them again to find a suitable condition.
- Girls might find it difficult if `i` is set to `0` form the beginning. Play around with the value of `i` and the condition

### Exercise 2 Solution nr. 1

```js
for (let i = 0; i < 10; i++) {
  displayLn(i + 1);
}
```
- There is another kind of loop that is widely used called a `while` loop.
- The `while` loop is a simplified version of a `for` loop and it looks something like this: 

```js
let i = 0;

while (i < 7) {
  // a block of code 
  i++;
}
```

- By looking at this the girls should be able to identify the the `index`, the `condition` and the `incrementor`, but they are placed in different places. 

- We use a `while` loop when we don't know form the beginning the number of iterations that we should perform. 
- Try explain to the girls what the above code does and what changes in every iteration. 

### Exercise 3 

- Display all the numbers form `1` to `10` again, but now by using a `for` loop. By the end of this exercise the girls should be able to "convert" a `while` loop to `for` loop. 

### Exercise 3 Solution

```js
let i = 0;

while (i < 10) {
  displayLn(i + 1);
  i++;
}
```

### Exercise 4 

- Write a program that prints the sum of all numbers between `1` and `200` that are `divisible by 4`.

### Exercise 4 Solution

```js
let sum = 0;
let number = 1;

while (number <= 200) {
  if (number % 4 == 0) {
    sum = sum + number;
  }

  number ++;
}

displayLn(sum);
```

- You can tell the girls to take this exercise and use a `for` loop instead. 

```js
int sum = 0;

for (let number = 4; i <= 200; number += 4) {
  sum = sum + number;
}

displayLn(sum);
```
- Do a little recap with about `for` loops and `while` loops and ask the girls to find the differences between them. 
- Let them know that there is another tye of loop in javascript called `do while` that they can explore it later on their own. 

- Functions
- Explain to the girls that there is another way for us to organize our code and to make it more readable. 
- At this stage the code that the girls are writing is pretty short and not so much complicated, but for other projects `functions` are a necessary thing.

- Make a comparison between functions in Math and functions in programming. 
- In Math we write a function like this: $f(x) = y$
- Everything that a `function` does is that it takes 0 ore more inputs, makes some calculations and than it can give us an output.
- In javascript a function looks like this:
  ```js
  function (/* parameters */) {
    // function body
  }
  ```
- We use function to split our code into smaller pieces so it is more readable, more maintainable and reusable. 
- Explain to the girls that functions don't have to have parameters. An example would be a function that greets us. 

  ```js
  function greet() {
    displayLn("Hello there");
  }
  ```
- Being able to greet someone bu just running this function is great, but what if we want our function to be more specific and greet anyone if they know the name of the person.
- Thats why we use parameters as input to our functions

  ```js
  function greet(name) {
    displayLn("Hello there", name);
  }
  ```

- After the girls understand that functions can have parameters explain to them that you should declare a function before you `call` it.
- This is an example of the above code
  ```js
  function greet(name) {
    displayLn("Hello there", name);
  }

  greet("Ana"); // This ia a function call
  ```
- Output:
  ```sh
  Hello there Ana
  ```

### Exercise 5 

- Write a function that print `Hello World` a specific number of times. Use a parameter to specify how many times you want `Hello World` to be printed.
- Gyve hints to the girls that they need to use a loop for this. Decide with them if a `for` loop or a `while` loop makes more sense. 

### Exercise 5 Solution

  ```js
  function repeat(times) {
    for (let i = 0; i < times; i ++) {
      displayLn("Hello World");
    }
  }

  repeat(6);
  ```

### Exercise 6

Modify [Exercise 5](#exercise-5) take another parameter `name` and include that name to the greeting.

### Exercise 6 Solution

  ```js
  function repeat(times, name) {
    for (let i = 0; i < times; i ++) {
      displayLn("Hello", name);
    }
  }

  repeat(6, "Ben");
  ```
- So we can use multiple parameters in a function