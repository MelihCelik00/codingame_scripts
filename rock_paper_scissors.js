/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const call1 = inputs[0];
const call2 = inputs[1];

rules = {
    "ROCK": {"ROCK": 0, "PAPER": -1, "SCISSORS": 1},
    "PAPER": {"ROCK": 1, "PAPER": 0, "SCISSORS": -1},
    "SCISSORS": {"ROCK": -1, "PAPER": 1, "SCISSORS": 0},
}

const result = rules[call1][call2];

if (result == 0){
    console.log("DRAW");
} else if (result == 1) {
    console.log("PLAYER1")
} else if (result == -1) {
    console.log("PLAYER2")
}
