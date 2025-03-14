let currentDisplayValue = "";

let display = document.querySelector("#display");

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function addNumToDisplay(event) {
  display.textContent = currentDisplayValue + event.target.textContent;
  currentDisplayValue = display.textContent;
}

function addOperatorToDisplay(event) {
  if (
    currentDisplayValue.includes("+") ||
    currentDisplayValue.includes("-") ||
    currentDisplayValue.includes("×") ||
    currentDisplayValue.includes("÷")
  ) {
    let worked = operate();
    if (!worked) {
      return;
    }
  }
  display.textContent =
    currentDisplayValue + " " + event.target.textContent + " ";
  currentDisplayValue = display.textContent;
}

function operate() {
  let operationArray = currentDisplayValue.split(" ");

  [num1, operator, num2] = operationArray;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case "+":
      display.textContent = add(num1, num2);
      currentDisplayValue = display.textContent;
      break;
    case "-":
      display.textContent = subtract(num1, num2);
      currentDisplayValue = display.textContent;
      break;
    case "×":
      display.textContent = multiply(num1, num2);
      currentDisplayValue = display.textContent;
      break;
    case "÷":
      display.textContent = divide(num1, num2);
      currentDisplayValue = display.textContent;
      break;
  }
}

function equals() {
  let currentDisplayArray = currentDisplayValue.split(" ");
  operate();
}

function addNumberListeners() {
  let buttons = document.querySelector("#buttons");
  for (let i = 1; i <= 9; i++) {
    const currentButton = buttons.querySelector(`#button${i}`);
    currentButton.addEventListener("click", addNumToDisplay);
  }
}

function addOperatorListeners() {
  let addButton = document.querySelector("#plus");
  addButton.addEventListener("click", addOperatorToDisplay);

  let minusButton = document.querySelector("#minus");
  minusButton.addEventListener("click", addOperatorToDisplay);

  let multiplyButton = document.querySelector("#multiply");
  multiplyButton.addEventListener("click", addOperatorToDisplay);

  let divideButton = document.querySelector("#divide");
  divideButton.addEventListener("click", addOperatorToDisplay);

  let equalButton = document.querySelector("#equals");
  equalButton.addEventListener("click", equals);

  let clearButton = document.querySelector("#clear");
  clearButton.addEventListener("click", () => {
    display.textContent = "";
    currentDisplayValue = display.textContent;
  });
}

addNumberListeners();
addOperatorListeners();
