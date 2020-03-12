// refer to question 4 before development starts for scope document

// add eventlistener to submit btn
document.getElementById("submitContact").addEventListener('click', validateForm);
// test value of input
var inputForm = document.querySelectorAll("input");


function validateForm(){
    // patterns to test input
    var namePattern = /^[a-zA-Z-]{1,20}$/;   
    var phonePattern = /^[\d]{3}[\-|\.|\ ][\d]{3}[\-|\.|\ ][\d]{4}$/;
    var emailPattern = /^[a-zA-Z0-9-._]+@+[a-zA-Z0-9-.]+[\.]+[a-zA-Z0-9]{2,6}$/;
    
   
    // errorMsg
    var fNameError = document.getElementById("firstNameError").innerHTML;
    var lNameError = document.getElementById("lastNameError").innerHTML;
    var phoneError = document.getElementById("phoneError").innerHTML;
    var emailError = document.getElementById("emailError").innerHTML;
    
    // inputFields
    var firstName = inputForm.item(0);
    var lastName = inputForm.item(1);
    var phoneNumber = inputForm.item(2);
    var emailAddress = inputForm.item(3);
    
    if(!firstName.value.match(namePattern)){
        firstName.value = "";
        firstName.setAttribute("placeholder", fNameError);
    }
    
    if(!lastName.value.match(namePattern)){
        lastName.value = "";
        lastName.setAttribute("placeholder", lNameError);     
    }
  
    if(!phoneNumber.value.match(phonePattern)){
        phoneNumber.value = "";
        phoneNumber.setAttribute("placeholder", phoneError);    
    }
    
    if(!emailAddress.value.match(emailPattern)){
        emailAddress.value = "";
        emailAddress.setAttribute("placeholder", emailError);   
    }
    
    
}

