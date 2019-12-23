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

const player = document.querySelector("#player");
const coin = document.querySelector("#coin");

function moveCoin() {
	let width = window.innerWidth;
	let height = window.innerHeight;
	let newHeight = Math.floor(Math.random() * height);
	let newWidth = Math.floor(Math.random() * width);
	coin.style.top = `${newHeight}px`;
	coin.style.left = `${newWidth}px`;
	this.console.log(newHeight);
	this.console.log(newWidth);
	if (player.style.top === "") {
		player.style.top = `${Math.floor(Math.random() * height)}px`;
		player.style.left = `${Math.floor(Math.random() * width)}px`;
	}
}

moveCoin();

window.addEventListener("keyup", function (e) {
	if (isTouching(player, coin)) {
		moveCoin();
	}
	else {
		let newHeight = parseInt(player.style.top);
		let newWidth = parseInt(player.style.left);
		this.console.log(newHeight);
		this.console.log(newWidth);
		switch (e.key.toUpperCase()) {
			case "ARROWUP": newHeight = `${newHeight - 50}px`; break;
			case "ARROWRIGHT":
				player.style.transform = "scale(1,1)";
				newWidth = `${newWidth + 50}px`; break;
			case "ARROWLEFT":
				player.style.transform = "scale(-1,1)";
				newWidth = `${newWidth - 50}px`; break;
			case "ARROWDOWN": newHeight = `${newHeight + 50}px`; break;
		}
		player.style.top = newHeight;
		player.style.left = newWidth;
	}
});