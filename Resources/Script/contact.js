function openForm() {

	const form = document.getElementById('contact-form');

 	function opacityForm (){
		form.classList.remove("invisible");
		form.classList.add("toggle-opacity");
	};

	form.style.display = 'flex';
	window.setTimeout(opacityForm, 0);
	document.getElementById('darkened_body').classList.toggle("darken");
	document.getElementById('ind_cover_bg_image').classList.toggle("no_scroll");
};

function closeForm() {

	const form = document.getElementById('contact-form');

	function opacityForm (){
		form.style.display = 'none';
	};

	form.classList.add("invisible");
	form.classList.remove("toggle-opacity");
	window.setTimeout(opacityForm, 300);
    document.getElementById('darkened_body').classList.toggle("darken");
    document.getElementById('ind_cover_bg_image').classList.toggle("no_scroll");
};