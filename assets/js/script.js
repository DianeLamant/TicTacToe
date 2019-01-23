let vide = "assets/img/empty.png";
let croix = "assets/img/hippo-bleu.png";
let rond = "assets/img/hippo-rose.png";
let player1 = 1;
let player2 = 2;
let players = [player1, player2];
let currentPlayer = player2;
let joueurActuel = document.getElementById("player");
let winner = document.getElementById("gagnant");
let textFinal = document.getElementById("winnerText");
let modalBox = document.getElementById("resultat");
let allCases = document.getElementsByClassName("box");
let grid = document.getElementById("boxes");
let setScoreP1 = 0;
let setScoreP2 = 0;
let scoreP1 = document.getElementById("resultatP1");
let scoreP2 = document.getElementById("resultatP2");
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
            alert("La case est déjà prise !")
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
        if (player == player1) {
            setScoreP1++;
            animScore(scoreP1);
        } else if (player == player2) {
            setScoreP2++;
            animScore(scoreP2);
        }
        updateScore();
    } else {
        if (equality()) {
            textFinal.innerHTML = "Egalité !";
            end();
        }
    }
}

function equality() {
    for (x = 0; x < matrice.length; x++) {
        for (y = 0; y < matrice.length; y++) {
            if (matrice[x][y] == 0) {
                return false;
            }
        }
    }
    return true;
}

// Score

function updateScore() {
    scoreP1.innerHTML = setScoreP1;
    scoreP2.innerHTML = setScoreP2;
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
        stopAnimation(allCases[i]);
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

function newGame() {
    scoreP1.innerHTML = 0;
    scoreP2.innerHTML = 0;
    setScoreP1 = 0;
    setScoreP2 = 0;
    updateScore();
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

function stopAnimation(caseX) {
    caseX.style = '';
    caseX.style = '';
}

function animScore(scoreX) {
    scoreX.style = 'transition: transform .15s;';
    scoreX.style = '-webkit-transform: scale(0.5);';
}