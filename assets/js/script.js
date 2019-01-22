let vide = "assets/img/empty.png";
let croix = "assets/img/hippo3.png";
let rond = "assets/img/hippo2.png";
let etatBox = [vide, croix, rond];
let player1 = 1;
let player2 = 2;
let players = [player1, player2];
let currentPlayer = player2;
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
];

// Indique a quel joueur c'est de jouer

function changementJoueur() {
    if (currentPlayer == player2) {
        joueurActuel.src = croix;
        currentPlayer = player1;
    } else if (currentPlayer == player1) {
        joueurActuel.src = rond;
        currentPlayer = player2;
    }
}
changementJoueur();

// Si la case est vide, elle se remplit suivant le joueur

for (i = 0; i < allCases.length; i++) {
    allCases[i].onclick = function (event) {
        animation(event.target);
        let x = event.target.dataset.x;
        let y = event.target.dataset.y;
        if (matrice[x][y] == 0 && currentPlayer == player1) {
            matrice[x][y] = 1;
            event.target.src = croix;
            changementJoueur();
            win(croix, player1);
        } else if (matrice[x][y] == 0 && currentPlayer == player2) {
            matrice[x][y] = 2;
            event.target.src = rond;
            changementJoueur();
            win(rond, player2);
        } else {
            alert("La case est déjà prise !");
        }

    }
}

// Fonction qui vérifie les combinaisons gagnantes

function win(gagnant, player) {
    if (
        // Colonnes
        (matrice[0][0] === player && matrice[1][0] === player && matrice[2][0] === player) ||
        (matrice[0][1] === player && matrice[1][1] === player && matrice[2][1] === player) ||
        (matrice[0][2] === player && matrice[1][2] === player && matrice[2][2] === player) ||
        // Lignes
        (matrice[0][0] === player && matrice[0][1] === player && matrice[0][2] === player) ||
        (matrice[1][0] === player && matrice[1][1] === player && matrice[1][2] === player) ||
        (matrice[2][0] === player && matrice[2][1] === player && matrice[2][2] === player) ||
        // Diagonales
        (matrice[0][2] === player && matrice[1][1] === player && matrice[2][0] === player) ||
        (matrice[0][0] === player && matrice[1][1] === player && matrice[2][2] === player)
    ) {
        winner.src = gagnant;
        end();
    } else {
        if (matrice.every(equality)) {
            textFinal.innerHTML = "Egalité !";
            end();
        }
    }
}

function equality() {
    let x = event.target.dataset.x;
    let y = event.target.dataset.y;
    for (x = 0; x < matrice.length; x++) {
        (y = 0; y < matrice.length; y++) {
            matrice[x][y] != 0;
        }
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
    for (i = 0; i < allCases.length; i++) {
        allCases[i].src = vide;
    }
    currentPlayer = player1;
    joueurActuel.src = croix;
    modalBox.style.display = 'none';
    grid.style.cursor = 'pointer';
    grid.style.pointerEvents = '';
    matrice = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
}

function animation(caseX) {
    caseX.style = '-webkit-transform:scale(0) rotate(360deg);';
    caseX.style = '-webkit-animation : kf_scale 0.7s';
}