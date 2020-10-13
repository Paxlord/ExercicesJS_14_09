
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

function HandleMouseEnter(evt){
    evt.target.style.fill = "blue";
}

function HandleMouseLeave(evt){
    evt.target.style.fill = "black";
}

function HandleClick(evt){
    evt.target.style.fill = "red";
    var legend = document.getElementById("legend");
    legend.textContent = "Pays : " + evt.target.id; 
}