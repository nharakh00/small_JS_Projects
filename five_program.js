let userInput = prompt("Enter a number: "); 
let ourVariable = parseInt(userInput);
let result = "";

if(ourVariable > 5) {
    result = "Big Number";
} else if(ourVariable < 5) {
    result ="Small Number";
} else if (ourVariable === 5) {
    result ="Five";
} else {
    result ="";
}

if(result === "Big Number") {
    console.log(`You chose a big number. Your number is ${ourVariable}.`);
} else if(result === "Small Number") {
    console.log(`You chose a small number. Your number is ${ourVariable}.`);
} else if(result === "Five") {
    console.log(`You chose ${ourVariable}.`);
} else {
    console.log("You did not choose a number between 0 and 10.")
}