var x = 10;  //establish global variable

function firstFunction() {
    var y = 5;
    document.getElementById("first").innerHTML = y + x;  //adds local and global variables
}

function secondFunction() {
    document.getElementById("second").innerHTML = y + x;  //attempts to add globabl variable with private variable
}

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
        document.getElementById("holder").innerHTML = Date();  //printed date to ensure functionality 
    }
}

function thirdFunction() {  //compares local variable with if statement
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

function Time_function() {  //grabs current time, returns reply based on time of day
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