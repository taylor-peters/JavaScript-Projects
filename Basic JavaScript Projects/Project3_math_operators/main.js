function mathOperation() {
    var x = 50 + 5;
    x++;
    document.getElementById("Math").innerHTML = x;
}

function mathOperation2() {
    var x = 50 - 5;
    x--;
    document.getElementById("Math2").innerHTML = x;
}

function mathOperation3() {
    var x = 50 * 5;
    document.getElementById("Math3").innerHTML = x;
}

function mathOperation4() {
    var x = 50 % 5;
    document.getElementById("Math4").innerHTML = x;
}

function mathOperation5() {
    var x = Math.round((Math.random() * 100));
    document.getElementById("Math5").innerHTML = x;
}