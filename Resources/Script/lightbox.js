// Initialize here and run showSlide() to give your lightbox a default state.

let slideIndex = 1;
showSlide1(slideIndex);
showSlide2(slideIndex);
showSlide3(slideIndex);
showSlide4(slideIndex);
showSlide5(slideIndex);
showSlide6(slideIndex);
showSlide7(slideIndex);
showSlide8(slideIndex);
showSlide9(slideIndex);


// You are providing the functionality for your clickable content, which is 
// your previews, dots, controls and the close button.

function openLightbox(id) {

	const lightbox1 = document.getElementById('Lightbox1');
	const lightbox2 = document.getElementById('Lightbox2');
 	const lightbox3 = document.getElementById('Lightbox3');
	const lightbox4 = document.getElementById('Lightbox4');
	const lightbox5 = document.getElementById('Lightbox5');
	const lightbox6 = document.getElementById('Lightbox6');
	const lightbox7 = document.getElementById('Lightbox7');
	const lightbox8 = document.getElementById('Lightbox8');
	const lightbox9 = document.getElementById('Lightbox9');

	var lb = id;

 	function opacityLightbox1 (){
		lightbox1.classList.remove("invisible");
		lightbox1.classList.add("toggle-opacity");
	};

	function opacityLightbox2 (){
		lightbox2.classList.remove("invisible");
		lightbox2.classList.add("toggle-opacity");
	};

	function opacityLightbox3 (){
		lightbox3.classList.remove("invisible");
		lightbox3.classList.add("toggle-opacity");
	};

	function opacityLightbox4 (){
		lightbox4.classList.remove("invisible");
		lightbox4.classList.add("toggle-opacity");
	};

	function opacityLightbox5 (){
		lightbox5.classList.remove("invisible");
		lightbox5.classList.add("toggle-opacity");
	};

	function opacityLightbox6 (){
		lightbox6.classList.remove("invisible");
		lightbox6.classList.add("toggle-opacity");
	};

	function opacityLightbox7 (){
		lightbox7.classList.remove("invisible");
		lightbox7.classList.add("toggle-opacity");
	};

	function opacityLightbox8 (){
		lightbox8.classList.remove("invisible");
		lightbox8.classList.add("toggle-opacity");
	};

	function opacityLightbox9 (){
		lightbox9.classList.remove("invisible");
		lightbox9.classList.add("toggle-opacity");
	};

 	if (lb == 1){
		lightbox1.style.display = 'flex';
		window.setTimeout(opacityLightbox1, 0);
	} else  if (lb == 2){
		lightbox2.style.display = 'flex';
		window.setTimeout(opacityLightbox2, 0);
	} else if (lb == 3){
		lightbox3.style.display = 'flex';
		window.setTimeout(opacityLightbox3, 0);
	} else if (lb == 4){
		lightbox4.style.display = 'flex';
		window.setTimeout(opacityLightbox4, 0);
	} else if (lb == 5){
		lightbox5.style.display = 'flex';
		window.setTimeout(opacityLightbox5, 0);
	} else if (lb == 6){
		lightbox6.style.display = 'flex';
		window.setTimeout(opacityLightbox6, 0);
	} else if (lb == 7){
		lightbox7.style.display = 'flex';
		window.setTimeout(opacityLightbox7, 0);
	} else if (lb == 8){
		lightbox8.style.display = 'flex';
		window.setTimeout(opacityLightbox8, 0);
	} else if (lb == 9){
		lightbox9.style.display = 'flex';
		window.setTimeout(opacityLightbox9, 0);
	};

	document.getElementById('darkened_body').classList.toggle("darken");
	document.getElementById('ind_cover_bg_image').classList.toggle("no_scroll");
};

