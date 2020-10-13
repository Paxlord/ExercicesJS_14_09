function CheckPhoneNumber(phoneNumber){

    var regexPhoneNumber = /^0[761]([0-9]{2}){4}$/

    if(regexPhoneNumber.test(phoneNumber))
        return true;
    
    return false;

}

console.log("0785965845", CheckPhoneNumber("0785965845"));
console.log("0452859687", CheckPhoneNumber("0452859687"));
console.log("0152689545", CheckPhoneNumber("0152689545"));
console.log("0657482195", CheckPhoneNumber("0657482195"));
console.log("06574821959595", CheckPhoneNumber("06574821959595"));
console.log("065748", CheckPhoneNumber("065748"));