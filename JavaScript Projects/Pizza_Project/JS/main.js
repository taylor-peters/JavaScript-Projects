function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");

    //Iterates over all 'size' options looking for selection
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;  //when found, grabs the string value of that html element
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getTopping(runningTotal, text1);
};

//Calculates cost of both meat and vegetable selections, updating cost value and order description
function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];   //Creates empty array
    var toppingArray = document.getElementsByClassName("toppings"); //Creates array with all toppings

    //Loops through array, adds selected toppings values to array, updates the order desctription
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    //Counts array length to calculate topping cost, subtracts freebie
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);


    function getVegetable(runningTotal, text1) {
        var veggieTotal = 0;
        var selectedveggie = [];
        var veggieArray = document.getElementsByClassName("vegetables");
        for (var j = 0; j < veggieArray.length; j++) {
            if (veggieArray[j].checked) {
                selectedveggie.push(veggieArray[j].value);
                console.log("selected veggie item: (" + veggieArray[j].value + ")");
                text1 = text1 + veggieArray[j].value + "<br>";
            }
        }
        var veggieCount = selectedveggie.length;
        if (veggieCount > 1) {
            veggieTotal = (veggieCount - 1);
        } else {
            veggieTotal = 0;
        }
        runningTotal = (runningTotal + veggieTotal);

    
        console.log("total selected veggie items: " + veggieCount);
        console.log(veggieCount + " veggie - 1 free veggie = " + "$" + veggieTotal + ".00");
        console.log("veggie text1: " + text1);
        console.log("Purchase Total: " + "$" + runningTotal + ".00");

        //Prints order to screen
        document.getElementById("showText").innerHTML = text1;
        document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
    };
    getVegetable(runningTotal, text1)
};