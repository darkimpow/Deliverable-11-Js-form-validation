var myinput= document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

 

// validate lowercase letters 
var lowerCaseLetters=/[a-z]/g;

if(myinput.value.match(lowerCaseLetters)){
    letter.classList.remove("invalid");
    letter.classList.add("valid");
} else{
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

// validate Uppercase letters 
var UpperCaseLetters=/[A-Z]/g;

if(myinput.value.match(UpperCaseLetters)){
    capital.classList.remove("invalid");
    capital.classList.add("valid");
} else{
    capital.classList.remove("valid");
    capital.classList.add("invalid");
}

//validate Numbers
var numbers=/[0-9]/g;

if(myinput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
} else{
    number.classList.remove("valid");
    number.classList.remove("invalid");
}

//validate Length
if(myinput.value.length >=8) {
    length.classList.remove("invalid");
    length.classList.add("invalid");
} else{
    length.classList.remove("valid");
    length.classList.add("invalid")
}
