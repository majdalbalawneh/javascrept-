`use strict`;
	
function registration()
{

    let pwd= document.getElementById("Enter Password ").value;			
    let cpwd= document.getElementById("Confirm Password").value;
    
    //email id expression code
    let pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    // let letters = /^[A-Za-z]+$/;
    // let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(pwd=='')
    {
        console.log("Please enter Password");
    }
    else if(cpwd=='')
    {
        alert('Enter Confirm Password');
    }
    else if(!pwd_expression.test(pwd))
    {
        alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    }
    else if(pwd != cpwd)
    {
        alert ('Password not Matched');
    }
    else if(document.getElementById("Confirm Password").value.length < 8)
    {
        alert ('Password minimum length is 8');
    }
    else if(document.getElementById("Confirm Password").value.length > 32)
    {
        alert ('Password max length is 32');
    }
    else
    {				                            
           alert('Thank You ');}}

           function clearFunc()
{
  

    document.getElementById("Enter Password ").value="";
    document.getElementById("Confirm Password").value="";
}
