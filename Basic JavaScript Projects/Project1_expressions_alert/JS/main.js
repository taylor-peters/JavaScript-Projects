function winAlert() {
    window.alert("Window Alert");
}

function concVar() {
    var x = "Variable 1", y = "Variable 2";
    result = (x + " " + y);
    document.getElementById("Conc").innerHTML = result;
}

function fontColor() {
    var x = "Colored Text";
    result = x.fontcolor("Red")
    document.getElementById("Color").innerHTML = result;
}

function exp() {
    result = (3 * 9);
    document.getElementById("Expression").innerHTML = result;
}

function docWrite() {
    document.write("Document Write");
}

