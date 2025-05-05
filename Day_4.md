# Day 4

## Topics

- During Day 4 you are going to introduce new ways on how javascript is used in web development.

- First of all you are going to ask the girls about the research that they have done and what they have learned.

- During day 4 the girls are going to learn about:
  - How to import/ write `<script>` tags in html
  - Write a function
  - Learn about the on `onclick` attribute
  - Learn how to identify elements using `querySelector()`
  - Change the content of html elements using `innerHTML`

## Part 1

_Create a simple HTML website_

- Start with creating a simple `HTML` website. The gris can generate this boilerplate code using VsCode.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript Exercise</title>
  </head>
  <body></body>
</html>
```

- Add other tags inside the `<body>`

```html
<body>
  <h1>My First JavaScript</h1>
  <button>Click me!</button>

  <p id="output"></p>
</body>
```

```html
<p id="output"></p>
```

- Explain to the girls that this paragraph is left blank in purpose, because it is going to act as or output.
- Also this paragraph has the id `output`, because we want to target this element in the javascript code.

- Add the `<script>` tag

```html
<body>
  <!-- ...above code -->

  <script>
    // javascript code
  </script>
</body>
```

- Make sure that you add the `<script>` tag at the bottom of the `<body>`. This way the script tag is run after everything else is loaded.

- Make function that select the element and changes it's `innerHTML`
- Define a variable to hold out paragraph that we are going to change the content.

```html
<script>
  function myFunction() {
    const out = document.querySelector('#output');
    out.innerHTML = "Hello there!";
  }
</script>
```

- Now our function is ready. All we want to do now is to run this function when we click out button.
- We are going to add a new attribute to our button so it can run our function. 

```html
<button onclick="myFunction()">Click me!</button>
```

- Don't forget to add the `()` after the function name.

- The completed code should look something like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript Exercise</title>
  </head>
  <body>
    <h1>My First JavaScript</h1>
    <button onclick="myFunction()">Click me!</button>

    <p id="output"></p>

    <script>
      function myFunction() {
        const out = document.querySelector('#output')
        out.innerHTML = 'Hello there!'
      }
    </script>
  </body>
</html>
```

- You can teach other things to the girls like:
  - How to change css properties 
  - Show an alert popup window