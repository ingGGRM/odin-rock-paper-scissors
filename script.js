/* variables declaration */

const start = document.querySelector('.start-end');
const buttons = document.querySelectorAll('.user-panel > button');
//console.log(start);
//console.log(buttons);

let game, user_score, cpu_score;

/* function declarations */

function init() { // init function called at page full load. This will listen to all clicks
    game = false;

    start.addEventListener('click', () => {
        if (!game) { // if the game is not started
            game = true;
            user_score = 0;
            cpu_score = 0;
            start.textContent = "STOP";
        } else { // if the game is starting
            //game = false;
            //start.textContent = "Start Match";
            location.reload(); // this command will reload the body
        }
    });

    buttons.forEach(button => button.addEventListener('click', () => {
        if (game) {
            let output = playRound(button.innerHTML);
            document.getElementById("result").innerHTML = output;
        
            if (output == 'win') user_score++;
            else if (output == 'lose') cpu_score++;

            console.log("User: " + user_score + "   Cpu: " + cpu_score);
            
            if (cpu_score == 5 || user_score == 5) {
                game = false;
                start.textContent = "Start Match";
                console.log((cpu_score == 5) ? "The CPU Won !!" : "You Won !!");
                
            }
        }
    }));
}

function playRound(user) { // this function gets user option and manages the whole gameplay
    //e.stopPropagation();
    //let user = e.classList.value;

    //console.log("User: " + user);
    
    let cpu = computerPlay();
    //console.log("Cpu: " + cpu);

    let result = match(cpu.toLowerCase(), user.toLowerCase());
    //console.log((result != 'TIE') ? "!!! User " + result + " !!!" : "!!! Result was a TIE !!!");

    return result; // this function returns the result of the match
}

function computerPlay() { // this function gets a random play for cpu
    let randNum = Math.floor(Math.random() * 3)
    
    return (randNum === 0) ? 'rock': (randNum === 1) ? 'paper': 'scissors';
}

function match(cpu, user) { // this function resolves the logic of the match
    let result = (cpu == user) ? "tie":
    (cpu == 'rock') ? (user == 'paper') ? 'win' : 'lose' :
    (cpu == 'paper') ? (user == 'scissors') ? 'win' : 'lose' :
    (cpu == 'scissors') ? (user == 'rock') ? 'win' : 'lose' : 'lose';

    return result;
}




