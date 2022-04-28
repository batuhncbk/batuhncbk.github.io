const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const btn_insta = document.querySelector(".btn-instagram");
const btn_linked = document.querySelector(".btn-linkedin");

navToggle.addEventListener("click", function(){
    links.classList.toggle("show-links");
});

btn_insta.addEventListener("click", function() {
    window.open("https://www.instagram.com/batuhncbk/");
});

btn_linked.addEventListener("click", function() {
    window.open("https://linkedin.com/in/batuhncbk");
});