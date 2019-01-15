let vide = "assets/img/empty.png";
let croix = "assets/img/cross-2.png";
let rond = "assets/img/circle-3.png";
let etatBox = [croix, rond];
let player1 = 1;
let player2 = 2;
let players = [player1, player2];
let currentPlayer = player1;
let joueurActuel = document.getElementById("player");
let textFinal = document.getElementById("resultat")
let case1 = document.getElementById("box1");
let case2 = document.getElementById("box2");
let case3 = document.getElementById("box3");
let case4 = document.getElementById("box4");
let case5 = document.getElementById("box5");
let case6 = document.getElementById("box6");
let case7 = document.getElementById("box7");
let case8 = document.getElementById("box8");
let case9 = document.getElementById("box9");

// Indique a quel joueur c'est de jouer 

function player() {
    if (currentPlayer == player1) {
        joueurActuel.src = croix;
    } else if (currentPlayer == player2) {
        joueurActuel.src = rond;
    }
}

player();

// Permet de changer de joueur après avoir jouer

function changementJoueur() {
    if (currentPlayer == player1) {
        currentPlayer = player2;
    } else {
        currentPlayer = player1;
    }
}

// Fin du jeu

function end() {
    // alert("Fin")
    textFinal.style.display = 'block';
}

// Remet le jeu à zéro

function reset() {
    case1.src = vide;
    case2.src = vide;
    case3.src = vide;
    case4.src = vide;
    case5.src = vide;
    case6.src = vide;
    case7.src = vide;
    case8.src = vide;
    case9.src = vide;
}

// Si la case est vide, elle se remplit suivant le joueur

function game(caseX) {
    if (caseX.src.endsWith(vide) && currentPlayer == player1) {
        caseX.src = croix;
        changementJoueur();
        player();
    } else if (caseX.src.endsWith(vide) && currentPlayer == player2) {
        caseX.src = rond;
        changementJoueur();
        player();
    } else {
        alert("La case est déjà prise !");
    }
    win();
}

case1.onclick = () => { game(case1) };
case2.onclick = () => { game(case2) };
case3.onclick = () => { game(case3) };
case4.onclick = () => { game(case4) };
case5.onclick = () => { game(case5) };
case6.onclick = () => { game(case6) };
case7.onclick = () => { game(case7) };
case8.onclick = () => { game(case8) };
case9.onclick = () => { game(case9) };


function win() {

    // Pour chaque joueur
    for (let etatBoxIndex in etatBox) {
        // On vérifie J1 a gagné dans une des colonnes
        if (
            (case1.src.endsWith(croix) && case4.src.endsWith(croix) && case7.src.endsWith(croix)) ||
            (case2.src.endsWith(croix) && case5.src.endsWith(croix) && case8.src.endsWith(croix)) ||
            (case3.src.endsWith(croix) && case6.src.endsWith(croix) && case9.src.endsWith(croix))
        ) {
            end();
            break;

            // On vérifie J1 a gagné dans une des lignes    
        } else if (
            (case1.src.endsWith(croix) && case2.src.endsWith(croix) && case3.src.endsWith(croix)) ||
            (case4.src.endsWith(croix) && case5.src.endsWith(croix) && case6.src.endsWith(croix)) ||
            (case7.src.endsWith(croix) && case8.src.endsWith(croix) && case9.src.endsWith(croix))
        ) {
            end();
            break;
            // On vérifie J1 a gagne dans une des diagonale
        } else if (
            (case1.src.endsWith(croix) && case5.src.endsWith(croix) && case9.src.endsWith(croix)) ||
            (case3.src.endsWith(croix) && case5.src.endsWith(croix) && case7.src.endsWith(croix))
        ) {
            end();
            break;
            // On vérifie J2 a gagné dans une des colonnes

        } else if (
            (case1.src.endsWith(rond) && case4.src.endsWith(rond) && case7.src.endsWith(rond)) ||
            (case2.src.endsWith(rond) && case5.src.endsWith(rond) && case8.src.endsWith(rond)) ||
            (case3.src.endsWith(rond) && case6.src.endsWith(rond) && case9.src.endsWith(rond))
        ) {
            end();
            break;

            // On vérifie J2 a gagné dans une des lignes    
        } else if (
            (case1.src.endsWith(rond) && case2.src.endsWith(rond) && case3.src.endsWith(rond)) ||
            (case4.src.endsWith(rond) && case5.src.endsWith(rond) && case6.src.endsWith(rond)) ||
            (case7.src.endsWith(rond) && case8.src.endsWith(rond) && case9.src.endsWith(rond))
        ) {
            end();
            break;
            // On vérifie J2 a gagne dans une des diagonale
        } else if (
            (case1.src.endsWith(rond) && case5.src.endsWith(rond) && case9.src.endsWith(rond)) ||
            (case3.src.endsWith(rond) && case5.src.endsWith(rond) && case7.src.endsWith(rond))
        ) {
            end();
            break;
        }
    }
}
