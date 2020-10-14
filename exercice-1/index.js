
/**
 * Function
 * Fonction qui retourne un integer aléatoire entre un minimum et un maximum
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRandomInteger(min , max){

    return Math.floor(Math.random() * (max - min) + min);

}

/**
 * Function
 * Fonction qui génère une table html de taille spécifié et qui attribue à chaque Cellule une couleur différente
 * @param {number} xAxis
 * @param {number} yAxis
 */
function gridGenerator(xAxis, yAxis){

    var body = document.getElementById("mainBody");

    //On clear le tableau précédent avant d'en créer un nouveau.
    body.innerHTML = '';

    var table = document.createElement("table");

    for(var i = 0; i < xAxis; i++){

        var tr = document.createElement("tr");

        for(var j = 0; j < yAxis; j++){

            var r = getRandomInteger(0,255);
            var g = getRandomInteger(0,255);
            var b = getRandomInteger(0,255);

            var colorAttribute = "rgb("+r+","+g+","+b+")";

            var cell = document.createElement("td");
            cell.style.backgroundColor = colorAttribute;

            tr.appendChild(cell);

        }

        table.appendChild(tr);
    }

    body.appendChild(table);

}

//on la démarre une première fois avant de lancer l'intervalle
gridGenerator(10,10);
setInterval(function(){gridGenerator(10,10)}, getRandomInteger(1000, 2000));