const display = document.querySelector('#display')
const display2 = document.querySelector('#display2')
let displayContent = document.createElement('p');
let displayContent2 = document.createElement('p');
displayContent.textContent = ''
displayContent2.textContent = ''
display.append(displayContent)
display2.append(displayContent2)

function input() {
    let show = ''
    let numbers = []
    let op = ''
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.id == 1){
                show += 1
                displayContent2.textContent = show
            } else if (button.id == 2){
                show += 2
                displayContent2.textContent = show
            } else if (button.id == 3){
                show += 3
                displayContent2.textContent = show
            } else if (button.id == 4){
                show += 4
                displayContent2.textContent = show
            } else if (button.id == 5){
                show += 5
                displayContent2.textContent = show
            } else if (button.id == 6){
                show += 6
                displayContent2.textContent = show
            } else if (button.id == 7){
                show += 7
                displayContent2.textContent = show
            } else if (button.id == 8){
                show += 8
                displayContent2.textContent = show
            } else if (button.id == 9){
                show += 9
                displayContent2.textContent = show
            } else if (button.id == 0){
                show += 0
                displayContent2.textContent = show
            } else if (button.id == '+'){
                show += '+'
                op = '+'
                displayContent2.textContent = show
            } else if (button.id == '-'){
                show += '-'
                op = '-'
                displayContent2.textContent = show
            } else if (button.id == '*'){
                show += '*'
                op = '*'
                displayContent2.textContent = show
            } else if (button.id == '/'){
                show += '÷'
                op = '÷'
                displayContent2.textContent = show
            } else if (button.id == '='){
                let splitted = show.split(`${op}`)
                let result = operate(splitted, op)
                displayContent.textContent = show
                displayContent2.textContent = result
                show = result
                op = ''
            } else if (button.id == 'c'){
                window.location.reload()
            }
        })
    })
}

input()

function operate(numbers, operator) {
    if (operator == '+') {
        return add(numbers);
    } else if (operator == '-') {
        return subtract(numbers);
    } else if (operator == '*') {
        return multiply(numbers);
    } else {
        return divide(numbers);
    }
}

function add(numbers) {
    const total = numbers.reduce((total, part) => {
        return +total + +part
      }, 0);
      return total
};

function subtract(numbers) {
    return numbers[0] - numbers[1]
};

function multiply(numbers) {
    const total = numbers.reduce((total, part) => {
        return +total * +part
      }, );
      return total
};

function divide(numbers) {
    const total = numbers.reduce((total, part) => {
        return +total / +part
      }, );
      return total
};
