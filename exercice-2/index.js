/**
 * Object
 * représente une barre de chargement
 * @constructor
 * @param {number} sum
 * @param {number} nbr
 */
function drawBar(sum, nbr){

    this.sum = sum;
    this.nbr = nbr;

    this.colored_part = document.createElement('div');
    this.non_colored_part = document.createElement('div');

    this.colored_part.style.height = '50px';
    this.non_colored_part.style.height = '50px';

    this.colored_part.style.backgroundColor = 'red';
    this.non_colored_part.style.backgroundColor = 'grey';

    this.colored_part.style.position = 'relative';
    this.non_colored_part.style.position = 'relative';

    this.colored_part.style.float = 'left';
    this.non_colored_part.style.float = 'right';

}

/**
 * Method
 * Méthode qui s'occupe d'attribuer les tailles au parties de la barre
 */
drawBar.prototype.Set_Size = function(){

    if(this.nbr > this.sum){
        this.nbr = 100;
    }

    if(this.nbr <= 0){
        this.nbr = 1;
    }

    var proportion = this.nbr/this.sum;
    var proportionTo100 = Math.floor(proportion * 100);

    this.non_colored_part.style.width = 100-proportionTo100 + "%";
    this.colored_part.style.width = proportionTo100 + "%";

}



/**
 * Method
 * Méthode qui s'occupe d'ajouter la barre de chargement à la DOM
 * @param {HTMLAnchorElement} parentElement
 */
drawBar.prototype.Initialize_Bar = function(parentElement){

    this.Set_Size();

    parentElement.appendChild(this.non_colored_part);
    parentElement.appendChild(this.colored_part);
}

var loading = new drawBar(100, 95);
var body = document.getElementById("loadingContainer");
loading.Initialize_Bar(body);

