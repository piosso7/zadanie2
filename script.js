const firstInput = document.getElementById("firstInput");
const secondInput = document.getElementById("secondInput");
const button = document.getElementById("button");
const resultText = document.getElementById("resultText");
const resetBtn = document.getElementById("resetBtn");
const result = document.getElementById("result");

let numbers = [];

let numberCount;

resetBtn.disabled = true;

// Komunikaty o błędzie

const errorMessage = () => {
  alert("Zakres proszę podawać od cyfry mniejszej do większej");
  firstInput.value = "";
  secondInput.value = "";
};
const emptyErrorMessage = () => {
  alert("Proszę podać dwie wartości");
  firstInput.value = "";
  secondInput.value = "";
};

const pushToArr = (valueName) => {
  numbers.push(valueName);
};

const showNumbers = () => {
  let numbersToString = numbers.toString();
  resultText.innerHTML = numbersToString;
};

firstInput.oninput = () => {
  firstInputValue = Math.round(firstInput.value);
  numberCount = firstInputValue + 1;
};

secondInput.oninput = () => {
  secondInputValue = Math.round(secondInput.value);
};

const buttonOff = () => {
  button.disabled = true;
  resetBtn.disabled = false;
};

const buttonOn = () => {
  button.disabled = false;
  resetBtn.disabled = true;
};

button.onclick = () => {
  if (firstInputValue === "" || secondInputValue === "")
    return emptyErrorMessage();
  if (firstInputValue > secondInputValue) return errorMessage();
  if (firstInputValue === secondInputValue) {
    resultText.innerHTML = firstInputValue;
    buttonOff();
    return;
  }

  pushToArr(firstInputValue);

  while (numberCount < secondInputValue) {
    pushToArr(numberCount);
    numberCount++;
  }

  pushToArr(secondInputValue);

  buttonOff();

  showNumbers();
};

resetBtn.onclick = () => {
  numbers = [];
  firstInput.value = "";
  firstInputValue = "";
  secondInput.value = "";
  secondInputValue = "";
  buttonOn();
  showNumbers();
};
