var x = 10;

function firstFunction() {
    var y = 5;
    document.getElementById("first").innerHTML = y + x;
}

function secondFunction() {
    document.getElementById("second").innerHTML = y + x;
}

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
        document.getElementById("holder").innerHTML = Date();
    }
}

function thirdFunction() {
    var y = 5;
    if (y == 5) {
        document.getElementById("third").innerHTML = "Same";
    }
    else { document.getElementById("third").innerHTML = "Not Same"; }
}

function fourthFunction() {
    var y = 6;
    if (y == 5) {
        document.getElementById("fourth").innerHTML = "Same";
    }
    else { document.getElementById("fourth").innerHTML = "Not Same"; }
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}