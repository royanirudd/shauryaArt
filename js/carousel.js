document.addEventListener('DOMContentLoaded', () => {
	const slides = document.querySelectorAll('.carousel-slide');
	const indicators = document.querySelectorAll('.indicator');
	const prevButton = document.querySelector('.carousel-button.prev');
	const nextButton = document.querySelector('.carousel-button.next');
	let currentSlide = 0;

	function updateSlides() {
		slides.forEach(slide => slide.classList.remove('active'));
		indicators.forEach(indicator => indicator.classList.remove('active'));

		slides[currentSlide].classList.add('active');
		indicators[currentSlide].classList.add('active');
	}

	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
		updateSlides();
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
		updateSlides();
	}

	// Event listeners
	nextButton.addEventListener('click', nextSlide);
	prevButton.addEventListener('click', prevSlide);

	indicators.forEach((indicator, index) => {
		indicator.addEventListener('click', () => {
			currentSlide = index;
			updateSlides();
		});
	});

	// Optional: Auto-advance slides
	// setInterval(nextSlide, 5000);
});
