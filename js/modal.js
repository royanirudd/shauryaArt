document.addEventListener('DOMContentLoaded', () => {
	const modal = document.getElementById('imageModal');
	const modalImg = document.getElementById('modalImage');
	const modalTitle = document.getElementById('modalTitle');
	const modalDimensions = document.getElementById('modalDimensions');
	const collageItems = document.querySelectorAll('.collage-item');

	// Open modal
	collageItems.forEach(item => {
		item.addEventListener('click', (e) => {
			e.stopPropagation();
			const img = item.querySelector('img');
			const title = item.querySelector('.image-overlay h3');
			const dimensions = item.querySelector('.image-overlay p');

			if (img) {
				modal.style.display = 'flex';
				modalImg.src = img.src;
				modalTitle.textContent = title.textContent;
				modalDimensions.textContent = dimensions.textContent;
				document.body.style.overflow = 'hidden';
			}
		});
	});

	// Close modal when clicking anywhere on the overlay
	modal.addEventListener('click', () => {
		modal.style.display = 'none';
		document.body.style.overflow = 'auto';
	});

	// Prevent modal from closing when clicking the image or info
	modalImg.addEventListener('click', (e) => {
		e.stopPropagation();
	});
	document.querySelector('.modal-info').addEventListener('click', (e) => {
		e.stopPropagation();
	});

	// Handle escape key to close modal
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			modal.style.display = 'none';
			document.body.style.overflow = 'auto';
		}
	});
});
