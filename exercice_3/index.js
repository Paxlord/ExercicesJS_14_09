function MorpionXO(){

    this.player_1 = new Player(1,"X");
    this.player_2 = new Player(2, "O");

    this.sizeX = 3;
    this.sizeY = 3;

    this.currentPlayer = this.player_1;

    this.parentElement = document.getElementById('mainBody');

    this.gameOver = false;
    this.winner = null;

    this.Initialize();

}

function Player(id, char){

    this.id = id;
    this.char = char;
    this.points = 0;

}

function Cell(x, y, state){

    this.x = x;
    this.y = y;
    this.state = state;

}

function Lines(){
    this.numberOfPlayer1Char = 0;
    this.numberOfPlayer2Char = 0;
}

MorpionXO.prototype.Initialize = function(){

    var cells = [];
    var rows = [];
    var columns = [];

    for(var i = 0; i < this.sizeX; i++ ){
        for(var j = 0; j < this.sizeY; j ++){

            cells.push(new Cell(j, i, ""));

        }
    }

    for(var k= 0; k < this.sizeY; k ++){
        rows.push(new Lines());
    }

    for(var l= 0; l < this.sizeX; l ++){
        columns.push(new Lines());
    }

    this.rows = rows;
    this.columns = columns;
    this.diagonal = new Lines();
    this.inverseDiagonal = new Lines();
    this.cells = cells;
    this.turn = 1;
    this.filledCell=0;
    this.Draw(this.parentElement);
}


//Fonction qui s'occupe d'afficher le tableau en fonction des cells
MorpionXO.prototype.Draw = function(){

    //On vide l'element parent du tableau précédant à chaque appel
    if(!this.gameOver){
        this.parentElement.innerHTML = '';

        var table = document.createElement("table");

        for(var i = 0; i < this.sizeX; i++){

            var tr = document.createElement("tr");

            for(var j = 0; j < this.sizeY; j++){

                var cell = document.createElement("td");
                var cellText = document.createTextNode( this.cells[j + (i * this.sizeY)].state );

                cell.appendChild(cellText);
                cell.addEventListener("click", HandleClick);
                cell.index = j + (i * this.sizeY);

                tr.appendChild(cell);


            }

            table.appendChild(tr);


        }

        this.parentElement.appendChild(table);
    }else{
        this.parentElement.innerHTML = '';
        var winningMessage = document.createTextNode(this.winner.char + " à gagné la partie !");
        this.parentElement.appendChild(winningMessage);
    }

}

MorpionXO.prototype.Update = function(evt){
    
    var currentClickedIndex = parseInt(evt.currentTarget.index);

    var clickedXPos = this.cells[currentClickedIndex].x;
    var clickedYPos = this.cells[currentClickedIndex].y;

    console.table(this.cells[currentClickedIndex]);

    if(this.cells[currentClickedIndex].state === ''){

        this.cells[currentClickedIndex].state = this.currentPlayer.char;
        this.filledCell++;
        this.CountPlaced(clickedXPos, clickedYPos);
        this.CheckForWinner(clickedXPos, clickedYPos, this.currentPlayer.char);

        this.turn *= -1;

        if(this.turn === 1){
            this.currentPlayer = this.player_1;
        }else{
            this.currentPlayer = this.player_2;
        }

    }

    this.Draw();

}

MorpionXO.prototype.CountPlaced = function(xPos, yPos){

    if(this.currentPlayer.id === this.player_1.id){
        this.columns[xPos].numberOfPlayer1Char++;
        this.rows[yPos].numberOfPlayer1Char++;

        if(xPos === yPos){
            this.diagonal.numberOfPlayer1Char++;
        }

        if( xPos + yPos === this.sizeY -1 ){
            this.inverseDiagonal.numberOfPlayer1Char++;
        }
    }else{
        this.columns[xPos].numberOfPlayer2Char++;
        this.rows[yPos].numberOfPlayer2Char++;

        if(xPos === yPos){
            this.diagonal.numberOfPlayer2Char++;
        }

        if( xPos + yPos === this.sizeY-1){
            console.log("diagonaleInversé");
            this.inverseDiagonal.numberOfPlayer2Char++;
        }
    }

}

MorpionXO.prototype.CheckForWinner = function(x ,y){

    if(this.filledCell === this.sizeX * this.sizeY){
        console.log("La board est remplie, égalité. Recommencez");
        this.Initialize();
    }

    if(this.currentPlayer.id === this.player_1.id){
        if( this.columns[x].numberOfPlayer1Char === this.sizeX
            || this.rows[y].numberOfPlayer1Char === this.sizeX 
            || this.diagonal.numberOfPlayer1Char === this.sizeX 
            || this.inverseDiagonal.numberOfPlayer1Char === this.sizeX ){

                this.WinRoutine(this.player_1);

        }
    }else{
        if( this.columns[x].numberOfPlayer2Char === this.sizeX
            || this.rows[y].numberOfPlayer2Char === this.sizeX 
            || this.diagonal.numberOfPlayer2Char === this.sizeX 
            || this.inverseDiagonal.numberOfPlayer2Char === this.sizeX ){

                this.WinRoutine(this.player_2);

        }
    }

}

MorpionXO.prototype.WinRoutine = function(winningPlayer){

    winningPlayer.points ++;
    
    

    if(winningPlayer.points >= 3){
        this.parentElement.innerHTML = '';
        this.gameOver = true;
        this.winner = winningPlayer;
    }else{
        console.log(winningPlayer.id + "A gagné cette manche" + "   Points : " + winningPlayer.points);
        this.Initialize();
    }

}

var morpion = new MorpionXO();

function HandleClick(evt){
    morpion.Update(evt);
}
