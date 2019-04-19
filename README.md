# Tic Tac Toe
Créer un Tic Tac Toe... (Morpion)

## Règles du jeu :
Sur un plateau de 9 cases (3 par 3)

Tenter d'aligner 3 de ses pions (X ou O) dans la largeur, hauteur ou en diagonale

Empêcher son adversaire de faire de même

Le premier qui arrive à aligner 3 de ses pions a gagné

Chaque joueur joue l'un après l'autre

## Version 1 : 2 joueurs 
Créer un Tic Tac Toe jouable à 2 en Javascript, HTML et CSS

La grille doit utiliser bootstrap pour s'afficher (elle fait toujours 3 colonnes, peu importe la taille de l'écran, mais les images doivent s'adapter)

Chaque case affiche :
- soit une case vide (trasparente)
- soit une croix
- soit un rond

Chaque case est de la même taille en hauteur et largeur

## Version 2 : 1 à 2 joueurs
Donner la possibilité de jouer seul face à l'ordinateur... ou à deux

## Version Améliorée 
- Changer la taille de la grille dynamiquement (attention à la grille bootstrap, passer à autre chose (variables CSS par exemple))
- Utiliser un sprite pour afficher les pions (https://www.alsacreations.com/tuto/lire/1068-sprites-css-background-position.html)
- Donner la possibilité de choisir son pion et le plateau

## Exemples de matrices 
si une case vide vaut 0, `player1` vaut 1 et `player2` vaut 2 :

	let matrice = [
		[0, 1, 2],
		[0, 1, 2],
		[0, 1, 0],
	]

est une matrice gagnante pour le joueur 1

On a alors : `matrice[0][1] === player1 && matrice[1][1] === player1 && matrice[2][1] === player1`

Soit quelque chose comme : 
	
	let matrice = [
		[0, 1, 2],
		[0, 1, 2],
		[0, 1, 0],
	]	
	let player1 = 1;
	let player2 = 2;
	let players = [ player1, player2 ];

	// Pour chaque joueur
	for( let playerIndex in players ) {

		// On vérifie s'il a gagné dans une des colonnes
		if( 
			( matrice[0][0] === players[ playerIndex ] && matrice[1][0] === players[ playerIndex ] && matrice[2][0] === players[ playerIndex ] ) ||
			( matrice[0][1] === players[ playerIndex ] && matrice[1][1] === players[ playerIndex ] && matrice[2][1] === players[ playerIndex ] ) ||
			( matrice[0][2] === players[ playerIndex ] && matrice[1][2] === players[ playerIndex ] && matrice[2][2] === players[ playerIndex ] )
		) {
			// C'est gagné pour players[ playerIndex ] dans une des 3 colonnes...
			// Faire gagner le joueur players[ playerIndex ]
			let winerTxt = `C'est gagné joueur ${players[ playerIndex ]} !`;
			console.log( winerTxt );
			break;
		}

		// Faire la même chose pour les trois lignes 

		// Faire la même chose pour les deux diagonales

	}

Ce dernier morceau de code (que vous pouvez raccourcir) vous permettra de savoir si un joueur a gagné par exemple...
