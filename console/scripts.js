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
  display('(\\_/)\n(•.•)\n/>  ')
  // display('\n╭─ GLOW Code: \n╰─ ')
  // displayLn('')
}

clearButton.addEventListener('click', () => {
  clearTerminal()
})

// ---------------------------------

const slider = document.querySelector('#slider')
const root = document.documentElement

slider.addEventListener('input', (e) => {
  root.style.setProperty('--hue', e.target.value)
})
