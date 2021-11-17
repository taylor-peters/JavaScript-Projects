var x = "where are you in the ", y = "world ";
var x = x.fontcolor("blue");
var y = y.fontcolor("green");

document.write(x + y);
window.alert(3 + 3);

function My_First_Function() { //Names function
    var str = "This text is green!";    //Defines variable as a specific string
    var result = str.fontcolor("green");    //Sets that defined string's font color
    document.getElementById("Green_Text").innerHTML = result;   //Places the result into the specific element
}

