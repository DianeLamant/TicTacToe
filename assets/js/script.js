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

case1.onclick = () => { animation(); game(case1) };
case2.onclick = () => { game(case2) };
case3.onclick = () => { game(case3) };
case4.onclick = () => { game(case4) };
case5.onclick = () => { game(case5) };
case6.onclick = () => { game(case6) };
case7.onclick = () => { game(case7) };
case8.onclick = () => { game(case8) };
case9.onclick = () => { game(case9) };


function win() {
    if (
        // Colonnes
        (case1.src.endsWith(croix) && case4.src.endsWith(croix) && case7.src.endsWith(croix)) ||
        (case2.src.endsWith(croix) && case5.src.endsWith(croix) && case8.src.endsWith(croix)) ||
        (case3.src.endsWith(croix) && case6.src.endsWith(croix) && case9.src.endsWith(croix)) ||
        // Lignes
        (case1.src.endsWith(croix) && case2.src.endsWith(croix) && case3.src.endsWith(croix)) ||
        (case4.src.endsWith(croix) && case5.src.endsWith(croix) && case6.src.endsWith(croix)) ||
        (case7.src.endsWith(croix) && case8.src.endsWith(croix) && case9.src.endsWith(croix)) ||
        // Diagonales
        (case1.src.endsWith(croix) && case5.src.endsWith(croix) && case9.src.endsWith(croix)) ||
        (case3.src.endsWith(croix) && case5.src.endsWith(croix) && case7.src.endsWith(croix))
    ) {
        winner.src = croix;
        end();
    } else if (
        // Colonnes
        (case1.src.endsWith(rond) && case4.src.endsWith(rond) && case7.src.endsWith(rond)) ||
        (case2.src.endsWith(rond) && case5.src.endsWith(rond) && case8.src.endsWith(rond)) ||
        (case3.src.endsWith(rond) && case6.src.endsWith(rond) && case9.src.endsWith(rond)) ||
        // Lignes
        (case1.src.endsWith(rond) && case2.src.endsWith(rond) && case3.src.endsWith(rond)) ||
        (case4.src.endsWith(rond) && case5.src.endsWith(rond) && case6.src.endsWith(rond)) ||
        (case7.src.endsWith(rond) && case8.src.endsWith(rond) && case9.src.endsWith(rond)) ||
        // Diagonales
        (case1.src.endsWith(rond) && case5.src.endsWith(rond) && case9.src.endsWith(rond)) ||
        (case3.src.endsWith(rond) && case5.src.endsWith(rond) && case7.src.endsWith(rond))
    ) {
        winner.src = rond;
        end();
    } else if (
        !case1.src.endsWith(vide) && !case2.src.endsWith(vide) && !case3.src.endsWith(vide) && !case4.src.endsWith(vide) && !case5.src.endsWith(vide) && !case6.src.endsWith(vide) && !case7.src.endsWith(vide) && !case8.src.endsWith(vide) && !case9.src.endsWith(vide)
    ) {
        textFinal.innerHTML = "Egalité !";
        end();
    }

}

// for (i = 0; i < allCases.length; i++) {
//     if (!allCases[i].src.endsWith(vide)) {
//         end();
//         winner.src = vide;
//     }

function animation(caseX) {
    caseX.style = '-webkit-transform:scale(0) rotate(360deg);';
    caseX.style = '-webkit-animation : kf_scale 1s';
}