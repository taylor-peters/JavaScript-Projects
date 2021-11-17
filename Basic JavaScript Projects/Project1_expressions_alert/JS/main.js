function winAlert() {
    window.alert("Window Alert");  //Executes a window alert.
}

function concVar() {
    var x = "Variable 1", y = "Variable 2";
    result = (x + " " + y);  //Concatenates variables and adds a space between them.
    document.getElementById("Conc").innerHTML = result;
}

function fontColor() {
    var x = "Colored Text";
    result = x.fontcolor("Red")  //Colors var x as red
    document.getElementById("Color").innerHTML = result;
}

function exp() {
    result = (3 * 9);  //Solves expression and sets result
    document.getElementById("Expression").innerHTML = result;
}

function docWrite() {
    document.write("Document Write");  //Writes to the screen
}

