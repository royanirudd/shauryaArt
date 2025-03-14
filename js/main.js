function updateTime() {
	const options = {
		timeZone: 'Asia/Kolkata',
		hour: 'numeric',
		minute: 'numeric',
		hour12: true
	};
	const time = new Date().toLocaleTimeString('en-US', options);
	document.getElementById('locationTime').textContent = `NEW DELHI, IND ${time}`;
}

// Update time every second
updateTime();
setInterval(updateTime, 1000);
