const services = document.querySelector(".services__content");

services.addEventListener("click", (e) => {
	if (e.target.hasAttribute("data-clicked")) {
		const servicesID = e.target.getAttribute("data-clicked");
		document
			.querySelector(`#${servicesID}`)
			.scrollIntoView({ behavior: "smooth" });
	} else if (e.target.parentElement.hasAttribute("data-clicked")) {
		const servicesID = e.target.parentElement.getAttribute("data-clicked");
		document.querySelector(`#${servicesID}`).scrollIntoView({
			behavior: "smooth",
		});
	}
});

