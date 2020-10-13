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

drawBar.prototype.Draw_Bar = function(){

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

drawBar.prototype.Initialize_Bar = function(parentElement){

    this.Draw_Bar();

    parentElement.appendChild(this.non_colored_part);
    parentElement.appendChild(this.colored_part);
}

drawBar.prototype.Update_nbr = function(nbr){

    this.nbr = nbr;

}

var loading = new drawBar(100, 95);
var body = document.getElementById("loadingContainer");
loading.Initialize_Bar(body);

var slider = document.getElementById("mainSlider");

slider.onchange = function(){

    loading.Update_nbr(this.value);
    loading.Draw_Bar();

}

