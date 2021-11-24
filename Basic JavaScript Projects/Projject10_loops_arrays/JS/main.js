
//Counting Function
function count1() {
    var digit = "";
    var x = 1;
    var value = document.getElementById("input1").value;
    while (x <= value.length) {
        digit += "<br>" + x;  //Increments digit, adds line break
        x++;
    }
    document.getElementById("chars").innerHTML = digit;
}

    var instruments = ["guitar", "songs", "bird", "flute"]
    var content = "";
    var y;
    instruments[4] = "piano"
    function for_Loop() {
        for (y = 0; y < instruments.length; y++) {  //Loops through list, printing content of each index
            if (instruments[y] === "bird") {
                continue;
            }
            content += instruments[y] + "<br>";
            document.getElementById("items").innerHTML = content;
        }
}

const Person = [    //Creates 'Person' object
    fName = "Taylor",
    mName = " Daniel",
    lName = " Peters",
    heigh = " 6'2",
    weight = " 225"

]

function constant_function() {
    document.getElementById("Constant").innerHTML = Person;  //Prints 'Person' values
}

function letvar_test() {    //Let vs. Variable exercise
    var x = 44;
    document.getElementById("letvar1").innerHTML = x; {
        let x = 100;
        document.getElementById("letvar2").innerHTML = x;
    }
    document.getElementById("letvar3").innerHTML = x;

}

let stick = {   //Let object function exercise
    brand: "Bauer ",
    model: "Hyperlite ",
    curve: "P28 ",
    height : function () {
        return this.brand + this.model;
    }
};
document.getElementById("stick1").innerHTML = stick.height();   //Calls function from within object

//While loop exercise
let i = 0;

while (i < 6) {
    if (i === 4) {      //Exits while loop when if condition is met
        break;
    }
    i = i + 1;
}

console.log(i);

let text = '';

for (let i = 0; i < 10; i++) {
    if (i === 4) {      //Skips interation of for loop if condition is met
        continue;
    }
    text = text + i;
}

console.log(text);




