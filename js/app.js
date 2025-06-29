/*--------------constants--------------*/
const choices=['rock','paper','scissors']

/*--------------variables--------------*/
let msg
let playerChoice
let computerChoice

/*--------------cached elements referneces--------------*/
const rockButtonElement = document.querySelector("#rock")
console.log(rockButtonElement)
const paperButtonElement = document.querySelector("#paper")
console.log(paperButtonElement)
const scissorsButtonElement=document.querySelector("#scissors")
console.log(scissorsButtonElement)
/*--------------functions--------------*/

//initialize game state
function play(){
    //
    getComputerChoice()
    console.log('computer choice is = '+computerChoice)
    render()
}
function getComputerChoice(){
    //generate a random number 0-2
    const randomIndex= Math.floor(Math.random()*choices.length)
    // select the item from the array
    computerChoice= choices[randomIndex]
}

getComputerChoice()

play()

function render(){

}

/*--------------constants--------------*/

/*--------------constants--------------*/