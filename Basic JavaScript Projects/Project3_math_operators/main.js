function mathOperation() {
    var x = 50 + 5; // Performs addition
    x++;    // Increments sum
    document.getElementById("Math").innerHTML = x;  //Replaces Math content with sum
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
    var x = Math.round((Math.random() * 100));  //generates random number and rounds to nearest integer
    document.getElementById("Math5").innerHTML = x;
}

function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}