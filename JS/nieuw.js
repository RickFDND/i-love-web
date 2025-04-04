
//ik wil dat het schaakstuk op een lege plek in het chessboard gezet kan worden dmv op die plek te klikken.


//krijn:
// Sla het schaakstuk waar ik op klikte op in een variabele
// Bepaal de mogelijke plekken (dit kan in eerste instantie een vaste plek zijn)
// Maak op die mogelijke plek(ken) een nieuwe, tijdelijke knop(pen) aan
// Zorg dat ik kan klikken op die nieuwe knop(pen)
// Als ik op die knop klik → verplaats het eerdere schaakstuk (uit die variabele) daar dan heen
// Verwijder de tijdelijke knoppen


//let clickedPiece = document.querySelectorAll('.piece') //ik wil dat alle schaakstukken geselecteerd worden
//let gridArea = document.querySelector('.chessboard')

  //  clickedPiece.addEventListener('click', function(){  //ik wil dat je op een schaakstuk kan klikken
    //    clickedPiece.style.gridArea = gridArea; //als er wordt geklikt veranderd de gridarea.
    //});

let selectedPiece = null;

document.querySelectorAll('.piece').forEach(piece => //alle piece classes geselecteerd
    piece.addEventListener('click', () => selectedPiece = piece) //alle piece classes een click event
);

document.querySelector('.chessboard').addEventListener('click', (event) => {  //chessboard geselecteerd. click event op chessboard
    if (!selectedPiece || !event.target.classList.contains('chessboard')) return; //check of er iets geselecteerd is, en of dit op chessboard was. zo niet dan dmv return geen uitvoering.

    let gridArea = a8 b8 c8 d8 e8 f8 g8 h8
                a7 b7 c7 d7 e7 f7 g7 h7
                a6 b6 c6 d6 e6 f6 g6 h6
                a5 b5 c5 d5 e5 f5 g5 h5
                a4 b4 c4 d4 e4 f4 g4 h4
                a3 b3 c3 d3 e3 f3 g3 h3
                a2 b2 c2 d2 e2 f2 g2 h2
                a1 b1 c1 d1 e1 f1 g1 h1;
            
                selectedPiece.style.gridArea = gridArea; //past de gridarea aan van het geklikte schaakstuk 
                selectedPiece = null; //zorgt ervoor dat dat het schaakstuk niet meer geselecteerd is. 

});
