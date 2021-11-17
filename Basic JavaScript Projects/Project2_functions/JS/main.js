function doTheThing() {
    var x = "Taylor"
    var y = "Peters"
    result = (x + " " + y); //adds space between strings
    document.getElementById("Thing_One").innerHTML = result;  //replaces the content of the HTML element Thing One
}

function theOtherThing() {
    var str = "I am learning";
    str += " a lot from this book!";    //concatenates str with a new string
    document.getElementById("Thing_Two").innerHTML = str;
}