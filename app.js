function checkUC() {
    let uppercasepattern=/[A-Z]/g;
    let pswvalue = document.getElementById('psw').value ;
    let answerUC = uppercasepattern.test(pswvalue) ;
// your password contains a uppercase letter 
    if(answerUC=== true) {
        document.getElementById('capital').innerHTML="Your password has a lowercase letter";
        document.getElementById ('capital').style.fontWeight = "bold"
        document.getElementById('capital').className="bg-green-500"
    }
    //if password is not containing a Uppercase letter 
    else{
        document.getElementById('capital').innerHTML="you are missing a Uppercase letter";
        document.getElementById ('capital').style.fontWeight = "bold"
        document.getElementById('capital').className="bg-red-500"
    }
}
function checkLC() {
    let lowercasepattern=/[a-z]/g;
    let pswvalue = document.getElementById('psw').value ;
    let answerLC = lowercasepattern.test(pswvalue) ;
    
    // if password contains a lowercase letter
if(answerLC=== true) {
        document.getElementById('messageLC').innerHTML="Your password has a lowercase letter";
        document.getElementById ('messageLC').style.fontWeight = "bold"
        document.getElementById('messageLC').className="bg-green-500"
    }
    //if password is not containing a lowercase letter 
    else{
        document.getElementById('messageLC').innerHTML="you are missing a lowercase letter";
        document.getElementById ('messageLC').style.fontWeight = "bold"
        document.getElementById('messageLC').className="bg-red-500"
    }
}
function checkNB() {
    let numberpattern=/[0-9]/g;
    let pswvalue = document.getElementById('psw').value ;
    let answerNB = numberpattern.test(pswvalue) ;

    // if password contains a number
if(answerNB=== true) {
        document.getElementById('messageNB').innerHTML="Your password has a number";
        document.getElementById ('messageNB').style.fontWeight = "bold"
        document.getElementById('messageNB').className="bg-green-500"
    }
    //if password does not contain a number
    else{
        document.getElementById('messageNB').innerHTML="you are missing a number";
        document.getElementById ('messageNB').style.fontWeight = "bold"
        document.getElementById('messageNB').className="bg-red-500"
    }
}
function checkLen() {
    let pswvalue = document.getElementById('psw').value;
    if (pswvalue.length >= 8) {
    document.getElementById('messagelen').innerHTML="Good job your password is long enough" ;
    }
    else{
        document.getElementById('messagelen').innerHTML="Warning your password needs to be longer";
    }
}