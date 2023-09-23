function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav_links");
  const navLinks = document.querySelectorAll(".nav_links li");
  const body = document.querySelector(".darkened_body");
  const bodyBlock = document.querySelector("body");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav_active");
    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5}s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
    //Body Darken
    body.classList.toggle("darken");
    //Block Scroll
    bodyBlock.classList.toggle("no_scroll");
  });

  body.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav_active");
    //Burger Animation
    burger.classList.toggle("toggle");
    //Body Darken
    body.classList.toggle("darken");
    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5}s`;
      }
    });
    //Block Scroll
    bodyBlock.classList.toggle("no_scroll");
  });
}

navSlide();

window.addEventListener("scroll", function () {
  let height = document.querySelector("#ind_cover_bg_image").offsetHeight;
  let nav = document.querySelector("nav");
  nav.classList.toggle("scroll_nav", window.scrollY > height);
  nav.classList.toggle("nav_hide", window.scrollY > 400);
});

textFit(document.querySelectorAll(".contacts"));

function gotoLinkedin() {
  window.open("https://www.linkedin.com/in/vitorbandrade/", "_blank");
}
