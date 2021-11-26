let activePlayer = 'X';

let selectedSquares = [];

var xscore = 1;
var oscore = 1;

function placeXorO(squareNumber) {
    if (!selectedSquares.some(element => element.includes(squareNumber))) { //Runs if square is empty

        let select = document.getElementById(squareNumber);     //Grabs number

        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x_icon.png")';      //Adds corresponding icon to selected square
        } else {
            select.style.backgroundImage = 'url("images/o_icon.png")';
        }

        selectedSquares.push(squareNumber + activePlayer);      //Adds the players name to the square

        checkWinConditions();

        //Switches players
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }

        audio('./media/arrow.mp3');

        //Keeps user from going twice in a row, runs computers turn
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function (){ computersTurn(); }, 1000)
        }

        return true;
    }

    function computersTurn() {
        let success = false;
        let pickASquare;
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));        //Picks random square, checks if full, fills if empty
            if (placeXorO(pickASquare)) {
                placeXorO(pickASquare);
                success = true;
            };
        }
    }
}

//Added the functionality of a "scoreboard" that tracks each players wins
//Checks if any of the win conditions are met
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100), document.getElementById("x_score").innerHTML = xscore++; }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304), document.getElementById("x_score").innerHTML = "X's Score: " + xscore++;  }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508), document.getElementById("x_score").innerHTML = "X's Score: " + xscore++;  }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558), document.getElementById("x_score").innerHTML = "X's Score: " + xscore++;  }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558), document.getElementById("x_score").innerHTML = "X's Score: " + xscore++;  }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558), document.getElementById("x_score").innerHTML = "X's Score: " + xscore++;  }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90), document.getElementById("x_score").innerHTML = "X's Score: " + xscore++;  }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520), document.getElementById("x_score").innerHTML = "X's Score: " + xscore++;  }
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100), document.getElementById("o_score").innerHTML = "O's Score: " + oscore++;  }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304), document.getElementById("o_score").innerHTML = "O's Score: " + oscore++;  }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508), document.getElementById("o_score").innerHTML = "O's Score: " + oscore++;  }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558), document.getElementById("o_score").innerHTML = "O's Score: " + oscore++;  }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558), document.getElementById("o_score").innerHTML = "O's Score: " + oscore++;  }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558), document.getElementById("o_score").innerHTML = "O's Score: " + oscore++;  }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90), document.getElementById("o_score").innerHTML = "O's Score: " + oscore++;  }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520), document.getElementById("o_score").innerHTML = "O's Score: " + oscore++;  }
    
    else if (selectedSquares.length >= 9) {
        audio('./media/tie.mp3');
        setTimeout(function () { resetGame(); }, 1000);
    }

    //Ensures that the array has ALL of the win conditions in a logic statement
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)

        if (a === true && b === true && c === true) { return true }
    }
}

function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);   
}

function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//takes in the first and last coordinates of the winning line
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines')
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;


    function animateLineDrawing() {

        const animationLoop = requestAnimationFrame(animateLineDrawing);

        //draws a line on a clear rectangle that is the same size as the playing surface
        c.clearRect(0, 0, 608, 608)
        c.beginPath();
        c.moveTo(x1, y1)    //starts line at location, passed from the above function
        c.lineTo(x, y)
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, 0.8)';
        c.stroke();

        //Adjusts line dimensions based on specific win conditions
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }

        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }

    }
    //Clears the playing board and resets the game
    function clear() {

        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();

    audio('./media/winGame.mp3');
    
    animateLineDrawing();

    setTimeout(function () { clear(); resetGame(); }, 1000);
        
}

function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i))
        square.style.backgroundImage = ''
    }
    selectedSquares = [];
}
