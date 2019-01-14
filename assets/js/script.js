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

function changementJoueur() {
    if (currentPlayer == player1) {
        currentPlayer = player2;
    } else {
        currentPlayer = player1;
    }
}

function reset() {
    location.reload();
}

case7.addEventListener("click", function () {
    if (case8.src.endsWith(vide)) {
        if (currentPlayer == player1) {
            case7.src = croix;
        } else {
            case7.src = rond;
        }
    } else {
        alert("La case est déjà prise !")
    }
    changementJoueur();
})

case8.addEventListener("click", function () {
    if (case8.src.endsWith(vide)) {
        if (currentPlayer == player1) {
            case8.src = croix;
        } else {
            case8.src = rond;
        }
    } else {
        alert("La case est déjà prise !")
    }
    changementJoueur();
})

case9.addEventListener("click", function () {
    if (case9.src.endsWith(vide)) {
        if (currentPlayer == player1) {
            case9.src = croix;
        } else {
            case9.src = rond;
        }
    } else {
        alert("La case est déjà prise !")
    }
    changementJoueur();
})