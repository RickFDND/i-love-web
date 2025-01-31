let selectedPiece = null;

document.querySelectorAll('.piece').forEach(piece => //alle piece classes geselecteerd
    piece.addEventListener('click', () => selectedPiece = piece) //alle piece classes een click event
);

document.querySelector('.chessboard').addEventListener('click', (event) => {  //chessboard geselecteerd. click event op chessboard
    if (!selectedPiece || !event.target.classList.contains('chessboard')) return; //check of er iets geselecteerd is, en of dit op chessboard was. zo niet dan dmv return geen uitvoering.

    let x = Math.floor(event.offsetX / (event.target.clientWidth / 8)); //berekent de horizontale coordinatie van de klik dus de X
    let y = Math.floor(event.offsetY / (event.target.clientHeight / 8)); //bereent de verticale coordinatie van de klik dus de y 
    let gridArea = `${'abcdefgh'[x]}${8 - y}`; //x staat gelijk aan abcdefgh en de y aan 1 tm 8. dus berekent hier 8-y(het punt van klikken).

    selectedPiece.style.gridArea = gridArea; //past de gridarea aan van het geklikte schaakstuk 
    selectedPiece = null; //zorgt ervoor dat dat het schaakstuk niet meer geselecteerd is. 
});

//ik wil dat alle schaakstukken geselecteerd worden
//ik wil dat je op een schaakstuk kan klikken
//ik wil dat het schaakstuk op een lege plek in het chessboard gezet kan worden dmv op die plek te klikken.


//krijn:
// Sla het schaakstuk waar ik op klikte op in een variabele
// Bepaal de mogelijke plekken (dit kan in eerste instantie een vaste plek zijn)
// Maak op die mogelijke plek(ken) een nieuwe, tijdelijke knop(pen) aan
// Zorg dat ik kan klikken op die nieuwe knop(pen)
// Als ik op die knop klik → verplaats het eerdere schaakstuk (uit die variabele) daar dan heen
// Verwijder de tijdelijke knoppen

