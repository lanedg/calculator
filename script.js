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
  if (num2 == 0) {
    return "Error. Cannot divide by zero.";
  }
  return Math.floor((num1 / num2) * 1000) / 1000;
}

function addNumToDisplay(event) {
  if (currentDisplayValue === "Error. Cannot divide by zero.") {
    display.textContent = "";
    currentDisplayValue = display.textContent;
  }
  display.textContent = currentDisplayValue + event.target.textContent;
  currentDisplayValue = display.textContent;
}

function addOperatorToDisplay(event) {
  if (currentDisplayValue === "Error. Cannot divide by zero.") {
    display.textContent = "";
    currentDisplayValue = display.textContent;
  }

  displayArray = currentDisplayValue.split(" ");
  if (displayArray[0] == "") {
    return;
  }
  if (
    currentDisplayValue.includes("+") ||
    currentDisplayValue.includes("-") ||
    currentDisplayValue.includes("×") ||
    currentDisplayValue.includes("÷")
  ) {
    if (displayArray[2] === "") {
      display.textContent =
        displayArray[0] + " " + event.target.textContent + " ";
      currentDisplayValue = display.textContent;
    }
  } else {
    display.textContent =
      currentDisplayValue + " " + event.target.textContent + " ";
    currentDisplayValue = display.textContent;
  }
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
  if (currentDisplayArray[2] === "") {
    return;
  }
  operate();
}

function addNumberListeners() {
  let buttons = document.querySelector("#buttons");
  for (let i = 0; i <= 9; i++) {
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
