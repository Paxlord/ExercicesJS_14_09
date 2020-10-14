
/**
 * Function
 * Fonction qui récupère une map monde en SVG et qui l'affiche à la DOM et qui ajoute un EventListener sur tout les path du svg
 */
function renderWorldMap(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', 'https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg', false);
    xmlhttp.send();

    var svg = xmlhttp.responseXML.getElementsByTagName('svg')[0];
    document.body.prepend(svg);

    var allPaths = document.getElementsByTagName('path');

    console.log(allPaths);

    for(var i = 0; i < allPaths.length; i++){
        allPaths[i].addEventListener("mouseenter", HandleMouseEnter);
        allPaths[i].addEventListener("mouseleave", HandleMouseLeave);
        allPaths[i].addEventListener("click", HandleClick);
    }
}

renderWorldMap();



/**
 * Function
 * Event Handler quand la souris entre dans un pays
 * @param {Event} evt
 */
function HandleMouseEnter(evt){
    evt.target.style.fill = "blue";
}

/**
 * Function
 * Event Handler quand la souris sors dans un pays
 * @param {Event} evt
 */
function HandleMouseLeave(evt){
    evt.target.style.fill = "black";
}

/**
 * Function
 * Event Handler quand la souris clic sur un pays
 * @param {Event} evt
 */
function HandleClick(evt){
    evt.target.style.fill = "red";
    var legend = document.getElementById("legend");
    legend.textContent = "Pays : " + evt.target.id; 
}