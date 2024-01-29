// Selecting relevent items from our document
const addItem = document.querySelector(".addToDo");
const ipt = document.querySelector("input");
const toDoList = document.querySelector(".toDos");
const clearAll = document.querySelector(".clear");
const toDoXs = document.querySelector(".toDos");

// want arrays for each todo and x mark specifically for event delegation removal
let listToDo = document.querySelectorAll(".listItem");
let redXs = document.querySelectorAll("h3");

//
addItem.addEventListener("click", function(){

    if(ipt.value !== "" ) {
        // creating necessary elements
        const newToDo = document.createElement('div');
        const checkBox = document.createElement('input');
        const item = document.createElement('h1');
        const redX = document.createElement('h3');
       
        // Setting values and attributes
        checkBox.setAttribute("type", "checkbox");
        item.innerHTML = ipt.value;
        redX.innerHTML = "X";
       
        // adding to do div to our to do list section
        toDoList.appendChild(newToDo);
        
        // appending each element of our to-do to our individual to-do list div
        newToDo.appendChild(checkBox);
        newToDo.appendChild(item);
        newToDo.appendChild(redX);
    
        // setting class
        newToDo.classList.add("listItem");
        
        // clearing our input screen
        ipt.value = "";

        //updating our array
        listToDo.push(newToDo);
        redXs.push(redX);
    }
})

// removes all elemnts from our todo
clearAll.addEventListener("click", function(){
    for(let toDo of listToDo) {
        toDo.remove();
    }
})

// removes element when user clicks the X 
toDoXs.addEventListener("click", function(e) {
    if(e.target.innerHTML === 'X') {
        e.target.parentElement.remove();
    }
})





// Event delegation is about using query selectors on a parent element that is already generated
// Then using listeners on elements generated within that parent.
/*
redXs[0].addEventListener("click" function(){
    console.log("Testing if this works");
})*/

/*
for(let i =0; i < redXs.length; i++) {
    redXs[i].addEventListener("click", function() {
        console.log(`I am clicking the X`);
    })
}






// This is one way of adding an element ot the list
// just doing using document object was'nt working so used a query selector

/*

const itemOne = document.createElement('li');
const checkBox = document.createElement('input[checkbox]');
itemOne.innerHTML = "This is the first item on the list";
let unorderedList = document.querySelector('ul');
unorderedList.appendChild(itemOne);

let checkBox = document.createElement("input");
checkBox.setAttribute("type", "checkbox");
unorderedList.appendChild(itemOne).appendChild(checkBox);

// The Above represent some ways to do what I am intending to do.
*/