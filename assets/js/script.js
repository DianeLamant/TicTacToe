let vide = "assets/img/empty.png";
let croix = "assets/img/hippo3.png";
let rond = "assets/img/hippo2.png";
let etatBox = [vide, croix, rond];
let player1 = 1;
let player2 = 2;
let players = [player1, player2];
let currentPlayer = player1;
let joueurActuel = document.getElementById("player");
let winner = document.getElementById("gagnant");
let textFinal = document.getElementById("winnerText");
let modalBox = document.getElementById("resultat");
let case1 = document.getElementById("box1");
let case2 = document.getElementById("box2");
let case3 = document.getElementById("box3");
let case4 = document.getElementById("box4");
let case5 = document.getElementById("box5");
let case6 = document.getElementById("box6");
let case7 = document.getElementById("box7");
let case8 = document.getElementById("box8");
let case9 = document.getElementById("box9");
let allCases = [case1, case2, case3, case4, case5, case6, case7, case8, case9];
let grid = document.getElementById("boxes");;

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
    win(croix);
    win(rond);
}

case1.onclick = () => { animation(case1), game(case1) };
case2.onclick = () => { animation(case2), game(case2) };
case3.onclick = () => { animation(case3), game(case3) };
case4.onclick = () => { animation(case4), game(case4) };
case5.onclick = () => { animation(case5), game(case5) };
case6.onclick = () => { animation(case6), game(case6) };
case7.onclick = () => { animation(case7), game(case7) };
case8.onclick = () => { animation(case8), game(case8) };
case9.onclick = () => { animation(case9), game(case9) };

// Fonction qui vérifie les combinaisons gagnantes

function win(etatBoxX) {
    if (
        // Colonnes
        (case1.src.endsWith(etatBoxX) && case4.src.endsWith(etatBoxX) && case7.src.endsWith(etatBoxX)) ||
        (case2.src.endsWith(etatBoxX) && case5.src.endsWith(etatBoxX) && case8.src.endsWith(etatBoxX)) ||
        (case3.src.endsWith(etatBoxX) && case6.src.endsWith(etatBoxX) && case9.src.endsWith(etatBoxX)) ||
        // Lignes
        (case1.src.endsWith(etatBoxX) && case2.src.endsWith(etatBoxX) && case3.src.endsWith(etatBoxX)) ||
        (case4.src.endsWith(etatBoxX) && case5.src.endsWith(etatBoxX) && case6.src.endsWith(etatBoxX)) ||
        (case7.src.endsWith(etatBoxX) && case8.src.endsWith(etatBoxX) && case9.src.endsWith(etatBoxX)) ||
        // Diagonales
        (case1.src.endsWith(etatBoxX) && case5.src.endsWith(etatBoxX) && case9.src.endsWith(etatBoxX)) ||
        (case3.src.endsWith(etatBoxX) && case5.src.endsWith(etatBoxX) && case7.src.endsWith(etatBoxX))
    ) {
        winner.src = etatBoxX;
        end();
    } else if (allCases.every(equality)) {
        textFinal.innerHTML = "Egalité !";
        end();
    }
}

function equality(i) {
    return !i.src.endsWith(vide)
}
;

// Fin du jeu

function end() {
    modalBox.style.display = 'block';
    grid.style.cursor = 'default';
    grid.style.pointerEvents = 'none';
}

// Remet le jeu à zéro

function reset() {
    location.reload();
}

function animation(caseX) {
    caseX.style = '-webkit-transform:scale(0) rotate(360deg);';
    caseX.style = '-webkit-animation : kf_scale 0.7s';
}