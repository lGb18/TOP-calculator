function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};
function multiply(a,b){
    return a * b;
}
function divide(a,b) {
  if (b === 0) {
    console.error("Error: Division by zero is not allowed.");
    return undefined;
  }
  return a / b;
}
function operate(operator, operandOne, operandTwo){
    switch(operator){
        case "+":
            add(operandOne,operandTwo);
            break;
        case "-":
            subtract(operandOne,operandTwo);
            break;
        case "*":
            multiply(operandOne,operandTwo);
            break;
        case "/":
            divide(operandOne,operandTwo);
            break;
    }
}