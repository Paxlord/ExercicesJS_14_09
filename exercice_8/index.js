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

function Bateau(nom, taille){

    this.nom = nom;
    this.taille = taille;

}

var bateauList = [
    new Bateau("Porte-Avions", 5),
    new Bateau("Croiseur", 4),
    new Bateau("Contre-torpilleur", 3),
    new Bateau("Torpilleurs", 2),
    new Bateau("Sous-marin", 1),
];

function GetNameFromTailleList(list, taille){
    for(var i = 0; i < list.length; i++){
        if(list[i].taille === taille){
            return list[i].nom;
        }
    }

    return "Bateau inconnu";
}

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