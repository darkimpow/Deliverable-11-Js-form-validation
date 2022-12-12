//validate upper case letters
function checkUC() {

    let uppercasepattern=/[A-Z]/g;


    // recive password from the input feild
    let pswvalue = document.getElementById(psw).value;

    ////verify password has an uppercase letter
    let answerUC = uppercasepattern.test(pswvalue)
    
    //display if password has a uppercase letter    
    document.getElementById('capital').innerHTML = answerUC;
}