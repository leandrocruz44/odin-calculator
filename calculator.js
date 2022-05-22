const display = document.querySelector('#display')
const display2 = document.querySelector('#display2')
let displayContent = document.createElement('p');
let displayContent2 = document.createElement('p');
displayContent.textContent = ''
displayContent2.textContent = ''
display.append(displayContent)
display2.append(displayContent2)

function input() {
    let equation = {n1: '', n2: '', op:''}
    let accumulator = ''
    let fourOperators = (s) => {
        if (equation.n1 == '') {
            equation.n1 = accumulator
            equation.op = s
            accumulator = ''
            displayContent.textContent = equation.n1 + equation.op + equation.n2
        } else if (equation.n1 != '' && equation.op == '') {
            equation.op = s
            displayContent.textContent = equation.n1 + equation.op + equation.n2
        } else if (equation.n1 != '' && equation.op != '') {
            if (equation.op == '÷' &&  equation.n2 != '') {
                equation.n2 == 0
            } else {
                equation.n2 = accumulator
            }
            let result = operate(equation.n1, equation.n2, equation.op)
            displayContent.textContent = result
            equation.op = s
            displayContent2.textContent = result + equation.op
            equation.n1 = result
            accumulator = ''
        }
    }
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('num')){
                accumulator += +button.id
                displayContent2.textContent = accumulator
            } else if (button.classList.contains('op')){
                return fourOperators(button.id) 
            } else if (button.id == '.'){
                if (!accumulator.includes('.')){
                    accumulator += '.'
                    displayContent2.textContent = accumulator
                }
            } else if (button.id == 'del'){
                let del = accumulator.slice(0, -1)
                accumulator = del
                displayContent2.textContent = accumulator
            } else if (button.id == '='){
                if (accumulator == '') {
                    return ''
                } else {
                    equation.n2 = accumulator
                    let result = operate(equation.n1, equation.n2, equation.op)
                    if (result === Infinity){alert('You cannot divide anything by zero. You\'re no hero.'); window.location.reload()}
                    displayContent.textContent = equation.n1 + equation.op + equation.n2
                    displayContent2.textContent = result
                    equation.n1 = result
                    equation.n2 = ''
                    equation.op = ''
                    accumulator = ''
                }
                
            } else if (button.id == 'c'){
                window.location.reload()
            }
        })
    })
}

function operate(n1, n2, operator) {
    if (operator == '+') {
        const result = add(n1, n2);
        if (isInt(result) === false) {
            return result.toFixed(2)
        } else {
            return result
        }
    } else if (operator == '-') {
        const result = subtract(n1, n2);
        if (isInt(result)  === false){
            return result.toFixed(2)
        } else {
            return result
        }
    } else if (operator == '*') {
        const result = multiply(n1, n2);
        if (isInt(result) === false) {
            return result.toFixed(2)
        } else {
            return result
        }
    } else {
        const result = divide(n1, n2);
        if (isInt(result) === false) {
            return result.toFixed(2)
        } else {
            return result
        }
    }
}

function add(x, y) {
    return +x + +y
};

function subtract(x, y) {
    return +x - +y
};

function multiply(x, y) {
    return +x * +y
};

function divide(x, y) {
    return +x / +y
};

function isInt(n) {
    return n % 1 === 0;
}


input()