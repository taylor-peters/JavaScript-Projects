function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function my_Function() {
    document.getElementById("Test").innerHTML = 0 / 0;
}
function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN("test");
}
function my_Function3() {
    document.getElementById("Test3").innerHTML = isNaN(7);
}
function my_Function4() {
    document.getElementById("Test4").innerHTML = 2E310;
}
function my_Function5() {
    document.getElementById("Test5").innerHTML = -2E310;
}