function closeLightbox(id) {

	const lightbox1 = document.getElementById('Lightbox1');
	const lightbox2 = document.getElementById('Lightbox2');
 	const lightbox3 = document.getElementById('Lightbox3');
	const lightbox4 = document.getElementById('Lightbox4');
	const lightbox5 = document.getElementById('Lightbox5');
	const lightbox6 = document.getElementById('Lightbox6');
	const lightbox7 = document.getElementById('Lightbox7');
	const lightbox8 = document.getElementById('Lightbox8');
	const lightbox9 = document.getElementById('Lightbox9');

	var lb = id;

	function opacityLightbox1 (){
		lightbox1.style.display = 'none';
	};

	function opacityLightbox2 (){
		lightbox2.style.display = 'none';
	};

	function opacityLightbox3 (){
		lightbox3.style.display = 'none';
	};

	function opacityLightbox4 (){
		lightbox4.style.display = 'none';
	};

	function opacityLightbox5 (){
		lightbox5.style.display = 'none';
	};

	function opacityLightbox6 (){
		lightbox6.style.display = 'none';
	};

	function opacityLightbox7 (){
		lightbox7.style.display = 'none';
	};

	function opacityLightbox8 (){
		lightbox8.style.display = 'none';
	};

	function opacityLightbox9 (){
		lightbox9.style.display = 'none';
	};

	if (lb == 1){
		lightbox1.classList.add("invisible");
		lightbox1.classList.remove("toggle-opacity");
		window.setTimeout(opacityLightbox1, 300);
	} else  if (lb == 2){
		lightbox2.classList.add("invisible");
		lightbox2.classList.remove("toggle-opacity");
		window.setTimeout(opacityLightbox2, 300);
	} else if (lb == 3){
		lightbox3.classList.add("invisible");
		lightbox3.classList.remove("toggle-opacity");
		window.setTimeout(opacityLightbox3, 300);
	} else if (lb == 4){
		lightbox4.classList.add("invisible");
		lightbox4.classList.remove("toggle-opacity");
		window.setTimeout(opacityLightbox4, 300);
	} else if (lb == 5){
		lightbox5.classList.add("invisible");
		lightbox5.classList.remove("toggle-opacity");
		window.setTimeout(opacityLightbox5, 300);
	} else if (lb == 6){
		lightbox6.classList.add("invisible");
		lightbox6.classList.remove("toggle-opacity");
		window.setTimeout(opacityLightbox6, 300);
	} else if (lb == 7){
		lightbox7.classList.add("invisible");
		lightbox7.classList.remove("toggle-opacity");
		window.setTimeout(opacityLightbox7, 300);
	} else if (lb == 8){
		lightbox8.classList.add("invisible");
		lightbox8.classList.remove("toggle-opacity");
		window.setTimeout(opacityLightbox8, 300);
	} else if (lb == 9){
		lightbox9.classList.add("invisible");
		lightbox9.classList.remove("toggle-opacity");
		window.setTimeout(opacityLightbox9, 300);
	};

  document.getElementById('darkened_body').classList.toggle("darken");
  document.getElementById('ind_cover_bg_image').classList.toggle("no_scroll");
};

// Note that you are assigning new values here to our slidIndex.

  function changeSlide1(n, x) {
  showSlide1(slideIndex += n, x);
};

function changeSlide2(n, x) {
	showSlide2(slideIndex += n, x);
};

function changeSlide3(n, x) {
	showSlide3(slideIndex += n, x);
};

function changeSlide4(n, x) {
	showSlide4(slideIndex += n, x);
};

function changeSlide5(n, x) {
	showSlide5(slideIndex += n, x);
};

function changeSlide6(n, x) {
	showSlide6(slideIndex += n, x);
};

function changeSlide7(n, x) {
	showSlide7(slideIndex += n, x);
};

function changeSlide8(n, x) {
	showSlide8(slideIndex += n, x);
};

function changeSlide9(n, x) {
	showSlide9(slideIndex += n, x);
};

function toSlide1(n, x) {
  showSlide1(slideIndex = n, x);
};

function toSlide2(n, x) {
	showSlide2(slideIndex = n, x);
};

  function toSlide3(n, x) {
	showSlide3(slideIndex = n, x);
};

function toSlide4(n, x) {
	showSlide4(slideIndex = n, x);
};

function toSlide5(n, x) {
	showSlide5(slideIndex = n, x);
};

function toSlide6(n, x) {
	showSlide6(slideIndex = n, x);
};

function toSlide7(n, x) {
	showSlide7(slideIndex = n, x);
};

