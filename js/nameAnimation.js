document.addEventListener('DOMContentLoaded', () => {
	if (!isMobileDevice()) {
		const fadeLetters = document.querySelectorAll('.name-letter.fade');
		const scrollThreshold = 100;

		window.addEventListener('scroll', () => {
			const scrollPosition = window.pageYOffset;
			const opacity = Math.max(0, 1 - (scrollPosition / scrollThreshold));

			fadeLetters.forEach(letter => {
				letter.style.opacity = opacity;
			});
		});
	}
});
