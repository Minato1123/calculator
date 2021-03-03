const btnNum1 = document.getElementById("btn-num-1")
const btnNum2 = document.getElementById("btn-num-2")
const btnNum3 = document.getElementById("btn-num-3")
const btnNum4 = document.getElementById("btn-num-4")
const btnNum5 = document.getElementById("btn-num-5")
const btnNum6 = document.getElementById("btn-num-6")
const btnNum7 = document.getElementById("btn-num-7")
const btnNum8 = document.getElementById("btn-num-8")
const btnNum9 = document.getElementById("btn-num-9")
const btnNum0 = document.getElementById("btn-num-0")

const btnSignClear = document.getElementById("btn-sign-clear")
const btnSignAdd = document.getElementById("btn-sign-add")
const btnSignSubtract = document.getElementById("btn-sign-subtract")
const btnSignMultiply = document.getElementById("btn-sign-multiply")
const btnSignDivide = document.getElementById("btn-sign-divide")
const btnSignEqual = document.getElementById("btn-sign-equal")

const calScreen = document.getElementById("cal-screen")
// 0：初始狀態、1；輸入第一個數、2：輸入第二個數
let state = 0;
let firstNumber = "";
let secondNumber = "";
let operation = "";

function displayText(text) {
  calScreen.innerText = text;
}

function clickNumber(number) {
  switch (state) {
    case 0:
      state = 1;
      firstNumber += number;
      displayText(firstNumber);
      break;
    case 1:
      firstNumber += number;
      displayText(firstNumber);
      break;
    case 2:
      secondNumber += number;
      displayText(secondNumber);
      break;
  }
}

function clickOperation(op) {
  if (state !== 1) {
    return;
  }

  operation = op;
  state = 2;
}

function reset() {
  state = 0;
  firstNumber = "";
  secondNumber = "";
  operation = "";
}

function clickEqual() {
  const num1 = +firstNumber;
  const num2 = +secondNumber;
  let ans = 0;
  switch (operation) {
    case "+":
      ans = num1 + num2;
      break;
    case "-":
      ans = num1 - num2;
      break;
    case "*":
      ans = num1 * num2;
      break;
    case "/":
      ans = num1 / num2;
      break;
  }
  displayText(ans);
  reset();
}

function clickClear() {
  displayText("0");
  reset();
}

btnNum1.addEventListener("click", () => {
  clickNumber("1");
})
btnNum2.addEventListener("click", () => {
  clickNumber("2");
})
btnNum3.addEventListener("click", () => {
  clickNumber("3");
})
btnNum4.addEventListener("click", () => {
  clickNumber("4");
})
btnNum5.addEventListener("click", () => {
  clickNumber("5");
})
btnNum6.addEventListener("click", () => {
  clickNumber("6");
})
btnNum7.addEventListener("click", () => {
  clickNumber("7");
})
btnNum8.addEventListener("click", () => {
  clickNumber("8");
})
btnNum9.addEventListener("click", () => {
  clickNumber("9");
})
btnNum0.addEventListener("click", () => {
  clickNumber("0");
})

btnSignAdd.addEventListener("click", () => {
  clickOperation("+");
})
btnSignSubtract.addEventListener("click", () => {
  clickOperation("-");
})
btnSignMultiply.addEventListener("click", () => {
  clickOperation("*");
})
btnSignDivide.addEventListener("click", () => {
  clickOperation("/");
})

btnSignClear.addEventListener("click", () => {
  clickClear();
})
btnSignEqual.addEventListener("click", () => {
  clickEqual();
})