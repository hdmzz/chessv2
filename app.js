//recuperer le gameboard
const gameboard = document.getElementById('gameboard');
const playerDisplay = document.getElementById('player');
const infoDisplay = document.getElementById('info-display');

const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook,
];

//pour chaque pieces du tableau on creer une div square et on lui ajoute la piece correspondante
function createGameboard() {
    startPieces.forEach((piece, index) => {
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerHTML = piece;//insertion de la string contenant une div contenant le svg des pices ou bien rien sur la case doit etre vide
        //square devra etre identifiable par son index
        square.setAttribute('square-id', index);
       //recuperer le numero de la ligne a partir de l'index on sait que la ligne fait 8 cases et qu'il y a 8 ligne mais l'index des cases commance par 0
        const row = Math.floor((63 - index) / 8) + 1;

        //pas besoin de faire des if/else pour la couleur des cases suffit juste de de verif si index plus le numero de la ligne est pair ou impair
        square.classList.add((index + row) % 2 === 0 ? 'dark' : 'light');
        
        gameboard.append(square);

        //il faut soccuper de la couleur des svg des pieces
        //pour chaque element situe sur les 15 premier
        if (index < 16) {
            square.firstChild.firstChild.setAttribute('fill', 'pink');
        }
    });
}

createGameboard();
