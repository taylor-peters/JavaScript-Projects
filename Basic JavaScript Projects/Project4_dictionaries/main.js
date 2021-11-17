function my_Dictionary() {
    var Car = {
        Make: "Jeep",
        Model: 'Trailhawk',
        Year: "2015",
        Color: "Black",
    };
    delete Car.Color;  //Deletes 'Color' from dictionary
    document.getElementById("Dictionary").innerHTML = Car.Model;  //Replaces content in 'Dictionary' with the 'Car.Model'

}