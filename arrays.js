// 3.1) playing with strings

let ourString ="Hello"
let thereString ="World!"


// a) Template literals
console.log(ourString + " " + thereString);
console.log(`${ourString}${thereString}`);
console.log(`${ourString} ${thereString}`);



// b) methods 

// b1) .at()

console.log(ourString.at(2));
console.log(thereString.at(4));

// b2 .concat()

console.log(ourString.concat(' ', thereString));


//b3 .includes()
console.log(ourString.includes("ello"));
console.log(thereString.includes("Worl"));


// 3.2 playing with arrays 
 
let arr_1 = [1, 2, 3, 4, 5]; 
let arr_2 = [6, 7, 8, 9, 10];


// a) push and pop
arr_1.pop();
arr_1.pop();

console.log(arr_1);

arr_1.push(11);
arr_1.push(12);

console.log(arr_1);

// b) sort and reverse / rearrangment methods
arr_3 = arr_1.reverse();
console.log(arr_3);
arr_4 = arr_2.slice(0,2)
console.log(arr_4);


// c) sort
arr_5 = [3,2,4,5,1,9,7];
console.log(arr_5);
arr_6 = arr_5.sort();
console.log(arr_6)