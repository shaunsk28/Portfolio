var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error') ;
var messageError = document.getElementById('message-error') ;
var submitError = document.getElementById('submit-error') ;

function validateName(){
    var dname=document.getElementById('contact-name').value;
    if(dname.length==0){
        nameError.innerHTML='Name is Required';
        return false;
    }
    if(!dname.match(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/)){
        nameError.innerHTML='Write full name';
        return false;
    }else{
    
    return true;}
}
function validateEmail(){
    var demail=document.getElementById('contact-email').value;
    if(demail.length==0){
        emailError.innerHTML = 'Email is Required'
        return false;
    }
    if(!demail.match(/^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)){
        emailError.innerHTML = ' Invalid Email'
        return false;
    }
    
    return true;
}
function validateMessage(){
    var message=document.getElementById('contact-message').value;
    var required=30;
    var left=required-message.length;
    if(left>0){
        messageError.innerHTML = left +'add more characters' 
        return false; 
    }
    
    return true;
    

}
function validateForm(){
    if( !validateName()|| !validateEmail()|| !validateMessage()){
        submitError.style.display='block';
        submitError.innerHTML='Please fix Error to submit';
        setTimeout(function(){submitError.style.display='none'},3000);
        return false;
    }

}
