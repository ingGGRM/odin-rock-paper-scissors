/* variables declaration */

const start = document.querySelector('.start-end');
const buttons = document.querySelectorAll('.user-buttons > button');
//console.log(start);
//console.log(buttons);
const vs_user = document.querySelector(".vs > :first-child");
const vs_cpu = document.querySelector(".vs > :last-child");
const show_cpu_score = document.querySelector('.score > .score-cpu > .score-value');
const show_user_score = document.querySelector('.score > .score-user > .score-value');
//const result_label = document.getElementById("result");
const winner_img = document.querySelector("#result > :first-child");
const looser_img = document.querySelector("#result > :last-child");
const button_panel = document.querySelector(".user-buttons");

let game, user_score, cpu_score;

/* function declarations */

function init() { // init function called at page full load. This will listen to all clicks
    game = false;
    show_cpu_score.innerHTML = 0;
    show_user_score.innerHTML = 0;
    button_panel.classList.add("hidden");

    start.addEventListener('click', () => { // listen to start button
        button_panel.classList.remove("hidden");
        if (!game) { // if the game is not started
            //result_label.classList.add('hidden')
            winner_img.classList.add("hidden");
            looser_img.classList.add("hidden");

            game = true;
            user_score = 0;
            cpu_score = 0;
            start.textContent = "STOP";
            show_cpu_score.innerHTML = 0;
            show_user_score.innerHTML = 0;
        } else { // if the game is starting
            //game = false;
            //start.textContent = "Start Match";
            location.reload(); // this command will reload the body
        }
    });

    buttons.forEach(button => button.addEventListener('click', () => { // listen to rock, paper and scissors buttons
        if (game) {
            button.classList.add("clicked");
            let output = playRound(button.innerHTML);
            //result_label.innerHTML = output;
        
            if (output == 'win') user_score++;
            else if (output == 'lose') cpu_score++;

            console.log("User: " + user_score + "   Cpu: " + cpu_score);

            show_cpu_score.innerHTML = cpu_score;
            show_user_score.innerHTML = user_score;

            if (cpu_score == 5 || user_score == 5) {
                game = false;
                start.textContent = "Start Match";
                //console.log((cpu_score == 5) ? "The CPU Won !!" : "You Won !!");
                /*
                result_label.innerHTML = (cpu_score == 5) ?
                "The CPU Won " + cpu_score + " to " + user_score :
                "You Won " + user_score + " to " + cpu_score;
                result_label.classList.remove('hidden')
                */
                document.querySelector(".user-buttons").classList.add("hidden");
                if (user_score == 5) winner_img.classList.remove("hidden");
                else looser_img.classList.remove("hidden");
            }
        }
    }));

    buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if itś not a transform
    // console.log(e.propertyName);
    this.classList.remove('clicked');
  }

function playRound(user) { // this function gets user option and manages the whole gameplay
    //e.stopPropagation();
    //let user = e.classList.value;

    //console.log("User: " + user);
    
    let cpu = computerPlay();
    //console.log("Cpu: " + cpu);
    vs_user.innerHTML = user.toUpperCase();
    vs_cpu.innerHTML = cpu.toUpperCase();

    let result = match(cpu.toLowerCase(), user.toLowerCase());
    //console.log((result != 'TIE') ? "!!! User " + result + " !!!" : "!!! Result was a TIE !!!");

    return result; // this function returns the result of the match
}

function computerPlay() { // this function gets a random play for cpu
    let randNum = Math.floor(Math.random() * 3) // get a random number between 1 and 3
    
    return (randNum === 0) ? 'rock': (randNum === 1) ? 'paper': 'scissors'; // return the random number as one of the three options
}

function match(cpu, user) { // this function resolves the logic of the match
    let result = (cpu == user) ? "tie": // tie
    (cpu == 'rock') ? (user == 'paper') ? 'win' : 'lose' : // rock vs paper
    (cpu == 'paper') ? (user == 'scissors') ? 'win' : 'lose' : // paper vs scissors
    (cpu == 'scissors') ? (user == 'rock') ? 'win' : 'lose' : 'lose'; // scissors vs rock

    return result; // return win, lose or tie
}




