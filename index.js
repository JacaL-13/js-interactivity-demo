const plusBtn = document.querySelector('#plus-btn')
const minusBtn = document.querySelector('#minus-btn')
const resetBtn = document.querySelector('#reset-btn')
const counter = document.querySelector('#counter')

let count = 0

function increase() {
    count++
    counter.textContent = count
}

function decrease() {
    count--
    counter.textContent = count
}

function reset() {
    count = 0
    counter.textContent = count
}

plusBtn.addEventListener('click', increase)

minusBtn.addEventListener('click', decrease)

resetBtn.addEventListener('click', reset)

const themeBtns = document.querySelectorAll('.theme-buttons')
const buttons = document.querySelectorAll('button')

function changeTheme(event) {
    const theme = event.target.textContent
    document.querySelector('body').className = theme
    document.querySelector('main').className = theme

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme
    }
}

for (let i = 0; i < themeBtns.length; i++) {
    themeBtns[i].addEventListener('click', changeTheme)
}