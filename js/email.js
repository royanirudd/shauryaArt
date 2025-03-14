document.addEventListener('DOMContentLoaded', () => {
	const emailLink = document.querySelector('a[href^="mailto:"]');
	const originalText = emailLink.textContent;
	const emailAddress = emailLink.href.replace('mailto:', '');

	emailLink.addEventListener('click', async (e) => {
		e.preventDefault();

		// Copy email to clipboard
		try {
			await navigator.clipboard.writeText(emailAddress);

			// Change text
			emailLink.textContent = 'EMAIL COPIED!';

			// Reset text after 1 second
			setTimeout(() => {
				emailLink.textContent = originalText;
			}, 1000);
		} catch (err) {
			console.error('Failed to copy email:', err);
		}
	});
});
