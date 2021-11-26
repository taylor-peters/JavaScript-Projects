function displayType(stick) {
    var stickType = stick.getAttribute("data-stick-type");
    alert("The " + stickType + " is made by " + stick.innerHTML);
}