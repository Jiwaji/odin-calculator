let number1;
let number2;
let operator;

const displayElement = document.querySelector('.display')

const buttons = document.querySelectorAll('.buttons')
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const textContent = displayElement.textContent

        if (e.target.classList.contains('equal')) {
            number2 = textContent
            displayElement.textContent = operate(Number(number1), Number(number2), operator)
            number1 = undefined
            number2 = undefined
            operator = undefined
            return
        }

        if (e.target.classList.contains('clear')) {
            displayElement.textContent = ''
            return;
        }

        if (e.target.classList.contains('delete')) {
            displayElement.textContent = textContent.substring(0, textContent.length - 1)
            return
        }

        if (e.target.classList.contains('sub')) {
            if (isNaN(Number(textContent.charAt(textContent.length - 1)))) {
                return
            }
        }

        if (e.target.classList.contains('op')) {
            if(textContent) {
                if(number1) {
                    number2 = textContent
                    number1 = operate(Number(number1), Number(number2), operator)
                } else {
                    number1 = textContent;
                }
                operator = e.target.textContent
            }
            if(!e.target.classList.contains('sub')) {
                displayElement.textContent = ''
                return;
            }
        }
        displayElement.textContent += e.target.textContent
    })
})

function add(number1, number2) {
    return number1 + number2
}

function subtract(number1, number2) {
    return number1 - number2
}

function multiply(number1, number2) {
    return number1 * number2
}

function divide(number1, number2) {
    return number1 / number2
}

function operate(number1, number2, operator) {
    switch (operator) {
        case "+": return add(number1, number2)
        case "-": return subtract(number1, number2)
        case "x": return multiply(number1, number2)
        case "/": return divide(number1, number2)
        default: return 0
    }
}