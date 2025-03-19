const gifContainer = document.querySelector('.gif-container');
const textSections = document.querySelectorAll('.text-section');
const maxScroll = 600;
const mainNav = document.querySelector('.main-nav');

// Only setup desktop features if not on mobile
if (!isMobileDevice()) {
	// Add a spacer div to enable scrolling
	const spacerDiv = document.createElement('div');
	spacerDiv.style.height = `${maxScroll + window.innerHeight}px`;
	spacerDiv.className = 'scroll-spacer';
	document.querySelector('.content').appendChild(spacerDiv);

	// Initial styles for text sections
	const textContainer = document.querySelector('.text-sections');
	textContainer.style.position = 'fixed';
	textContainer.style.top = '50%';
	textContainer.style.left = '50%';
	textContainer.style.transform = 'translate(-50%, -50%)';
	textContainer.style.width = '80%';
	textContainer.style.zIndex = '2';
	textContainer.style.color = 'white';
	textContainer.style.textAlign = 'center';
	textContainer.style.pointerEvents = 'none';

	// Make header transparent initially on index page and keep it transparent
	mainNav.classList.add('transparent');

	window.addEventListener('scroll', () => {
		const currentScroll = window.pageYOffset;
		const progress = Math.min(currentScroll / maxScroll, 1);

		// Handle gif expansion
		if (currentScroll <= maxScroll) {
			const startWidth = 300;
			const startHeight = 300;
			const finalWidth = window.innerWidth;
			const finalHeight = window.innerHeight;

			const width = startWidth + (finalWidth - startWidth) * progress;
			const height = startHeight + (finalHeight - startHeight) * progress;

			gifContainer.style.width = `${width}px`;
			gifContainer.style.height = `${height}px`;
			gifContainer.style.position = 'fixed';
			gifContainer.style.top = '50%';
			gifContainer.style.left = '50%';
			gifContainer.style.transform = 'translate(-50%, -50%)';
		}

		// Handle text visibility
		const textOpacity = Math.max(0, (progress - 0.8) * 5);
		textContainer.style.opacity = textOpacity;
	});
}
