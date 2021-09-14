function validation() {
    var name = document.forms["myform"]["name"].value;
    var phone = document.forms["myform"]["phone"].value;
    var email = document.forms["myform"]["email"].value;
    var message = document.forms["myform"]["message"].value;
    var error_message = document.getElementById("error_message");
    var text;
    if (name == "" || (!(/^[A-z ]+$/.test(name)))) {
        text = "enter valid name";
        error_message.innerHTML = text;
        return false;
    }
    if (phone.length != 10 || phone == "") {
        text = "enter valid phonenumber";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email == "") {
        text = "enter valid email";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length > 200 || message == "") {
        text = "enter more than 200 characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("form submitted");
    return true;
}
