function openForm() {

	const form = document.getElementById('contact-form');

 	function opacityForm (){
		form.classList.remove("invisible");
		form.classList.add("toggle-opacity");
	};

	form.style.display = 'flex';
	window.setTimeout(opacityForm, 0);
	
	const body = document.getElementsByClassName("darkened_body");
	var bodyClasses = [].slice.apply(body[0].classList);

	if(!bodyClasses.includes('nav-on')){
		document.getElementsByClassName("darkened_body")[0].classList.add("darken");}

	const bodyBlock = document.getElementsByTagName("body");
	var bodyBlockClasses = [].slice.apply(body[0].classList);
	
	if(!bodyBlockClasses.includes('nav-on')){
		document.getElementsByTagName("body")[0].classList.add("no_scroll");}

};

function closeForm() {

	const form = document.getElementById('contact-form');

	function opacityForm (){
		form.style.display = 'none';
	};

	form.classList.add("invisible");
	form.classList.remove("toggle-opacity");
	window.setTimeout(opacityForm, 300);


	const body = document.getElementsByClassName("darkened_body");
	var bodyClasses = [].slice.apply(body[0].classList);

	if(!bodyClasses.includes('nav-on')){
		document.getElementsByClassName("darkened_body")[0].classList.remove("darken");}

	const bodyBlock = document.getElementsByTagName("body");
	var bodyBlockClasses = [].slice.apply(body[0].classList);
	
	if(!bodyBlockClasses.includes('nav-on')){
		document.getElementsByTagName("body")[0].classList.remove("no_scroll");}
};