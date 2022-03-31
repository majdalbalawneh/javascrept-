`use strict`;
	
function registration()
{

    let name= document.getElementById("Enter Name").value;
    let email= document.getElementById("Enter Email").value;
    let c_email= document.getElementById("Email-c").value;
    let lname= document.getElementById(" Last Name").value;
    let pwd= document.getElementById("Enter Password ").value;			
    let cpwd= document.getElementById("Confirm Password").value;
    
    //email id expression code
    let pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    let letters = /^[A-Za-z]+$/;
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    function submitBday() {
        let Date1 = "Your birthday is: ";
        let Bdate = document.getElementById('bday').value;
        let Bday = +new Date(Bdate);
        Date1 += Bdate + ". You are " + ~~ ((Date.now() - Bday) / (31557600000));
       let theBday = document.getElementById('resultBday');
        theBday.innerHTML = Date1;
    }

    
    if(name=='')
    {
        alert('Please enter your name');
    }
    else if(!letters.test(name))
    {
        alert('Name field required only alphabet characters');
    }
   
    else if(email=='')
    {
        alert('Please enter your user email id');
    }
    else if (!filter.test(email))
    {
        alert('Invalid email');

    }
    else if(c_email=='')
    {
        alert('Please enter your  c-email id');
    }
    else if (!filter.test(c_email))
    {
        alert('Invalid c-email');
        
    }
    else if(lname=='')
    {
        alert('Please enter the last name.');
    }
    else if(!letters.test(lname))
    {
        alert(' name field required only alphabet characters');
    }
    else if(pwd=='')
    {
        alert('Please enter Password');
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
           alert('Thank You ');
          
           window.location = "index.html"; 

    }
}
function clearFunc()
{
    document.getElementById("Enter Name").value="";
    document.getElementById("Enter Email").value="";
    document.getElementById(" Last Name").value="";
    document.getElementById("Email-c").value="";

    document.getElementById("Enter Password ").value="";
    document.getElementById("Confirm Password").value="";
}