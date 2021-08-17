"use strict";

function loadNav() {
    $("#nav-bar-container").load("components/navigation.html");
}
function loadFooter() {
    $("#footer-container").load("components/footer.html");
}
function loadCarousel(){
    $("#carousel-container").load("components/article_carousel.html");
}

$(function() {
    loadNav();
    loadFooter();
    loadCarousel();
});