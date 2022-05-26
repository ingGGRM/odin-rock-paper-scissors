//console.log("WELCOME TO ROCK PAPER SCISSORS GAME")

function playRound(user) { // this function gets user option and manages the whole gameplay
    //e.stopPropagation();
    //let user = e.classList.value;

    //console.log("User: " + user);
    
    let cpu = computerPlay();
    //console.log("Cpu: " + cpu);

    let result = match(cpu.toLowerCase(), user.toLowerCase());
    //console.log((result != 'TIE') ? "!!! User " + result + " !!!" : "!!! Result was a TIE !!!");

    return result;
}

function computerPlay() { // this function gets a random play for cpu
    let randNum = Math.floor(Math.random() * 3)
    
    return (randNum === 0) ? 'rock': (randNum === 1) ? 'paper': 'scissors';
}

function match(cpu, user) {
    let result = (cpu == user) ? "tie":
    (cpu == 'rock') ? (user == 'paper') ? 'win' : 'lose' :
    (cpu == 'paper') ? (user == 'scissors') ? 'win' : 'lose' :
    (cpu == 'scissors') ? (user == 'rock') ? 'win' : 'lose' : 'lose';

    return result;
}

const start = document.querySelector('.start-end');
const buttons = document.querySelectorAll('.user-panel > button');
//console.log(start);
//console.log(buttons);

start.addEventListener('click', () => {
    let game = true;
    let round = 0;

    while (round < 5) {
        //console.log(round);
        buttons.forEach(button => button.addEventListener('click', () => {
            let output = playRound(button.innerHTML);
            document.getElementById("result").innerHTML = output;

            round++;
        }));
    }
    //console.log("OUTTTTTT");
});
