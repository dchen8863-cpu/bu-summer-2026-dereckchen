// HOMEWORK 2

/* 
    First Name: Dereck 
    Last Name: Chen
    Date: 7/7/26
*/

/*
    QUESTION 1
*/

function question1() {

    const choices = ["Rock", "Paper", "Scissors"];

    let player1Wins = 0;
    let player2Wins = 0;
    let ties = 0;

    const games = 100;

    for (let i = 0; i < games; i++) {

        let player1 = Math.floor(Math.random() * 3);
        let player2 = Math.floor(Math.random() * 3);

        if (player1 === player2) {
            ties++;
        }
        else if (
            (player1 === 0 && player2 === 2) ||
            (player1 === 1 && player2 === 0) ||
            (player1 === 2 && player2 === 1)
        ) {
            player1Wins++;
        }
        else {
            player2Wins++;
        }
    }

    console.log("Player 1 Win Percentage: " + (player1Wins / games * 100).toFixed(2) + "%");
    console.log("Player 2 Win Percentage: " + (player2Wins / games * 100).toFixed(2) + "%");
    console.log("Tie Percentage: " + (ties / games * 100).toFixed(2) + "%");
}

/*
    QUESTION 2
*/

function Animal(name, color) {
    this.name = name;
    this.color = color;
    this.legs = 4;
    this.canMove = true;
    this.type = "Animal";
}

function question2() {

    let animal1 = new Animal("Dog", "Brown");
    let animal2 = new Animal("Cat", "Black");
    let animal3 = new Animal("Tiger", "Orange");
    let animal4 = new Animal("Lion", "Gold");
    let animal5 = new Animal("Wolf", "Gray");

    console.log(animal1);
    console.log(animal2);
    console.log(animal3);
    console.log(animal4);
    console.log(animal5);
}

