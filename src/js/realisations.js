const renovationsAll = document.querySelectorAll(".renovations__examples");

renovationsAll.forEach((el) =>
	el.addEventListener("pointerdown", (e) => {
		if (e.pointerType === "touch") {
			const dataImg = el.getAttribute("data-img");

			if (el.children[0].textContent === "PRZED") {
				el.children[0].textContent = "PO";
				el.children[1].children[0].setAttribute(
					"src",
					`./dist/img/after_${dataImg}.webp`
				);
			} else {
				el.children[0].textContent = "PRZED";
				el.children[1].children[0].setAttribute(
					"src",
					`./dist/img/before_${dataImg}.webp`
				);
			}
		} else {
			renovationsAll.forEach((el) =>
				el.addEventListener("mouseover", () => {
					const dataImg = el.getAttribute("data-img");

					el.children[0].textContent = "PO";
					el.children[1].children[0].setAttribute(
						"src",
						`./dist/img/after_${dataImg}.webp`
					);
				})
			);
			renovationsAll.forEach((el) =>
				el.addEventListener("mouseleave", () => {
					const dataImg = el.getAttribute("data-img");

					el.children[0].textContent = "PRZED";
					el.children[1].children[0].setAttribute(
						"src",
						`./dist/img/before_${dataImg}.webp`
					);
				})
			);
		}
	})
);

// Slider

const slider = function () {
	const carouselItemAll = document.querySelectorAll(".carousel__item");
	const btnLeft = document.querySelector(".carousel__arrow--left");
	const btnRight = document.querySelector(".carousel__arrow--right");

	const maxSlide = carouselItemAll.length;
	let curSlide = Math.ceil(maxSlide / 2);
	let startSlide = curSlide;

	const init = function () {
		if (maxSlide % 2 == 0) {
			carouselItemAll.forEach((s) => {
				s.style.transform = `translateX(${50}%)`;
			});
		}
		carouselItemAll.forEach((s, i) => {
			i === curSlide - 1
				? (s.style.transform = `scale(${1.1})`)
				: (s.style.transform = `scale(${0.9})`);
		});
	};
	init();

	const goToSlide = function (slide) {
		carouselItemAll.forEach((s, i) => {
			i === slide - 1
				? (s.style.transform = `translateX(${
						(startSlide - slide) * 100
				  }%) scale(${1.1})`)
				: (s.style.transform = `translateX(${
						(startSlide - slide) * 100
				  }%) scale(${0.9})`);
		});
	};
	const prevSlide = function () {
		curSlide > 1 ? curSlide-- : (curSlide = maxSlide);
		console.log(curSlide);
		goToSlide(curSlide);
	};
	const nextSlide = function () {
		curSlide < maxSlide ? curSlide++ : (curSlide = 1);
		console.log(curSlide);
		goToSlide(curSlide);
	};

	btnLeft.addEventListener("click", prevSlide);
	btnRight.addEventListener("click", nextSlide);

	document.addEventListener("keydown", function (e) {
		if (e.key === "ArrowLeft") prevSlide();
		e.key === "ArrowRight" && nextSlide();
	});
};

slider();
