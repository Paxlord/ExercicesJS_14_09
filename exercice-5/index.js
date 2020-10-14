var regexNameSurname = /([A-Za-z])+/g;
var regexAddress = /^[1-9]+([ A-Za-z.']){2,}$/g;
var regexEmail = /^[1-9a-zA-z]+@[a-z]+[.][a-z]+/g;
var regexPassword = /([a-zA-Z1-9]){8,}/



/**
 * Function
 * fonction qui s'occupe de valider le formulaire à l'aide des regexs définis plus haut
 * @param {Event} evt
 */
function validateForm(evt){

    evt.preventDefault();

    var surname = document.forms['form']['surname'].value;

    if(surname == '' || !regexNameSurname.test(surname)){
        document.getElementById("surnameError").className = "doDisplay";;
    }else{
        document.getElementById("nameError").className = "doNotDisplay";
    }

    var name = document.forms['form']['name'].value;

    if(name == '' || !regexNameSurname.test(name)){
        document.getElementById("nameError").className = "doDisplay";
    }else{
        document.getElementById("nameError").className = "doNotDisplay";
    }

    var address = document.forms['form']['address'].value;

    if(address == '' || !regexAddress.test(address)){
        document.getElementById("addressError").className = "doDisplay";
    }else{
        document.getElementById("addressError").className = "doNotDisplay";
    }


    var email = document.forms['form']['email'].value;

    if(email == '' || !regexEmail.test(email)){
        document.getElementById("emailError").className = "doDisplay";
    }else{
        document.getElementById("emailError").className = "doNotDisplay";
    }


    var password = document.forms['form']['password'].value;

    if(password == '' || !regexNameSurname.test(password)){
        document.getElementById("passwordError").className = "doDisplay";
    }else{
        document.getElementById("passwordError").className = "doNotDisplay";
    }



}

var form = document.getElementsByName("form")[0];
form.addEventListener("submit", validateForm);