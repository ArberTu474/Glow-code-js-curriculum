function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = `${name}=${value}; expires=${expires}; path=/`
}

function getCookie(name) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
}

// ---------------------------------

let terminal = document.querySelector('#terminal')

const runButton = document.querySelector('#runButton')
const clearButton = document.querySelector('#clearButton')

function clearTerminal() {
  terminal.innerHTML = ''
}

function display(...messages) {
  terminal.textContent += messages.join(' ')
}

function displayLn(...messages) {
  terminal.textContent += messages.join(' ') + '\n'
}

function printPrompt() {
  // display('(\\_/)\n(•.•)\n/>  ')
  // display('\n╭─ GLOW Code: \n╰─ ')
  displayLn('') // dault Pront. Prints a new line or every execution
}

clearButton.addEventListener('click', () => {
  clearTerminal()
})

// ---------------------------------

const slider = document.querySelector('#slider')
const root = document.documentElement

function setTerminalHue(hue) {
  const hueValue = hue || 200

  root.style.setProperty('--hue', hueValue)
  slider.value = hueValue
}

slider.addEventListener('input', (e) => {
  setTerminalHue(e.target.value)
  setCookie('terminalHue', e.target.value, 7)
})

// ---------------------------------

const exercises = document.querySelectorAll('.exercise')

// Run when page loads
window.addEventListener('DOMContentLoaded', () => {
  
  const exerciseNumber = getCookie('exerciseNumber')
  const terminalHue = getCookie('terminalHue')

  setTerminalHue(terminalHue)

  exercises.forEach((exercise) => {

    if (exercise.dataset.exercise === exerciseNumber) {
      exercise.classList.add('selected')
    }
  })
})

exercises.forEach((exercise) => {
  exercise.addEventListener('click', () => {
    exercises.forEach((btn) => {
      btn.classList.remove('selected')
    })

    const exerciseNumber = exercise.dataset.exercise

    // Save the selected exercise number in a cookie
    setCookie('exerciseNumber', exerciseNumber, 7)

    exercise.classList.add('selected')
  })
})