function toSlide8(n, x) {
	showSlide8(slideIndex = n, x);
};

function toSlide9(n, x) {
	showSlide9(slideIndex = n, x);
};

/* function totalSlides(x){
	showSlide(slideIndex = n, x);
}; */

// This is your logic for the light box. It will decide which slide to show 
// and which dot is active.

function showSlide1(n, x) {

var slideN = x;

const slides = document.getElementsByClassName("slide1");


  if (n > slideN) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slideN;
  };

	for (let i = 0; i < slideN; i++) {
		slides[i].style.display = "none";
	};

	slides[slideIndex - 1].style.display = 'flex';

};

function showSlide2(n, x) {

	var slideN = x;
	
	const slides = document.getElementsByClassName("slide2");
	
	
	  if (n > slideN) {
		slideIndex = 1;	
	  };
	  
	  if (n < 1) {
		slideIndex = slideN;
	  };
	
		for (let i = 0; i < slideN; i++) {
			slides[i].style.display = "none";
		};
	
		slides[slideIndex - 1].style.display = 'flex';
	
};

function showSlide3(n, x) {

	var slideN = x;
		
	const slides = document.getElementsByClassName("slide3");
		
		
	if (n > slideN) {
		slideIndex = 1;	
	};
		  
		  if (n < 1) {
			slideIndex = slideN;
		  };
		
			for (let i = 0; i < slideN; i++) {
				slides[i].style.display = "none";
			};
		
			slides[slideIndex - 1].style.display = 'flex';
		
};

function showSlide4(n, x) {

	var slideN = x;
				
	const slides = document.getElementsByClassName("slide4");
				
				
	if (n > slideN) {
		slideIndex = 1;	
	};
				  
	if (n < 1) {
		slideIndex = slideN;
	};
				
	for (let i = 0; i < slideN; i++) {
		slides[i].style.display = "none";
	};
				
	slides[slideIndex - 1].style.display = 'flex';
				
};

function showSlide5(n, x) {

	var slideN = x;
				
	const slides = document.getElementsByClassName("slide5");
				
				
	if (n > slideN) {
		slideIndex = 1;	
	};
				  
	if (n < 1) {
		slideIndex = slideN;
	};
				
	for (let i = 0; i < slideN; i++) {
		slides[i].style.display = "none";
	};
				
	slides[slideIndex - 1].style.display = 'flex';
				
};

function showSlide6(n, x) {

	var slideN = x;
				
	const slides = document.getElementsByClassName("slide6");
				
				
	if (n > slideN) {
		slideIndex = 1;	
	};
				  
	if (n < 1) {
		slideIndex = slideN;
	};
				
	for (let i = 0; i < slideN; i++) {
		slides[i].style.display = "none";
	};
				
	slides[slideIndex - 1].style.display = 'flex';
				
};

function showSlide7(n, x) {

	var slideN = x;
				
	const slides = document.getElementsByClassName("slide7");
				
				
	if (n > slideN) {
		slideIndex = 1;	
	};
				  
	if (n < 1) {
		slideIndex = slideN;
	};
				
	for (let i = 0; i < slideN; i++) {
		slides[i].style.display = "none";
	};
				
	slides[slideIndex - 1].style.display = 'flex';
				
};

function showSlide8(n, x) {

	var slideN = x;
				
	const slides = document.getElementsByClassName("slide8");
				
				
	if (n > slideN) {
		slideIndex = 1;	
	};
				  
	if (n < 1) {
		slideIndex = slideN;
	};
				
	for (let i = 0; i < slideN; i++) {
		slides[i].style.display = "none";
	};
				
	slides[slideIndex - 1].style.display = 'flex';
				
};

function showSlide9(n, x) {

	var slideN = x;
				
	const slides = document.getElementsByClassName("slide9");
				
				
	if (n > slideN) {
		slideIndex = 1;	
	};
				  
	if (n < 1) {
		slideIndex = slideN;
	};
				
	for (let i = 0; i < slideN; i++) {
		slides[i].style.display = "none";
	};
				
	slides[slideIndex - 1].style.display = 'flex';
				
};