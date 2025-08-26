// Calculator Operations
function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};
function multiply(a,b){
    return Math.round(a * b);
}
function divide(a,b) {
  if (b === 0) {
    console.error("Error: Division by zero is not allowed.");
    return undefined;
  }
  return Math.round(a / b);
}
function operate(operator, operandOne, operandTwo){
    operandOne = Number(operandOne);
    operandTwo = Number(operandTwo);
    switch(operator){
        case "+":
            return add(operandOne,operandTwo);
            break;
        case "-":
            return subtract(operandOne,operandTwo);
            break;
        case "*":
            return multiply(operandOne,operandTwo);
            break;
        case "/":
            return divide(operandOne,operandTwo);
            break;
    }
}

// Events
const digitButtons = document.querySelectorAll("#allDigits button");
const digitDisplay = document.getElementById("digitalDisplay");
const numberBtn = document.querySelector("numberBtn");
const operatorBtn = document.querySelectorAll("#allOps .operatorBtn");
const equalsBtn = document.querySelector("#allOps .equalBtn");
const delBtn = document.querySelector(".del");
const resetBtn = document.querySelector(".aC");

let firstNumber = "";
let nextNumber = "";
let operator = "";
let isOperator = false;
let newInput = false;
let currentResult = "";

digitButtons.forEach(button => {
    button.addEventListener('click', function(e){
    if (isOperator){
        nextNumber += e.target.value;
        digitDisplay.textContent = nextNumber;
        console.log(nextNumber);
    }else{
        firstNumber += e.target.value;
        digitDisplay.textContent = firstNumber;
        nextNumber = "";
        console.log(firstNumber);
    }

    });
});
// 1 + 1 + display 2
// 2 +
operatorBtn.forEach(button => {
    button.addEventListener('click', function(e){
        let newOperator = e.target.value;
        if(isOperator){
            return;
        }
        if (firstNumber === "" && currentResult === ""){
            return;
        }else if(operator !== null && currentResult !== ""){
            operator = newOperator;
            console.log(operator);
            currentResult = operate(operator, firstNumber, nextNumber);
            firstNumber = currentResult;
            nextNumber = "";
            temp = "";
            console.log(currentResult);
            digitDisplay.textContent = currentResult;
        } else if(operator !== null && currentResult === "" && nextNumber !== ""){
            operator = newOperator;
            console.log(operator);
            currentResult = operate(operator, firstNumber, nextNumber);
            firstNumber = currentResult;
            isOperator = true;
            nextNumber = "";
            console.log(currentResult);
            digitDisplay.textContent = currentResult;
        }
        else{
            operator = newOperator;
            isOperator = true;
            console.log(operator);
        }
});
});
equalsBtn.addEventListener('click', function(e) {
    if (firstNumber !== "" && nextNumber !== ""){
        resultTemp = operate(operator, firstNumber, nextNumber);
        console.log(resultTemp);
        currentResult = resultTemp;
        console.log(currentResult);
    }else{
        resultTemp = operate(operator, currentResult, nextNumber);
        console.log(resultTemp);
        currentResult = resultTemp;
        console.log(currentResult);
    }
    nextNumber = "";
    firstNumber = currentResult;
    operator = "";
    isOperator = true;
    digitDisplay.textContent = currentResult;

})
resetBtn.addEventListener('click', () =>{
    firstNumber = "";
    nextNumber = "";
    operator = "";
    isOperator = false;
    newInput = false;
    currentResult = "";
    digitDisplay.textContent = 0;
})
delBtn.addEventListener('click', function(e){
   digitDisplay.textContent = "not supported";
})