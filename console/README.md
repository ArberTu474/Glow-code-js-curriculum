# Console Structure

This is a simple website for the girls to experiment with javaScript and to be able to run their exercises during th camp.

## How it works

Under `exercises` directory we can add `.js` files that contain a function, for example `ex1`, `ex2` etc.
If you want to run a specific exercise to the console you can open the `runExercise.js` file and pass the name of the exercise as the parameter of the function `runExercise()`. Like so:

```js
function runExercise(exercise) {
  printPromt()

  exercise()
}

runButton.addEventListener('click', () => {
  runExercise(ex1) // <-- Change it to `ex2` if you want to run exercise 2
})
```

After this setup, open the website in the browser and hit the `Run` button in the top right corner.

## Fetures & Methods

Inside the `scripts.js` file there are some predefined functions

- `clearTerminal()`: Clears the terminal screen
- `display(...messages)`: Prints a message without going to a new line
- `displayLn(...messages)` Prints a message and goes to a new line
- `printPromt()` This functions runs every time you press `Run`. You can use it to print ascii art as the promt of the terminal or just text. If you leave the body of the function empty, it will not print a promt.There are some examples commented out in the `scripts.js` file.

  For example:

  ```
  ╭─ GLOW Code:
  ╰─ Hello World
  ```

  ```
  (\_/)
  (•.•)
  />  Hello World
  ```

  ```
  GLOW Code>>> Hello World
  ```

- You can change the theme of the terminal by moving the silder next to the clear button. But if you want to make permanent changes to your theme you can edit the `--hue` css variable inside the `styles.css` file. Make sure to put a number between `0` and `360`.

> [!WARNING]
> Setting the theme this way is just a workaround. Maybe in future versions you won't need to change the `styles.css` file.
