/**
 * Function
 * fonction qui s'occupe de validé si une string passé en paramètre est un palindrome ou non
 * @date 2020-10-14
 * @param {string} str
 */
function CheckPalindrome(str){

    var cleanedUpString = "";

    //On enlève tous les espaces
    for(var i = 0; i < str.length; i++){
        if(str[i] !== ' '){
            cleanedUpString += str[i];
        }
    }

    //On inverse la str
    var reversedStr = "";
    for(var i = cleanedUpString.length - 1; i >= 0; i--){
        reversedStr += cleanedUpString[i];
    }

    console.log("Original string : ",cleanedUpString);
    console.log("Inversed string : ", reversedStr);

    //On parcours les deux strings et si jamais ça ne match pas on return false
    for(var i = 0; i < cleanedUpString.length; i++){
        if(cleanedUpString[i] !== reversedStr[i]){
            return false;
        }
    }
    
    return true;
}

console.log(CheckPalindrome("test"));
console.log(CheckPalindrome("ete"));
console.log(CheckPalindrome("ceci est un palindrome"));
console.log(CheckPalindrome("my gym"));
console.log(CheckPalindrome("no lemon no melon"));