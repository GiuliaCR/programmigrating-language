document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navBar = document.getElementById("navbar");
    const navMenu = document.querySelector("#navbar ul");
    const content = document.getElementById("content");

    menuIcon.addEventListener("click", function () {
        navMenu.classList.toggle("show");
        navBar.classList.toggle("show");

        // Adjust content margin dynamically
        if (navMenu.classList.contains("show")) {
            content.style.marginTop = "300px"; // When menu expands
        } else {
            content.style.marginTop = "60px"; // When menu collapses
        }
    });
});
