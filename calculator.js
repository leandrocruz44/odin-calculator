const display = document.querySelector('#display')
const display2 = document.querySelector('#display2')
let displayContent = document.createElement('p');
let displayContent2 = document.createElement('p');
displayContent.textContent = ''
displayContent2.textContent = ''
display.append(displayContent)
display2.append(displayContent2)

function input() {
    let eq = {n1: '', n2: '', op:''}
    let ac = ''
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.id == 1){
                ac += 1
                displayContent2.textContent = ac
            } else if (button.id == 2){
                ac += 2
                displayContent2.textContent = ac
            } else if (button.id == 3){
                ac += 3
                displayContent2.textContent = ac
            } else if (button.id == 4){
                ac += 4
                displayContent2.textContent = ac
            } else if (button.id == 5){
                ac += 5
                displayContent2.textContent = ac
            } else if (button.id == 6){
                ac += 6
                displayContent2.textContent = ac
            } else if (button.id == 7){
                ac += 7
                displayContent2.textContent = ac
            } else if (button.id == 8){
                ac += 8
                displayContent2.textContent = ac
            } else if (button.id == 9){
                ac += 9
                displayContent2.textContent = ac
            } else if (button.id == 0){
                ac += 0
                displayContent2.textContent = ac
            } else if (button.id == '+'){
                if (eq.n1 == '') {
                    eq.n1 = ac
                    eq.op = '+'
                    ac = ''
                    displayContent.textContent = eq.n1 + eq.op + eq.n2
                } else if (eq.n1 != '' && eq.op == '') {
                    eq.op = '+'
                    displayContent.textContent = eq.n1 + eq.op + eq.n2
                } else if (eq.n1 != '' && eq.op != '') {
                    if (eq.op == '÷' &&  eq.n2 != '') {
                        eq.n2 == 0
                    } else {
                        eq.n2 = ac
                    }
                    let result = operate(eq.n1, eq.n2, eq.op)
                    displayContent.textContent = result
                    eq.op = '+'
                    displayContent2.textContent = result + eq.op
                    eq.n1 = result
                    ac = ''
                }
            } else if (button.id == '-'){
                if (eq.n1 == '') {
                    eq.n1 = ac
                    eq.op = '-'
                    ac = ''
                    displayContent.textContent = eq.n1 + eq.op + eq.n2
                } else if (eq.n1 != '' && eq.op == '') {
                    eq.op = '-'
                    displayContent.textContent = eq.n1 + eq.op + eq.n2
                } else if (eq.n1 != '' && eq.op != '') {
                    if (eq.op == '÷' &&  eq.n2 != '') {
                        eq.n2 == 0
                    } else {
                        eq.n2 = ac
                    }
                    let result = operate(eq.n1, eq.n2, eq.op)
                    displayContent.textContent = result
                    eq.op = '-'
                    displayContent2.textContent = result + eq.op
                    eq.n1 = result
                    ac = ''
                }
            } else if (button.id == '*'){
                if (eq.n1 == '') {
                    eq.n1 = ac
                    eq.op = '*'
                    ac = ''
                    displayContent.textContent = eq.n1 + eq.op + eq.n2
                } else if (eq.n1 != '' && eq.op == '') {
                    eq.op = '*'
                    displayContent.textContent = eq.n1 + eq.op + eq.n2
                } else if (eq.n1 != '' && eq.op != '') {
                    if (eq.op == '÷' &&  eq.n2 != '') {
                        eq.n2 == 0
                    } else {
                        eq.n2 = ac
                    }
                    let result = operate(eq.n1, eq.n2, eq.op)
                    displayContent.textContent = result
                    eq.op = '*'
                    displayContent2.textContent = result + eq.op
                    eq.n1 = result
                    ac = ''
                }
            } else if (button.id == '/'){
                if (eq.n1 == '') {
                    eq.n1 = ac
                    eq.op = '÷'
                    ac = ''
                    displayContent.textContent = eq.n1 + eq.op + eq.n2
                } else if (eq.n1 != '' && eq.op == '') {
                    eq.op = '÷'
                    displayContent.textContent = eq.n1 + eq.op + eq.n2
                } else if (eq.n1 != '' && eq.op != '') {
                    if (eq.op == '÷' &&  eq.n2 != '') {
                        eq.n2 == 0
                    } else {
                        eq.n2 = ac
                    }
                    let result = operate(eq.n1, eq.n2, eq.op)
                    displayContent.textContent = result
                    eq.op = '÷'
                    displayContent2.textContent = result + eq.op
                    eq.n1 = result
                    ac = ''
                }
            } else if (button.id == '.'){
                if (!ac.includes('.')){
                    ac += '.'
                    displayContent2.textContent = ac
                }
            } else if (button.id == 'del'){
                let del = ac.slice(0, -1)
                ac = del
                displayContent2.textContent = ac
            } else if (button.id == '='){
                eq.n2 = ac
                let result = operate(eq.n1, eq.n2, eq.op)
                if (result === Infinity){alert('You cannot divide anything by zero. You\'re no hero.'); window.location.reload()}
                displayContent.textContent = eq.n1 + eq.op + eq.n2
                displayContent2.textContent = result
                eq.n1 = result
                eq.n2 = ''
                eq.op = ''
                ac = ''
            } else if (button.id == 'c'){
                window.location.reload()
            }
        })
    })
}

input()

function operate(n1, n2, operator) {
    if (operator == '+') {
        return add(n1, n2);
    } else if (operator == '-') {
        return subtract(n1, n2);
    } else if (operator == '*') {
        return multiply(n1, n2);
    } else {
        return divide(n1, n2);
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
