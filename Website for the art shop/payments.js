function placeOrder(){
    var formName = document.getElementsByClassName("inputBox").value;
    var formEmail = document.getElementsByClassName("inputBox").value;
    var formadress = document.getElementsByClassName("inputBox").value;
    var formcity = document.getElementsByClassName("inputBox").value;
    var formstate = document.getElementsByClassName("inputBox").value;
    var formzipcode = document.getElementsByClassName("inputBox").value;
    var formnameoncard = document.getElementsByClassName("inputBox").value;
    var formexpmonth = document.getElementsByClassName("inputBox").value;
    var forexpyear = document.getElementsByClassName("inputBox").value;
    var formCVV = document.getElementsByClassName("inputBox").value;

    if (formName == "") {
        alert("Please enter your name.");
    } else if (formEmail == "") {
        alert("Please enter your email.");
    } else if (formadress == "") {
        alert("Please enter address.");
    } else if (formcity == "") {
        alert("Please enter the city name.");
    } else if (formstate == "") {
        alert("Please enter state.");
    } else if (formzipcode == "") {
        alert("Please enter zipcode.");
    } else if (formnameoncard == "") {
        alert("Please enter name on card.");
    } else if (formexpmonth == "") {
        alert("Please enter expire month.");
    } else if (forexpyear == "") {
        alert("Please enter expire year.");
    } else if (formCVV == "") {
        alert("Please enter cvv.");
    } else {
        alert("Your order has been placed successfully!!!\n" + "\nThank you!");
    }
    
}