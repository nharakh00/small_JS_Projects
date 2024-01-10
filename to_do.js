command = prompt("Welcome to the To-Do app. Pick an option");
let arr = [];
while(true) {

    if(command === "new") {
        let new_entry = prompt("Enter the To-Do.");
        arr.push(new_entry);
        console.log(`${new_entry} added to list.`);
        command = prompt("pick another option.");
    } else if(command === "list") {
        if(arr.length > 0){
            console.log("**********");
            for(let i = 0; i < arr.length; i++) {
                console.log(`${i}: ${arr[i]}`);
            }
            console.log("**********");
            command = prompt("pick another option.");

        } else {
            command = prompt("The list is empty.pick another option.");
        }

    } else if(command ==="delete"){
        let to_delete = parseInt(prompt("Pick an element to delete."));
        arr.splice(to_delete,1);
        console.log("To-Do Removed");
        command = prompt("pick another option.");
    }
    else if(command ==="quit"){
        break;

    } else {
       command = prompt("That was not a valid command. pick Another option");
    }
}

console.log("OK, YOU QUIT THE APP.");