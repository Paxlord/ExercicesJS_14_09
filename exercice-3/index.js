

/**
 * Object
 * Représente un jeu de Morpion
 * @constructor
 */
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


/**
 * Object
 * Représente un joueur
 * @constructor
 * @param {number} id
 * @param {string} char
 */
function Player(id, char){

    this.id = id;
    this.char = char;
    this.points = 0;

}

/**
 * Object
 * Représente une cellule du morpion
 * @param {number} x
 * @param {number} y
 * @param {string} state
 * @returns {any}
 */
function Cell(x, y, state){

    this.x = x;
    this.y = y;
    this.state = state;

}

/**
 * Object
 * Représente une ligne de la grille
 */
function Lines(){
    this.numberOfPlayer1Char = 0;
    this.numberOfPlayer2Char = 0;
}


/**
 * Method
 * Initialise l'état initial d'une grille de morpion
 */
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


/**
 * Method
 * Méthode qui s'occupe de dessiner la grille dans la DOM
 */
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

/**
 * Method
 * Méthode qui s'occupe de mettre à jour l'état du jeu en fonction de la case cliqué
 * @param {Event} evt
 */
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

/**
 * Method
 * Méthode qui s'occupe de compter le nombre de case occupé par chaque joueur
 * @param {number} xPos
 * @param {number} yPos
 */
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

/**
 * Method
 * Méthode qui s'occupe de regarder si un joueur à gagné une manche de morpion
 * @param {number} x
 * @param {number} y
 */
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

/**
 * Méthod
 * Méthode qui s'occupe de gérer si un joueur à gagné la partie ou la manche
 * @param {Player} winningPlayer
 * @returns {any}
 */
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



/**
 * Function
 * fonction qui est executé lors d'un click cellule
 * @param {Event} evt
 */
function HandleClick(evt){
    morpion.Update(evt);
}
