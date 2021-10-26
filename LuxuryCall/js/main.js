const nav = document.querySelector("nav");
//Ejecutamos la función anónima cuando la ventana detecte un scroll positivo. Asignando al objeto nav una nueva clase.
window.addEventListener("scroll", function(){
	nav.classList.toggle("activeNavScroll", window.scrollY > 0)
})
const menu_btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
menu_btn.addEventListener("click",() => {
	menu.classList.toggle("activeMenu");
});

/*Carrusel de imágenes principal*/
let slideNum = 1;
Carousel(slideNum);
function Carousel(n){
 let slides = document.getElementsByClassName("image-container");
 if(n > slides.length){
	 slideNum = 1;
 }
 if(n < 1) {
	 slideNum = slides.length;
 }
 for(let i = 0; i < slides.length; i++){
	 slides[i].style.display = "none";
 }
 slides[slideNum - 1].style.display = "block";
}

function newSlide(n){
	Carousel(slideNum += n);
}

setInterval(function(){
	newSlide(1);
},8000);