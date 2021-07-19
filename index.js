"use strict";

function loadNav() {
    $("#nav-bar-container").load("components/navigation.html");
}
function loadFooter() {
    $("#footer-container").load("components/footer.html");
}

$(function() {
    loadNav();
    loadFooter();
});