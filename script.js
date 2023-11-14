const menuToggle = document.getElementById("menuToggle");
const toggleButton = document.getElementById("toggleButton");
const mainArea = document.getElementById("main");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector("main");

toggleButton.addEventListener("click", function() {
    sidebar.classList.toggle("opened");
    main.classList.toggle("main");
    menuToggle.classList.toggle("fixed-menu");
});

mainArea.addEventListener("click", function() {
    sidebar.classList.remove("opened");
    main.classList.remove("main");
    menuToggle.classList.remove("fixed-menu");
});