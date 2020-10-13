function ComputeNote(array){

    var res = 0;

    for(var i = 0; i < array.length; i++){
        res += array[i];
    }

    return res/array.length;

}

console.log("Moyenne générale", ComputeNote([10, 13, 13, 12, 15, 12, 11, 16, 14]));