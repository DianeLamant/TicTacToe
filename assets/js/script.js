let vide = "assets/img/empty.png";
let croix = "assets/img/hippo-bleu.png";
let rond = "assets/img/hippo-rose.png";
let player1 = 1;
let player2 = 2;
let players = [player1, player2];
let currentPlayer = player2;
let joueurActuel = document.getElementById("player");
let gameName = document.getElementById("gameName");
let whosPlaying = document.getElementById("whosPlaying");
let format = document.getElementById("format");
let grid = document.getElementById("boxes");
let score = document.getElementById("score");
let boutons = document.getElementById("reset");
let winner = document.getElementById("gagnant");
let textFinal = document.getElementById("winnerText");
let modalBox = document.getElementById("resultat");
let allCases = document.getElementsByClassName("box");
let setScoreP1 = 0;
let setScoreP2 = 0;
let scoreP1 = document.getElementById("resultatP1");
let scoreP2 = document.getElementById("resultatP2");
let isItOver = false;
let matrice = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

// Indique a quel joueur c'est de jouer

function changementJoueur() {
    if (currentPlayer == player1) {
        joueurActuel.src = rond;
        currentPlayer = player2;
    } else if (currentPlayer == player2) {
        joueurActuel.src = croix;
        currentPlayer = player1;
    }
}
changementJoueur();

// Si la case est vide, elle se remplit suivant le joueur
function deuxJoueurs() {
    gameOn();
    for (i = 0; i < allCases.length; i++) {
        allCases[i].onclick = function (event) {
            animation(event.target);
            bgTransparent(event.target);
            let x = event.target.dataset.x;
            let y = event.target.dataset.y;
            if (matrice[x][y] == 0 && currentPlayer == player1) {
                matrice[x][y] = 1;
                event.target.src = croix;
                win(croix, player1);
                changementJoueur();
            } else if (matrice[x][y] == 0 && currentPlayer == player2) {
                matrice[x][y] = 2;
                event.target.src = rond;
                win(rond, player2);
                changementJoueur();
            } 
        }
    }
}

function unJoueur() {
    gameOn();
    if (currentPlayer == player1) {
        for (i = 0; i < allCases.length; i++) {
            allCases[i].onclick = function (event) {
                animation(event.target);
                let x = event.target.dataset.x;
                let y = event.target.dataset.y;
                if (matrice[x][y] == 0 && currentPlayer == player1) {
                    matrice[x][y] = 1;
                    event.target.src = croix;
                    win(croix, player1);
                    changementJoueur();
                    unJoueur();
                }
            }
        }
    } else if (currentPlayer == player2 && isItOver === false) {
        let casesVides = [];
        for (let x = 0; x < matrice.length; x++) {
            for (let y = 0; y < matrice[x].length; y++) {
                if (matrice[x][y] == 0) {
                    casesVides.push([x,y])
                }
            }   
        }
        let chosenCase = casesVides[Math.floor(Math.random() * casesVides.length)];
        let x = chosenCase[0];
        let y = chosenCase[1];
        matrice[x][y] = player2;
        setTimeout(function () { 
            for (let i = 0; i < allCases.length; i++) {
                if (allCases[i].dataset.x == x && allCases[i].dataset.y == y) {
                    allCases[i].src = rond;
                    animation(allCases[i]);
                }
            }
        }, 2000);
        win(rond, player2);
        changementJoueur();
    }
}

// Fonction qui vérifie les combinaisons gagnantes

function win(gagnant, player) {
    stopAnimation(scoreP1);
    stopAnimation(scoreP2);
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
        textFinal.innerHTML = "Joueur " + "<img src=\"" + gagnant + "\" width=\"50px\" >" + " a gagné !";
        isItOver = true;
        end();
        if (player == player1) {
            setScoreP1++;
            updateScore();
            animScore(scoreP1);
        } else if (player == player2) {
            setScoreP2++;
            updateScore();
            animScore(scoreP2);
        }
        
    } else {
        if (equality()) {
            textFinal.innerHTML = "Egalité !";
            isItOver = true;
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

// Affiche le score sur la page

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
    chooseFormat();
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

function gameOn() {
    stopAnimation(gameName);
    whosPlaying.style = 'visibility: visible;';
    grid.style = 'visibility: visible;';
    score.style = 'visibility: visible;';
    boutons.style = 'visibility: visible;';
    format.style = 'visibility: hidden;';
    gameName.style = 'visibility: hidden;';
}

function chooseFormat() {
    whosPlaying.style = 'visibility: hidden;';
    grid.style = 'visibility: hidden;';
    score.style = 'visibility: hidden;';
    boutons.style = 'visibility: hidden;';
    format.style = 'visibility: visible;';
    gameName.style = 'visibility: visible;';
    animName(gameName);
}

function animation(caseX) {
    caseX.style = '-webkit-transform:scale(0) rotate(360deg);';
    caseX.style = '-webkit-animation : kf_scale 0.7s';
}

function animScore(scoreX) {
    scoreX.style = '-webkit-animation : unzoom 0.3s';
}

function animName(X) {
    X.style = '-webkit-animation : animName 0.7s'
}

function bgTransparent(caseX) {
    caseX.style.backgroundColor = '';
}

function stopAnimation(X) {
    X.style = '';
    X.style = '';
}