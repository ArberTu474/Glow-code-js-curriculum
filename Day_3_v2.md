## Topics
- Recap of the previous topics, variables, operators and conditions.
- Introduce the concept of loops: repeating blocks of code.
- Explain why we need loops: to avoid writing repetitive code manually.
- Introduce the `while` and `for` loop.
- Introduce the concept of `functions`.
- Show how loops adn functions can work together for better understanding of both concepts.

## Loops
### What is a loop
Loops let us `repeat a block of code ` multiple times without writing it again and again.
### Types of loops
- `while` loop
- `for` loop
### Syntax and example
**__While Loop__**
The ```while``` loop is used when  **__ you don't know in advance __** how many times you want to repeat something: you just know you want to keep going **__ while__** a condition is true.
- We clarify that everything that goes inside the while loop will be executed as many times as the condition remains true 
- The example below will repeat as long as the condition `count<0` is true.
- Tell them to be careful to increase the value of the variable count otherwise the loop will run forever.

``` js
let count = 0;
while (count<5){
    displayLn("Count is: ", count);
    count++;
}
```
- First the condition is checked: `count<5`
- If it is true, the block of code runs
- After running, it checks again, and continues until the condition is false
  
### Exercise 1
Write a program that print odd numbers from 1 to 20 using a `while` loop
### Solution
```js
let number = 1;
while (number<=20){
  displayln(number)
  number+=2
}
```
### **__For loop__**
A ```for``` loop is used when **__ you know exactly how many times __** you want to repeat something.
```js
for (let i = 0; i < 5; i++) {
  displayLn("i is: ", i);
}
```
- Explain that we need a variable let i = 0: as a start value
- i < 5: Condition to continue looping as long as we need, in this case it runs as long as i is less than 5
- i++: Increase i by 1 after every loop to make sure that our loop will stop at some point and not run forever.
This loop will run 5 times: when i is 0,1,2,3, and 4

## Why we use loops?
- Imagine we have to print numbers from 1 to 10 or maybe 1-100, we don't wnat to use displayln() for each  number that would be a waste of time.
- Now that we know how loops work we could use loops to do that automatically.

```js
for(let i =0; i<10;i++){
    displayln(i)
}
```
### Exercise 1
Write a program that prints all even numbers from 2 to 20 using a `for` loop.
We can use `console` to do these examples and exercises
### Solution
```js
for (let i =5;i<=20;i+=2){
    displayln(i)
}
```
### Exercise 2
Write a program that prints numbers from 15 to 1 using a `for` loop.
We use this exercise to make clear:
- that we can start with a value different from 0.
- the condition is also different we have to check if i is greater than the number used to repeat the loop
- the last part of the loop will now be a decrement of the value of i by one not increment
- let the students try and solve the exercise, if they have difficulty in figuring out we can help them

### Solution
```js
for(let i = 15; i>0;i--){
  displayln(i)
}
```
