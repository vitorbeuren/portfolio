// Initialize here and run showSlide() to give your lightbox a default state.

let slideIndex = 1;
showSlide(slideIndex);


// You are providing the functionality for your clickable content, which is 
// your previews, dots, controls and the close button.

function openLightbox(id) {

	let lightbox1 = document.getElementById('Lightbox1');
	let lightbox2 = document.getElementById('Lightbox2');
	let lightbox3 = document.getElementById('Lightbox3');
	let lightbox4 = document.getElementById('Lightbox4');
	let lightbox5 = document.getElementById('Lightbox5');
	let lightbox6 = document.getElementById('Lightbox6');

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

	if (id=1){
		lightbox1.style.display = 'flex';
		window.setTimeout(opacityLightbox1, 0);
	} else if (id=2){
		lightbox2.style.display = 'flex';
		window.setTimeout(opacityLightbox2, 0);
	} else if (id=3){
		lightbox3.style.display = 'flex';
		window.setTimeout(opacityLightbox3, 0);
	} else if (id=4){
		lightbox4.style.display = 'flex';
		window.setTimeout(opacityLightbox4, 0);
	} else if (id=5){
		lightbox5.style.display = 'flex';
		window.setTimeout(opacityLightbox5, 0);
	} else if (id=6){
		lightbox6.style.display = 'flex';
		window.setTimeout(opacityLightbox6, 0);
	};

	document.getElementById('darkened_body').classList.toggle("darken");
	document.getElementById('ind_cover_bg_image').classList.toggle("no_scroll");
};

function closeLightbox(id) {

	let lightbox1 = document.getElementById('Lightbox1');
	let lightbox2 = document.getElementById('Lightbox2');
	let lightbox3 = document.getElementById('Lightbox3');
	let lightbox4 = document.getElementById('Lightbox4');
	let lightbox5 = document.getElementById('Lightbox5');
	let lightbox6 = document.getElementById('Lightbox6');

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

	if (id=1){
		lightbox1.classList.add("invisible");
		lightbox1.classList.remove("toggle-opacity");
		window.setTimeout(opacityLightbox1, 300);
	} else if (id=2){
		lightbox2.classList.add("invisible");
		lightbox2.classList.remove("toggle-opacity");
		window.setTimeout(opacityLightbox2, 300);
	} else if (id=3){
		lightbox3.classList.add("invisible");
		lightbox3.classList.remove("toggle-opacity");
		window.setTimeout(opacityLightbox3, 300);
	} else if (id=4){
		lightbox4.classList.add("invisible");
		lightbox4.classList.remove("toggle-opacity");
		window.setTimeout(opacityLightbox4, 300);
	} else if (id=5){
		lightbox5.classList.add("invisible");
		lightbox5.classList.remove("toggle-opacity");
		window.setTimeout(opacityLightbox5, 300);
	} else if (id=6){
		lightbox6.classList.add("invisible");
		lightbox6.classList.remove("toggle-opacity");
		window.setTimeout(opacityLightbox6, 300);
	};

  document.getElementById('darkened_body').classList.toggle("darken");
  document.getElementById('ind_cover_bg_image').classList.toggle("no_scroll");
};

// Note that you are assigning new values here to our slidIndex.

function changeSlide(n) {
  showSlide(slideIndex += n);
  
};

function toSlide(n) {
  showSlide(slideIndex = n);
};

function totalSlides(n){
	let slidesCount = n;
	return slidesCount;
};

// This is your logic for the light box. It will decide which slide to show 
// and which dot is active.

function showSlide(n) {
  const slides = document.getElementsByClassName('slide');

  if (n > slides.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides.length;
  };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };
  
  slides[slideIndex - 1].style.display = 'flex';
};