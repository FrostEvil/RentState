const btnNavEl = document.querySelector(".nav__btn");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
	headerEl.classList.toggle("nav--open");
	document.body.classList.toggle("nav--no-scroll");
});
