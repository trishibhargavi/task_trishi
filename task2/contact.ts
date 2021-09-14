
function validation()
{

  let name: string =document.forms["myform"]["name"].value;
  
  let phone: string =document.forms["myform"]["phone"].value;
  let email: string = document.forms["myform"]["email"].value;
  let message: string = document.forms["myform"]["message"].value;
  let value={};
  let check_status=true;




let contactDetails = document.getElementById("contactDetails");
  
  var error1 = document.getElementById("error");
  var error2 = document.getElementById("error");
  var error3 = document.getElementById("error");
  var error4 = document.getElementById("error");
  
  
let nameError =document.getElementById("nameError");
let phoneError =document.getElementById("phoneError");
let emailError =document.getElementById("mailError");
let messageError =document.getElementById("messageError");

if(name.length<5 || name==""||!(/^[A-z ]+$/.test(name)))
{
  check_status=false;
    contactDetails.setAttribute("style", "width:100%;display:inline-block;");
    error1.setAttribute("style", "display:block;")

    nameError.innerHTML="name should not be empty"
    nameError.setAttribute("style", "text-align:center;color:red;")
    document.forms["myform"]["name"].focus;
    return false;
  
}

if(phone.length!=10 || phone="")
{
  check_status=false;
  contactDetails?.setAttribute("style","width:100%;display:inline-block;")
  error2.setAttribute("style","display:block;")

  phoneError.innerHTML="enter 10 digit phonenumber";
  phoneError.setAttribute("style","text-align:center;color:red;")
  document.forms["myform"]["phone"].focus();
  return false;
}

if(email.indexOf("@")==-1 || email=="")
{
  check_status=false;
  contactDetails.setAtrribute("style","width:100%;display:inline-block;")
  error3.setAttribute("style","display:block;")

  emailError.innerHTML="some error mail";
  emailError.setAttribute("style","text-align:center;color:red;")
  document.forms["myform"]["email"].focus();
  return false;

}

if(message.length<200)
{
   check_status=false;

    contactDetails.setAttribute("style","width:100%;display:inline-block;")
    error4.setAttribute("style","display:block;")

    messageError.innerHTML="enter more than 200 characters";
    messageError.setAttribute("style","text-align:center;color:red;")
    document.forms["myform"]["email"].focus();
    return false;

}

if(check_status == true)
{
  value= {
    name:name,
    phone:phone,
    email:email,
    message:message,
  }

    alert(JSON.stringify(value))
}

}
