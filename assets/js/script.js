let vide = "assets/img/empty.png";
let croix = "assets/img/cross-2.png";
let rond = "assets/img/circle-3.png";
let etatBox = [vide, croix, rond];
let player1 = 1;
let player2 = 2;
let players = [player1, player2];
let currentPlayer = player1;
let case1 = document.getElementById("box1");
let case2 = document.getElementById("box2");
let case3 = document.getElementById("box3");
let case4 = document.getElementById("box4");
let case5 = document.getElementById("box5");
let case6 = document.getElementById("box6");
let case7 = document.getElementById("box7");
let case8 = document.getElementById("box8");
let case9 = document.getElementById("box9");

// Permet de changer de joueur après avoir jouer

function changementJoueur() {
    if (currentPlayer == player1) {
        currentPlayer = player2;
    } else {
        currentPlayer = player1;
    }
}

// Remet le jeu à zéro

function reset() {
    location.reload();
}

// Si la case est vide, elle se remplit suivant le joueur

function game(caseX) {
    if (caseX.src.endsWith(vide) && currentPlayer == player1) {
        caseX.src = croix;
        changementJoueur();
    } else if (caseX.src.endsWith(vide) && currentPlayer == player2) {
        caseX.src = rond;
        changementJoueur();
    } else {
        alert("La case est déjà prise !")
    }
    
}

case1.onclick =() => {game(case1)};
case2.onclick =() => {game(case2)};
case3.onclick =() => {game(case3)};
case4.onclick =() => {game(case4)};
case5.onclick =() => {game(case5)};
case6.onclick =() => {game(case6)};
case7.onclick =() => {game(case7)};
case8.onclick =() => {game(case8)};
case9.onclick =() => {game(case9)};