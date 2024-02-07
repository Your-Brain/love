let img = document.querySelector("img");
let input = document.querySelector(".input");

let userInput = prompt("I LOVE YOU\n DO YOU LOVE ME ?");
while (userInput === null) {
    userInput = prompt("I LOVE YOU\n DO YOU LOVE ME ?");
}

// Responds to user input with appropriate text content
switch (userInput) {
    case "NO":
        input.textContent = "Tato valo lagbena🫥";
        break;
    case "YES":
        input.textContent = "I love you too";
        break;
    case "no":
        input.textContent = "Tato valo lagbena🫥";
        break;
    case "yes":
        input.textContent = "I love you too";
        break;
    case "No":
        input.textContent = "Tato valo lagbena🫥";
        break;
    case "Yes":
        input.textContent = "I love you too";
        break;
    default:
    // Handle other responses or no response
}
