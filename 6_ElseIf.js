// <<<<<<<<<<<<<<<<<<<<<<< ELSE IF   >>>>>>>>>>>>>>>>>>>>


let age = 19

if (age>=18){
    console.log(`you can play the game`)

}
else{
    console.log(`Can not play the game`)
}

let num

if(num%2===0){
console.log('The number is : Even')
}
else{
    console.log("The number is : Odd")
}

//<<<<<<<<<<<<<<<<<<<<<<<< FALSY VALUES  >>>>>>>>>>>>>>>>>>>>>


/**
 * false
 * ""
 * null
 * undefined
 * 0
 */


//<<<<<<<<<<<<<<<<<<<<<<<<< TURNARY OPERATOPR >>>>>>>>>>>>>>>>>>>>>

/**
 * Short Version on else if
 * Like i am taking to write the second example
 */
age = 13

age>=18 ? console.log("you can play the game") : console.log("you can not paly the game")


//<<<<<<<<<<<<<<<<<<<<<<<<< AND OR OPERATOR >>>>>>>>>>>>>>>>>>>>>

let firstName = "Jayraj"

let Age = 24

if(firstName[0]==="J" && Age===24){  // both condition should be true
    console.log(`You Name starts with J and your age is 24`)
}
else{
    console.log("wrong Information")
}


firstName = "Jayraj"

Age = 34

if(firstName[0]==="J" || Age===24){  // Any of the condition should be true
    console.log(`You Name starts with J and your age is ${Age}`)
}
else{
    console.log("wrong Information")
}


//<<<<<<<<<<<<<<<<<<<<<<<<< Nested Else IF >>>>>>>>>>>>>>>>>>>>>

// let winningNum = 19

// let userGuess = +prompt("Guess A Number");  // prompt pop up takes input as string

// // console.log(userGuess)

// if(userGuess === winningNum){
//     console.log("Your Guess is Right")

// }
// else{
//     if(userGuess> winningNum){
//         console.log("Too High!")
//     }
//     else{
//         console.log("Too Low!")
//     }
// }



// <<<<<<<<<Many Condition with Many Output>>>>>>>>>>>>>


// let Temperature = +prompt("Enter the temperature in degree Celcious")

// if(Temperature<0){
//     console.log("I is Extremely cold Outsid!!")

// }
// else if(Temperature < 16 ){
//     console.log("It is Cold Out Side!!")
// }
// else if(Temperature < 25){
//     console.log("Weather is Ok")
// }
// else if(Temperature < 35){
//     console.log("It is Hot OutSide")
// }
// else{
//     console.log("Turn On The AC!!")
// }



//<<<<<<<<<<<<<<<<<<<< SWITCH STATEMENT  >>>>>>>>>>>>>>>>

let Day = +prompt("Enter the Number 1-7 to know your day")

switch(Day){
  
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;
    default:
        console.log("Invalid day")
}