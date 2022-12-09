function validateform() {
    let x = document.forms["myform"]["fname"].value;
    if (x =="") {
        alert("name msut be filled out");
        return false;
    }
}

function verifypassword() {
    var psw = document.getElementById("psw").value;
    
}
function lowercase(){
    var letter = document.getElementById("letter").value;
}
function capital(){
    var capital= document.getElementById("capital").value;
}

function number(){
    var number= document.getElementById("number").value;
}

function length(){
    var length= document.getElementById("length").value;
}

var myinput= document.getElementById("psw")
var letter = document.getElementById("letter")
var capital = document.getElementById("capital")
var number = document.getElementById("number")
var length = document.getElementById("length")