function runExercise(exercise) {
  printPrompt()

  exercise()
}

const exerciseList = [ex1, ex2, ex3, ex4]

runButton.addEventListener('click', () => {
  const selectedExercise = getCookie('exerciseNumber')

  runExercise(exerciseList[selectedExercise - 1])
})
