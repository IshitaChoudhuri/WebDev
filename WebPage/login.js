function printError(elemId, HintMsg)
{
    document.getElementById(elemId).innerHTML=HintMsg;
}
var submit=document.getElementById("loginButton")
console.log(submit);
submit.onclick=function(){
    validateForm();
}
function validateForm(){
    var form=document.getElementById("myform");
    var username=form.username.value;
    var password=form.password.value;

var usernameErr=true;
var passwordErr=true;
//name validation
console.log(usernameErr,passwordErr);
if(username=="")
{
    printError("usernameErr","Please enter a username");
}
else if(username.length<5)
{
    printError("usernameErr","Username should be more than 5")
}
else{
    printError("usernameErr","")
    usernameErr=false;
    }
    
// password validation
if(password=="")
{
    printError("passwordErr","Please enter a password");
}
else if(password.length<5)
{
    printError("passwordErr","Password should be contain atleast 8 characters")
}
else{
    printError("passwordErr","")
    passwordErr=false;
    }

if((nameErr||passwordErr)==true)
{
    return false;
}
else
{
    var data="You've enter the following detail:" + "\n"+ "Username: "+"\n"+username+"\n"+"Password: "+"\n"+password;
    alert(data);
}
}