// Selecting HTML elements from document
const buttons = document.querySelectorAll(".btn");
const equalButton = document.querySelector(".equal_btn");
const clearButton = document.querySelector(".clear_btn");
const calcScreen = document.querySelector("input");

// empty string for our expression
let calcExpr = "";

// Function constructor works essentially as eval
function parse(str) {
  return Function(`'use strict'; return (${str})`)()
}

// Adds value to the expression and updates our screen
function handleButtonClick(index) {
    const buttonValue = buttons[index].innerHTML;
    calcExpr += buttonValue;
    calcScreen.value = calcExpr;
}

// Adds event listener to each botton on our buttons array 
// calles Handle button click
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        handleButtonClick(index);
    });
});

// event listener for our equals button
// handles errors
equalButton.addEventListener('click', function(){
    try{
        let result = parse(calcExpr);
        calcExpr = result;
        calcScreen.value = calcExpr;
    } catch(error)
    {
        calcScreen.value = "Error: Calculation Error";
    }
       
}) 

// event listener for our clear button. Clears Screen 
clearButton.addEventListener('click', function(){
        calcExpr ="";
        calcScreen.value = calcExpr;
})

// event listener for our input
calcScreen.addEventListener('keydown', function(e){

    const validKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/'];

    if (validKeys.includes(e.key)) {
        calcExpr += e.key;
        calcScreen.value = calcExpr;
    } else if (e.key === 'Enter') {
        let result = parse(calcExpr);
        calcExpr = result;
        calcScreen.value = calcExpr;
    }
})






