let currentNumber = "0";
let previousNumber = "";
let operator = null;

const currentDisplay = document.getElementById("current");
const previousDisplay = document.getElementById("previous");

function updateDisplay() {
  currentDisplay.textContent = currentNumber;
  previousDisplay.textContent = previousNumber;
}

function appendNumber(number) {
  if (currentNumber === "0" || currentNumber === "Error") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }

  updateDisplay();
}

function appendDecimal() {
  if (currentNumber === "Error") {
    currentNumber = "0";
  }

  if (!currentNumber.includes(".")) {
    currentNumber += ".";
  }

  updateDisplay();
}

function chooseOperator(selectedOperator) {
  if (currentNumber === "Error") {
    return;
  }

  if (operator !== null) {
    calculate();
  }

  previousNumber = currentNumber;
  operator = selectedOperator;
  currentNumber = "0";

  updateDisplay();
}

function calculate() {
  if (operator === null || previousNumber === "") {
    return;
  }

  const firstNumber = parseFloat(previousNumber);
  const secondNumber = parseFloat(currentNumber);

  let result;

  if (operator === "+") {
    result = firstNumber + secondNumber;
  } else if (operator === "-") {
    result = firstNumber - secondNumber;
  } else if (operator === "*") {
    result = firstNumber * secondNumber;
  } else if (operator === "/") {
    if (secondNumber === 0) {
      currentNumber = "Error";
      previousNumber = "";
      operator = null;
      updateDisplay();
      return;
    }

    result = firstNumber / secondNumber;
  }

  currentNumber = String(result);
  previousNumber = "";
  operator = null;

  updateDisplay();
}

function clearCalculator() {
  currentNumber = "0";
  previousNumber = "";
  operator = null;

  updateDisplay();
}

function toggleSign() {
  if (currentNumber !== "0" && currentNumber !== "Error") {
    currentNumber = String(parseFloat(currentNumber) * -1);
  }

  updateDisplay();
}

function percentage() {
  if (currentNumber !== "Error") {
    currentNumber = String(parseFloat(currentNumber) / 100);
  }

  updateDisplay();
}

updateDisplay();
