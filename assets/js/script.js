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
let allCases = document.getElementsByClassName("box");
let grid = document.getElementById("boxes");;
let matrice = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
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

for (i = 0; i < allCases.length; i++) {
    allCases[i].onclick = function (event) {
        animation(event.target);
        if (event.target.src.endsWith(vide) && currentPlayer == player1) {
            event.target.src = croix;
            matriceP1();
            changementJoueur();
            player();
        } else if (event.target.src.endsWith(vide) && currentPlayer == player2) {
            event.target.src = rond;
            matriceP2();
            changementJoueur();
            player();
        } else {
            alert("La case est déjà prise !");
        }
        win(croix);
        win(rond);
    }
}

function matriceP1() {
    for ( let laCase in matrice ) {
            matrice[laCase] = player1;
    }
    console.log(matrice);
}

function matriceP2() {
    for ( let laCase in matrice ) {
            matrice[laCase] = player    2;
    }
    console.log(matrice);
}

// Fonction qui vérifie les combinaisons gagnantes

function win() {
    console.log(matrice);
    for( let player of players ) {
    	if(
    		( matrice[0][0] === player && matrice[1][0] === player && matrice[2][0] === player ) ||
    		( matrice[0][1] === player && matrice[1][1] === player && matrice[2][1] === player ) ||
    		( matrice[0][2] === player && matrice[1][2] === player && matrice[2][2] === player )
    	) {
          winner.src = player;
          end();
    	}
    }
}


// function win(etatBoxX) {
//     if (
//         // Colonnes
//         (allCases[0].src.endsWith(etatBoxX) && allCases[3].src.endsWith(etatBoxX) && allCases[6].src.endsWith(etatBoxX)) ||
//         (allCases[1].src.endsWith(etatBoxX) && allCases[4].src.endsWith(etatBoxX) && allCases[7].src.endsWith(etatBoxX)) ||
//         (allCases[2].src.endsWith(etatBoxX) && allCases[5].src.endsWith(etatBoxX) && allCases[8].src.endsWith(etatBoxX)) ||
//         // Lignes
//         (allCases[0].src.endsWith(etatBoxX) && allCases[1].src.endsWith(etatBoxX) && allCases[2].src.endsWith(etatBoxX)) ||
//         (allCases[3].src.endsWith(etatBoxX) && allCases[4].src.endsWith(etatBoxX) && allCases[5].src.endsWith(etatBoxX)) ||
//         (allCases[6].src.endsWith(etatBoxX) && allCases[7].src.endsWith(etatBoxX) && allCases[8].src.endsWith(etatBoxX)) ||
//         // Diagonales
//         (allCases[0].src.endsWith(etatBoxX) && allCases[4].src.endsWith(etatBoxX) && allCases[8].src.endsWith(etatBoxX)) ||
//         (allCases[2].src.endsWith(etatBoxX) && allCases[4].src.endsWith(etatBoxX) && allCases[6].src.endsWith(etatBoxX))
//     ) {
//         winner.src = etatBoxX;
//         end();
//     } else if (allCases.every(equality)) {
//         textFinal.innerHTML = "Egalité !";
//         end();
//     }
// }
//
// function equality(i) {
//     return !i.src.endsWith(vide);
// }

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
