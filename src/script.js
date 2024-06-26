(function () {
    "use strict"
    // STICKY HEADER ONSCROLL TOP
    const body = document.body;
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            body.classList.remove("scroll-up");
        }
        if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-up");
            body.classList.add("scroll-down");
        }
        if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-down");
            body.classList.add("scroll-up");
        }

        lastScroll = currentScroll;
    });
    // END STICKY HEADER ONSCROLL TOP

    // SIDEBAR ONCLICK 
    const toggleOpen = document.querySelector(".toggle-btn i");
    const toogleClose = document.querySelector(".toggle-cancel i");
    const sideNav = document.querySelector(".sidebar");
    const bodyScroll = document.querySelector("body");

    toggleOpen.addEventListener("click", () => {
        sideNav.style.top = "0";
        bodyScroll.style.overflow = "hidden";
    });
    toogleClose.addEventListener("click", () => {
        sideNav.style.top = "-100" + "%";
        bodyScroll.style.overflow = "auto";
    });
    // END SIDEBAR ONCLICK

    const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}
}())
