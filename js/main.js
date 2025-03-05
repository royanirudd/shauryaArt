// Function to update time
function updateTime() {
	const options = {
		timeZone: 'Asia/Kolkata',
		hour: 'numeric',
		minute: 'numeric',
		hour12: true
	};
	const time = new Date().toLocaleTimeString('en-US', options);
	document.getElementById('locationTime').textContent = `New Delhi, India, ${time}`;
	document.getElementById('footerLocationTime').textContent = `New Delhi, India, ${time}`;
}

// Update time every second
updateTime();
setInterval(updateTime, 1000);

// Initialize name animation
const nameLink = document.querySelector('.name-link');
function initializeNameAnimation() {
	const fullName = nameLink.textContent;
	const [firstName, lastName] = fullName.split(' ');

	// Wrap each letter in a span except first letters
	const firstNameHTML = firstName[0] + firstName.slice(1).split('').map(
		char => `<span>${char}</span>`
	).join('');

	const lastNameHTML = lastName[0] + lastName.slice(1).split('').map(
		char => `<span>${char}</span>`
	).join('');

	nameLink.innerHTML = `${firstNameHTML} ${lastNameHTML}`;
}

initializeNameAnimation();

// Handle scroll effects
const gifContainer = document.querySelector('.gif-container');
const maxScroll = 500; // Increased for smoother transition

window.addEventListener('scroll', () => {
	const currentScroll = window.pageYOffset;
	const documentHeight = document.documentElement.scrollHeight;
	const windowHeight = window.innerHeight;
	const scrollPercentage = currentScroll / (documentHeight - windowHeight);

	// Smooth gif expansion
	if (currentScroll <= maxScroll) {
		const scale = Math.min(currentScroll / maxScroll, 1);
		const width = 300 + (window.innerWidth - 300) * scale;
		const height = 300 + (window.innerHeight - 300) * scale;

		gifContainer.style.width = `${width}px`;
		gifContainer.style.height = `${height}px`;

		if (scale > 0.8) {
			gifContainer.classList.add('expanded');
		} else {
			gifContainer.classList.remove('expanded');
		}
	}

	// Name animation
	const letterSpans = nameLink.querySelectorAll('span');
	const nameAnimationStart = 100;
	const nameAnimationDuration = 200;

	if (currentScroll > nameAnimationStart) {
		const opacity = Math.max(0, 1 - (currentScroll - nameAnimationStart) / nameAnimationDuration);
		letterSpans.forEach(span => {
			span.style.opacity = opacity;
		});
	} else {
		letterSpans.forEach(span => {
			span.style.opacity = 1;
		});
	}

	// Footer visibility handling
	if (scrollPercentage > 0.8) {
		const footerOffset = (scrollPercentage - 0.8) * 5 * windowHeight;
		gifContainer.style.transform = `translateY(-${footerOffset}px)`;
	}
});
