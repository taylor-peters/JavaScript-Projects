var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }       //Sends slideshow back to front
    if (n < 1) { slideIndex = slides.length }       //Sends slideshow to last slide
    for (i = 0; i < slides.length; i++) {       
        slides[i].style.display = "none";       //Turns off display for all images
    }
    for (i = 0; i < dots.length; i++) {     //Shows the correct number of dots
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";     //Sets initial image to be displayer
    dots[slideIndex - 1].className += " active";        //Changes dot in the array to active
}

function countdown() {
    var seconds = document.getElementById("seconds").value;     //takes starting value from user
    
    function tick() {
        seconds = seconds - 1;      //decrements time by 1
        timer.innerHTML = seconds;      //changes the timer paragraph to the new 'seconds' value
        var time = setTimeout(tick, 1000);      //sets a timer with the interval amount = 1s
        if (seconds == -1) {
            alert("Time's Up!");
            clearTimeout(time);     //cancels previously set timer
            timer.innerHTML = "";
        }
    }
    tick();
}