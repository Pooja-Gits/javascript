function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}



window.addEventListener("keypress", function (e) {
	const player = document.querySelector("#player");
	const coin = document.querySelector("#coin");
	let width = window.innerWidth;
	let height = window.innerHeight;
	if (isTouching(player, coin)) {
		let newHeight = Math.floor(Math.random() * height);
		let newWidth = Math.floor(Math.random() * width);
		coin.style.top = `${newHeight}px`;
		coin.style.left = `${newWidth}px`;
		this.console.log(newHeight);
		this.console.log(newWidth);
		player.style.top = `${Math.floor(Math.random() * height)}px`;
		player.style.left = `${Math.floor(Math.random() * width)}px`;
	}
	else {
		let newHeight = parseInt(player.style.top);
		let newWidth = parseInt(player.style.left);
		this.console.log(newHeight);
		this.console.log(newWidth);
		switch (e.key.toUpperCase()) {
			case "W": newHeight = `${newHeight - 10}px`; break;
			case "D": newWidth = `${newWidth + 10}px`; break;
			case "A": newWidth = `${newWidth - 10}px`; break;
			case "S": newHeight = `${newHeight + 10}px`; break;
		}
		player.style.top = newHeight;
		player.style.left = newWidth;
	}
});