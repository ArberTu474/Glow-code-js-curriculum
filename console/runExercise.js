function runExercise(exercise) {
  printPrompt()

  exercise()
}

runButton.addEventListener('click', () => {
  runExercise(ex1)
})
