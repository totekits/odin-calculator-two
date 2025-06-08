function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}
    
let operand1 = ``;
let operand2 = ``;
let operator = ``;

function operate(x, operatorFunction, y) {
  return operatorFunction(x, y);
}

let content = ``;
const display = document.querySelector(`.display`);

function updateDisplay(value) {
  display.textContent = value;
}

const clear = document.querySelector(`#clear`);

clear.addEventListener(`click`, () => {
  content = ``;
  operand1 = ``;
  operator = ``;
  operand2 = ``;
  updateDisplay(content);
});

const numberButtons = document.querySelectorAll(`.number`);

numberButtons.forEach(button => {
  button.addEventListener(`click`, () => {
    const digit = button.textContent;
    if (operator === ``) {
      operand1 += digit;
      updateDisplay(operand1);
    } else {
      operand2 += digit;
      updateDisplay(operand2);
    }
  });
});

const dotBtn = document.querySelector(`#dot`);

dotBtn.addEventListener(`click`, () => {
  if (operator === `` && operand1 === ``) {
    operand1 += `0.`;
    updateDisplay(operand1);
  } else if (operator === `` && !operand1.includes(`.`)) {
    operand1 += `.`;
    updateDisplay(operand1);
  } else if (operator !== `` && operand2 === ``) {
    operand2 += `0.`;
    updateDisplay(operand2);
  } else if (operator !== `` && !operand2.includes(`.`)) {
    operand2 += `.`;
    updateDisplay(operand2);
  }
});

const multiplyBtn = document.querySelector(`#multiply`);

multiplyBtn.addEventListener(`click`, () => {
  if (operator === `` && operand1 !== `` && operand1 !== `-`) {
    operator = `x`;
    updateDisplay(`x`);
  } 
});

const divideBtn = document.querySelector(`#divide`);

divideBtn.addEventListener(`click`, () => {
  if (operator === `` && operand1 !== `` && operand1 !== `-`) {
    operator = `/`;
    updateDisplay(`÷`);
  } 
});

const addBtn = document.querySelector(`#add`);

addBtn.addEventListener(`click`, () => {
  if (operator === `` && operand1 !== `` && operand1 !== `-`) {
    operator = `+`;
    updateDisplay(`+`);
  } 
});

const subtractBtn = document.querySelector(`#minus`);

subtractBtn.addEventListener(`click`, () => {
  if (operand1 === ``) {
    operand1 = `-`;
    updateDisplay(operand1);
  } else if (operator === `` && operand1 !== `` && operand1 !== `-`) {
    operator = `-`;
    updateDisplay(`-`);
  }
});

const equalBtn = document.querySelector(`#equal`);

equalBtn.addEventListener(`click`, () => {
  if (operand2 !== `` && operand2 !== `-`) {
    const num1 = Number(operand1);
    const num2 = Number(operand2);

    let operationFunction;
    if (operator === `+`) {
      operationFunction = add;
    } else if (operator === `-`) {
      operationFunction = subtract;
    } else if (operator === `x`) {
      operationFunction = multiply;
    } else {
      operationFunction = divide;
    }

    const result = operate(num1, operationFunction, num2);
    updateDisplay(result);

    operand1 = String(result)
    operator = ``;
    operand2 = ``;
  }
})