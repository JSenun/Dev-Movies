let slideIndex = 1;
mostraSlides(slideIndex);


function passaSlides(n) {
    mostraSlides(slideIndex += n);
}

function mostraSlides(n) {
    let i;
    let slides = document.querySelectorAll(".posters");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}