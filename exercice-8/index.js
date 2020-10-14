/**
 * Object
 * objet qui décrit un bateau dans le jeu
 * @date 2020-10-14
 * @param {string} nom
 * @param {number} taille
 */
function Bateau(nom, taille){

    this.nom = nom;
    this.taille = taille;

}

var plateauDeJeu = 
[
[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
[0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 4, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

var bateauList = [
    new Bateau("Porte-Avions", 5),
    new Bateau("Croiseur", 4),
    new Bateau("Contre-torpilleur", 3),
    new Bateau("Torpilleurs", 2),
    new Bateau("Sous-marin", 1),
];

/**
 * Function
 * fonction qui retourne le nom du bateau en donnant sa taille à partir d'une liste
 * @param {Bateau[]} list
 * @param {number} taille
 * @returns {string}
 */
function GetNameFromTailleList(list, taille){
    for(var i = 0; i < list.length; i++){
        if(list[i].taille === taille){
            return list[i].nom;
        }
    }

    return "Bateau inconnu";
}

/**
 * Function
 * fonction qui retourne si le plateau de jeu est vide ou non
 * @returns {boolean}
 */
function CheckIfAllBoatsSank(){

    for(var i = 0; i < plateauDeJeu.length; i++){
        for(var j = 0; j < plateauDeJeu[i].length; j++){
            if(plateauDeJeu[i][j] !== 0){
                return false;
            }
        }
    }

    return true;
}


/**
 * Function
 * fonction qui retourne si un bateau en particulier à coulé totalement ou non
 * @date 2020-10-14
 * @param {number} boatSize
 * @returns {boolean}
 */
function CheckIfOneBoatSank(boatSize){

    for(var i = 0; i < plateauDeJeu.length; i++){
        for(var j = 0; j < plateauDeJeu[i].length; j++){
            if(plateauDeJeu[i][j] === boatSize){
                return false;
            }
        }
    }

    return true;

}

/**
 * Function
 * fonction qui s'occupe de génerer le plateau de jeu et de l'ajouter à la DOM
 */
function Draw_Board(){

    var table = document.createElement("table");

    for(var i = 0; i < plateauDeJeu.length; i++){

        var tr = document.createElement("tr");

        for(var j = 0; j < plateauDeJeu[i].length; j++){

            var cell = document.createElement("td");
            cell.x = i;
            cell.y = j;

            cell.addEventListener("click", HandleClick);
            tr.appendChild(cell);
        }

        table.appendChild(tr);

    }

    document.body.appendChild(table);

}

Draw_Board();

/**
 * Function
 * Eventhandler pour une cellule du tableau, réagit au click
 * @param {Event} evt
 */
function HandleClick(evt){

    var x = evt.target.x;
    var y = evt.target.y;

    if(plateauDeJeu[x][y] !== 0){

        var temp = plateauDeJeu[x][y];
        plateauDeJeu[x][y] = 0;
        evt.target.style.backgroundColor = 'red';

        if(CheckIfOneBoatSank(temp)){
            console.log("Vous avez coulé : ", GetNameFromTailleList(bateauList, temp));
        }

        if(CheckIfAllBoatsSank()){
            console.log("Vous avez gagné");
        }

    }else{

        evt.target.style.backgroundColor = 'blue';

    }

}