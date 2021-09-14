function validation()
{
    let name=document.forms["myform"]["name"].value;
  
  let phone=document.forms["myform"]["phone"].value;
  let email= document.forms["myform"]["email"].value;
  let message= document.forms["myform"]["message"].value;
  let error_message=document.getElementById("error_message");
  let text;


if( name=="" || (!(/^[A-z ]+$/.test(name))))
{
    text="enter valid name";
    error_message.innerHTML=text;
    return false;
    
}


if(phone.length !=10 || phone=="")
{
    text="enter valid phonenumber";
    error_message.innerHTML=text;
     return false;
}

if(email.indexOf("@")==-1 || email=="")
{
    text="enter valid email";
    error_message.innerHTML=text;
     return false;
}

if(message.length>200 || message=="")
{
    text="enter more than 200 characters";
    error_message.innerHTML=text;
    return false;
}

alert("form submitted")
return true;
}