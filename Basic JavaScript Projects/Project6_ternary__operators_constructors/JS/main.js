function Ride_Function() {
    var Age, Can_vote;  //initializes variables
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young" : "You are old enough"; //ternary operator
    document.getElementById("Vote").innerHTML = Can_vote + " to vote."; //concatenates ternary operation
}

class Painting {    //VSC suggested this format for the class/constructor
    constructor(Artist, Medium, Year) {
        this.Art_Artist = Artist;
        this.Art_Medium = Medium;
        this.Art_Year = Year;
    }
}

var PokerDogs = new Painting("Cassius Marcellus Cooldidge", "Oil", 1910);
var FamerCouple = new Painting("Grant Wood", "Oil", 1930);
var MonaLisa = new Painting("Leonardo da Vinci", "Oil", 1506);
//creates three new 'paintings'

function myFunction() {
    document.getElementById("Get_Artist").innerHTML =  //replaces 'get_artist' content with the below stirng
    `"Dogs Playing Poker" is a ${PokerDogs.Art_Medium} painting done by ${PokerDogs.Art_Artist} in ${PokerDogs.Art_Year}`;
}

function count_Function() {
    var x = parseInt(document.getElementById("Input").value);   //grabs value from 'input', converts to int
    document.getElementById("Input").value = Count();
    function Count() {
        function Increment() {x = x + parseInt(document.getElementById("Input2").value);}   //adds 'input' value with 'input2' value
        Increment();
        return x;
    }
}

function checkNum() {
    var y = parseInt(document.getElementById("Input").value)    //grabs current value from 'input'
    var z = (y > 10 ? "Greater" : "Not Greater");   //compares value to 10
    document.getElementById("Checker").innerHTML = z;
}
