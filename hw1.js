// HOMEWORK 1

/* 
    First Name: Dereck
    Last Name: Chen
    Date: 6/29/26

    NOTE: DO THE WORK INSIDE THE FUNCTION GIVEN TO YOU!
*/

/* 
    QUESTION 1: Print out your name, your grade, and what you are looking
    forward to in this class! I want you to print out using "console.log()" 
    for each! (10 POINTS)

    Output: 
        name Dereck Chen
        grade 10
        What you are looking forward to in this class?
*/

function question1() {  
    // TO-DO: COMPLETE ME!
    // PLEASE PRINT THE RESULT IN THIS FUNCTION
    console.log("name Dereck Chen");
    console.log("grade 10");
    console.log("What you are looking forward to in this class? nothing");
};

/* 
    QUESTION 2: I want you to print out a sentence based on your
    favorite food! You can only have one variable that contains that 
    food! (10 POINTS)

    NOTE: Since you are outputting a string with that variable, what
    should you use? Check back on slide 8 in the 6/26 presentation!

    Output: My favorite food is Chicken
*/

function question2() {  
    // TO-DO: COMPLETE ME!
    // PLEASE PRINT THE RESULT IN THIS FUNCTION 
    let food = "Chicken";
    console.log(`My favorite food is ${food}`);
};


/* 
    QUESTION 3: I want you to create a function "multiplyNums()" 
    where it takes in two parameters. Then it multiplies x and y! 
    For this one, you do NOT have to declare variables. (20 POINTS)

    NOTE: You can create a function inside a function!

    Your job after declaring a function is to call the method 4 times. Each call
    will have each number.

    Input: (4, 4), (1, 5), (6, 5), (10, 10)

    Output: 16, 5, 30, 100

*/

function question3() {  
    // TO-DO: COMPLETE ME!
    // PLEASE PRINT THE RESULT IN THIS FUNCTION
    function multiplyNums(x, y) {
        console.log(x * y);
    }

    multiplyNums(4, 4);
    multiplyNums(1, 5);
    multiplyNums(6, 5);
    multiplyNums(10, 10);
};

/* 
    QUESTION 4: Plug in the answers that matches the definition
    (10 POINTS)
*/

function question4() {  
    // TO-DO: COMPLETE ME!
    // PLEASE PRINT THE RESULT IN THIS FUNCTION

    // Fill in these answers between the quotations to match the definitions!
   

    let answer1 = "kebab-case";
    let answer2 = "UPPER_SNAKE_CASE";
    let answer3 = "camelCase";
    let answer4 = "PascalCase";

    console.log(`What case do you use for filenames?: ${answer1}`);
    console.log(`What case do you use for constant variables: ${answer2}`);
    console.log(`What case do you use for variables and functions: ${answer3}`);
    console.log(`What case do you use for classes, objects: ${answer4}`);
};


/* 
    QUESTION 5: Create a function "celsiusToFahrenheit()" to convert 
    celsius to fahrenheit. It will only take one parameter which is
    the celsius Try to look up the formula and code it out! Call the method
    4 times and plug in the inputs given. (25 points)

    REMINDER: YOU DO NOT HAVE TO DECLARE A VARIABLE! YOU CAN JUST PLUG IN A
    NUMBER FOR THE PARAMETER!

    Here are the math operations you can use: +, -, *, /

    Input 1: 0 -> 32
    Input 2: 100 -> 212
    Input 3: 32 -> 89.6
    Input 4: 60 -> 140
*/

function question5() {  
    // TO-DO: COMPLETE ME!
    // PLEASE PRINT THE RESULT IN THIS FUNCTION
    function celsiusToFahrenheit(celsius) {
        console.log((celsius * 9 / 5) + 32);
    }
    celsiusToFahrenheit(0);
    celsiusToFahrenheit(100);
    celsiusToFahrenheit(32);
    celsiusToFahrenheit(60);
};


/* 
    QUESTION 6: Create a function that will convert inches to feet. The name of
    the function should be "inchesToFeet()" and will only take one parameter.
    (25 points)

    REMINDER: YOU DO NOT HAVE TO DECLARE A VARIABLE! YOU CAN JUST PLUG IN A
    NUMBER FOR THE PARAMETER!

    Input 1: 12 -> 1
    Input 2: 36 -> 3
    Input 3: 1 -> 0.08
    Input 4: 5 -> 0.41
*/

function question6() {  
    // TO-DO: COMPLETE ME!
    // PLEASE PRINT THE RESULT IN THIS FUNCTION
    function inchesToFeet(inches) {
        console.log(inches / 12);
    }

    inchesToFeet(12);
    inchesToFeet(36);
    inchesToFeet(1);
    inchesToFeet(5);
};

// DO NOT EDIT THIS
function start() {
    console.log("Starting Question 1:");
    question1()
    console.log("Starting Question 2:");
    question2()
    console.log("Starting Question 3:");
    question3()
    console.log("Starting Question 4:");
    question4()
    console.log("Starting Question 5:");
    question5()
    console.log("Starting Question 6:");
    question6()
}

start();
