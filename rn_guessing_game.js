let max = parseInt(prompt("This is a random number guessing game between 1 and n. Select n"));
let min = 0; 

let rand_number = Math.floor(Math.random()*max) + 1;

let guess = 0;

guess = parseInt(prompt("Take a guess"));

while(1){
    if(guess === rand_number) {
        break;
    } else if(guess < rand_number) {
        guess = parseInt(prompt("Your guess is too low. Guess again."));
        continue;
    }
    else if(guess > rand_number) {
        guess = parseInt(prompt("Your guess is too high. Guess again."));
        continue;
    }
}

console.log("Congratulations! you guessed the number!");