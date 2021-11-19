function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27, 33);       //removes all characters between 27 and 33
    var Section = Section.toUpperCase();        //convets slice to all upper case
    document.getElementById("Slice").innerHTML = Section;
}

function search_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = /[n]/g;       //searches for the first 'n', returns space of located 'n'
   document.getElementById("Search").innerHTML = Sentence.search(Section);
}

function number_String() {
    var x = 182;
    document.getElementById("NumToString").innerHTML = x.toString();        //converts 182 to string
}

function precision_Method() {
    var x = 1234.23524523532;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);     //returns var with digit max
    document.getElementById("Fixed").innerHTML = x.toFixed(10);     //returns var with digit min
    document.getElementById("Value").innerHTML = x.valueOf(10);     //returns entire number

}

function concatStrs() {
    var w = document.getElementById("input1").value;        //grabs input from user
    var x = document.getElementById("input2").value;
    var y = document.getElementById("input3").value;
    var z = document.getElementById("input4").value;
    document.getElementById("Sentence2").innerHTML = w.concat(" ", x, " ", y, " ", z);  //concatenates and add ' ' between each input
}
