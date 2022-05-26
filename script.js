console.log("WELCOME TO ROCK PAPER SCISSORS GAME")

function playRound(user) { // this function gets user option and manages the whole gameplay
    // e.stopPropagation();
    //let user = e.classList.value;

    console.log("User: " + user);
    
    let cpu = computerPlay();
    console.log("Cpu: " + cpu);

    let result = match(cpu, user);
    console.log((result != 'TIE') ? "!!! User " + result + " !!!" : "!!! Result was a TIE !!!");

    return (result != 'TIE') ? "!!! User " + result + " !!!" : "!!! Result was a TIE !!!";
}

function computerPlay() { // this function gets a random play for cpu
    let randNum = Math.floor(Math.random() * 3)
    
    return (randNum === 0) ? 'rock': (randNum === 1) ? 'paper': 'scissors';
}

function match(cpu, user) {
    let result = (cpu == user) ? "TIE":
    (cpu == 'rock') ? (user == 'paper') ? 'WIN' : 'LOSE' :
    (cpu == 'paper') ? (user == 'scissors') ? 'WIN' : 'LOSE' :
    (cpu == 'scissors') ? (user == 'rock') ? 'WIN' : 'LOSE' : 'LOSE';

    return result;
}

const buttons = document.querySelectorAll('button');
// console.log(buttons);

buttons.forEach(button => button.addEventListener('click', () => {
    let output = playRound(button.innerHTML);
    document.getElementById("result").innerHTML = output;


}));