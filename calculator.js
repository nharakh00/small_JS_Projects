const buttons = document.querySelectorAll(".btn");
const equalButton = document.querySelector(".equal_btn");
const clearButton = document.querySelector(".clear_btn");
const calcScreen = document.querySelector("input");

let calcExpr = "";

function parse(str) {
  return Function(`'use strict'; return (${str})`)()
}

function handleButtonClick(index) {
    const buttonValue = buttons[index].innerHTML;
    console.log(buttonValue);
    calcExpr += buttonValue;
    calcScreen.value = calcExpr;
}

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        handleButtonClick(index);
    });
});

equalButton.addEventListener('click', function(){
        let result = parse(calcExpr);
        calcExpr = result;
        calcScreen.value = calcExpr;
}) 

clearButton.addEventListener('click', function(){
        calcExpr ="";
        calcScreen.value = calcExpr;
})

