const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
var slider = document.getElementById("myRange");
var slidervalue = document.getElementById("sliderValue");

navToggle.addEventListener("click", function(){
    links.classList.toggle("show-links");
});

slidervalue.innerHTML = slider.value;

slider.oninput = function() {
  slidervalue.innerHTML = this.value;
}