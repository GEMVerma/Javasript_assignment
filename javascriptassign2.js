var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var mobilenoError = document.getElementById('mobileno-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('-name').value;
    if(name.length == 0){
        nameError.innerHTML = "Name is required"
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)){
        nameError.innerHTML = "write full name";
        return false;
    }
    nameError.innerHTML = 'valid';
    return true;
}

function validateEmail(){
    var email = document.getElementById('-email').value ;
    if(email.length == 0){
        emailError.innerHTML = "email is required" ;
        return false;
    }
    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'email is invalid' ;
        return false ;
    }
}

function validateMobileno(){
    var mobileno = document.getElementById('-mobileno').value ;
    if(mobileno.length == 0){
        mobilenoError.innerHTML = 'phone no should be 10 digits' ;
        return false ;
    } 
    if(mobileno.length != 10){
        mobilenoError.innerHTML = 'phone no should be 10 digits' ;
        return false ;
    } 
    if(!mobileno.match(/^[0-9]{10}$/)){
        mobilenoError.innerHTML = 'only digits please';
        return false;
    }
}function validateForm(){
    if(!validateName() || !validateEmail() || validateMobileno()){
        submitError.innerHTML = 'please fix error to submit' ;
        return false ;
    }
}