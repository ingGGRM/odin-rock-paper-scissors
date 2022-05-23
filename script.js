console.log("Hello People")

function computerPlay() {
    let randNum = Math.floor(Math.random() * 3)
    
    return (randNum === 0) ? 'Rock': (randNum === 1) ? 'Paper': 'Scissors';
}

function userPlay() {
    let option = prompt("Make your Choice (Rock = 1; Paper = 2; Scissors = 3): ")
    
    return (option == 1) ? 'Rock': (option == 2) ? 'Paper': 'Scissors';
}

function match(cpu, user) {
    let result = (cpu == user) ? "TIE":
    (cpu == 'Rock') ? (user == 'Paper') ? 'WIN' : 'LOSE' :
    (cpu == 'Paper') ? (user == 'Scissors') ? 'WIN' : 'LOSE' :
    (cpu == 'Scissors') ? (user == 'Rock') ? 'WIN' : 'LOSE' : 'LOSE';

    return result;
}


let cpuOpt = computerPlay();
console.log("CPU play is: " + cpuOpt);

userOpt = userPlay();
console.log("USER play is: " + userOpt)

let res = match(cpuOpt, userOpt);
console.log((res === "TIE") ? "This match was a TIE" : "You " + res + " !!!");