<<<<<<< HEAD
function badfct() {
    x = "this is a bad function";
    document.getElementById("para1").innerHTML = x;
}

btrfct = () => document.getElementById("para2").innerHTML = "this is a better function";

function Stick_Function() {
    var Stick_Output;
    var Sticks = document.getElementById("Stick_Input").value;
    var Stick_String = " is a great stick";
    switch (Sticks) {
        case "Easton Synergy":
            Stick_Output = "Easton Synergy" + Stick_String;
            break;
        case "Bauer Vapor":
            Stick_Output = "Bauer Vapor" + Stick_String;
            break;
        case "CCM Trigger":
            Stick_Output = "CCM Trigger" + Stick_String;
            break;
    }
    document.getElementById("Output").innerHTML = Stick_Output;
}

function class_function() {
    var a = document.getElementsByClassName("para");
    a[0].innerHTML = "Changed";
    a[1].innerHTML = "Unchanged";
}

function draw() {
    var canvas = document.getElementById('canvas');
    var width = canvas.width;
    var height = canvas.height;
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var gradient = ctx.createLinearGradient(20, 0, 220, 0);
        gradient.addColorStop(0, 'green');
        gradient.addColorStop(.5, 'cyan');
        gradient.addColorStop(1, 'green');

        ctx.fillStyle = gradient;
        ctx.fillRect(25, 25, width/2, height/2);
        ctx.clearRect(45, 45, width / 2 - 20, height / 2 - 20);
        ctx.strokeRect(50, 50, width / 2 - 30, height / 2 - 30);
     
    }
}

function draw2() {
    var canvas = document.getElementById('canvas2');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
    }
}

function draw3() {
    var canvas = document.getElementById('canvas3');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 3; j++) {
                ctx.beginPath();
                var x = 25 + j * 50; // x coordinate
                var y = 25 + i * 50; // y coordinate
                var radius = 20; // Arc radius
                var startAngle = 0; // Starting point on circle
                var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
                var counterclockwise = i % 2 !== 0; // clockwise or counterclockwise

                ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

                if (i > 1) {
                    ctx.fill();
                } else {
                    ctx.stroke();
                }
            }
        }
    }
=======
function badfct() {
    x = "this is a bad function";
    document.getElementById("para1").innerHTML = x;
}

btrfct = () => document.getElementById("para2").innerHTML = "this is a better function";

function Stick_Function() {
    var Stick_Output;
    var Sticks = document.getElementById("Stick_Input").value;
    var Stick_String = " is a great stick";
    switch (Sticks) {
        case "Easton Synergy":
            Stick_Output = "Easton Synergy" + Stick_String;
            break;
        case "Bauer Vapor":
            Stick_Output = "Bauer Vapor" + Stick_String;
            break;
        case "CCM Trigger":
            Stick_Output = "CCM Trigger" + Stick_String;
            break;
    }
    document.getElementById("Output").innerHTML = Stick_Output;
}

function class_function() {
    var a = document.getElementsByClassName("para");
    a[0].innerHTML = "Changed";
    a[1].innerHTML = "Unchanged";
}

function draw() {
    var canvas = document.getElementById('canvas');
    var width = canvas.width;
    var height = canvas.height;
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var gradient = ctx.createLinearGradient(20, 0, 220, 0);
        gradient.addColorStop(0, 'green');
        gradient.addColorStop(.5, 'cyan');
        gradient.addColorStop(1, 'green');

        ctx.fillStyle = gradient;
        ctx.fillRect(25, 25, width/2, height/2);
        ctx.clearRect(45, 45, width / 2 - 20, height / 2 - 20);
        ctx.strokeRect(50, 50, width / 2 - 30, height / 2 - 30);
     
    }
}

function draw2() {
    var canvas = document.getElementById('canvas2');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
    }
}

function draw3() {
    var canvas = document.getElementById('canvas3');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 3; j++) {
                ctx.beginPath();
                var x = 25 + j * 50; // x coordinate
                var y = 25 + i * 50; // y coordinate
                var radius = 20; // Arc radius
                var startAngle = 0; // Starting point on circle
                var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
                var counterclockwise = i % 2 !== 0; // clockwise or counterclockwise

                ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

                if (i > 1) {
                    ctx.fill();
                } else {
                    ctx.stroke();
                }
            }
        }
    }
>>>>>>> 2dd7613fa1f04c2c47b7a1f68c800a0907d9734e
}