// landing
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
// end landing 

// end shop 
let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');

for(let i=0; i<toggles.length; i++){
	toggles[i].addEventListener('click', ()=>{
		if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
			contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
			toggles[i].style.fontWeight = "bold";
			icons[i].classList.remove('fa-plus');
			icons[i].classList.add('fa-minus');
		}
		else{
			contentDiv[i].style.height = "0px";
			toggles[i].style.fontWeight = 500;
			icons[i].classList.remove('fa-minus');
			icons[i].classList.add('fa-plus');
		}

		for(let j=0; j<contentDiv.length; j++){
			if(j!==i){
				contentDiv[j].style.height = "0px";
				icons[j].classList.remove('fa-minus');
				icons[j].classList.add('fa-plus');
			}
		}
	});
}
// end shop 


// delivery
let deliveryBoy = document.querySelector(".delivery-boy")
window.addEventListener("scroll", function () {
	let value = window.scrollY;
	deliveryBoy.style.marginLeft = value * 0.005 + "px"
});
// end delivery 


// team
const carousel = document.querySelector(".carousel-team"),
firstImg = carousel.querySelectorAll(".prd")[0],
arrowIcons = document.querySelectorAll(".wrapper-team i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; 
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; 
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); 
    });
});

const autoSlideTeam = () => {
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); 
    let firstImgWidth = firstImg.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { 
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }

    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlideTeam();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);
// end team


// testimonials
let count = 1;
	function contentRotator() {
	$(`#container .testimonial-comment:nth-child(${count})`).fadeIn(2000, function () {
		if ($(this).is("#container .testimonial-comment:last-child")) {
			setTimeout(function () {
				$(`#container .testimonial-comment:nth-child(${count})`).fadeOut(2000, function() {
					count = 1;
					contentRotator(); 
				});  
			},3000);
		}
		else {
			setTimeout(function () {
				$(`#container .testimonial-comment:nth-child(${count})`).fadeOut(2000, function () {
					count ++
					contentRotator();  
				});  
			}, 3000);
		}
	});
	};
	contentRotator();
// testimonials