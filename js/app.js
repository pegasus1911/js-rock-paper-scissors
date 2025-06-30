/*--------------constants--------------*/
const choices=['rock','paper','scissors']

/*--------------variables--------------*/
let msg
let playerChoice
let computerChoice
let playerResult    
let computerResul

/*--------------cached elements referneces--------------*/
const rockButtonElement = document.querySelector("#rock")
// console.log(rockButtonElement)
const paperButtonElement = document.querySelector("#paper")
// console.log(paperButtonElement)
const scissorsButtonElement=document.querySelector("#scissors")
// console.log(scissorsButtonElement)
const resultDisplayElement = document.querySelector("#result-display")
// console.log(resultDisplayElement)
const resetButtonElemenet=document.querySelector("#resetButton")
console.log(resetButtonElemenet)
const howToPlayElement=document.querySelector(".how-to-play")
console.log(howToPlayElement)
/*--------------functions--------------*/

//initialize game state
function play(event){
    //
    computerChoice=getComputerChoice()
    playerChoice=event.target.id;
    compare()
    render()
    
}
function getComputerChoice(){
    //generate a random number 0-2
    const randomIndex= Math.floor(Math.random()*choices.length)
    
    // select the item from the array
    return choices[randomIndex]
}

getComputerChoice()

// play()

function render(){
    resultDisplayElement.textContent="Computer chose = " + computerChoice +" and you chose "+ playerChoice+" "+msg
}

function compare(){
    if(playerChoice==="rock"&&computerChoice==="paper"){
         msg="Computer Won"
    }
    else if(playerChoice==='rock'&&computerChoice==='scissors'){
        msg='You won'
    }
    else if(playerChoice==='rock'&&computerChoice==='rock'){
        msg='DRAW'
    }
    else if(playerChoice==='paper'&&computerChoice==='rock'){
        msg="you won"
    }
    else if(playerChoice==='paper'&&computerChoice==='scissors'){
        msg='computer won'
    }
    else if(playerChoice==='paper'&&computerChoice==='paper'){
        msg='DRAW'
    }
    else if(playerChoice==="scissors"&&computerChoice==='paper'){
        msg='player won'
    }
    else if(playerChoice==="scissors"&&computerChoice==='rock'){
        msg='comuter won'
    }
    else{
        msg='Draw'
    }

}
function reset(){
    resultDisplayElement.textContent='Game reseted, play choose a choice'
}
function howToPlay(){
    
}
/*--------------Event listinetr--------------*/
rockButtonElement.addEventListener('click',play)
paperButtonElement.addEventListener('click',play)
scissorsButtonElement.addEventListener('click',play)
resetButtonElemenet.addEventListener('click',reset)
howToPlayElement.addEventListener('click',)
/*--------------constants--------------*/