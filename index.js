const COLORS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const BTN = document.getElementById("btn"),
	TEXTCOLOR = document.querySelector(".color");

// GENERATE A RANDOM NUMBER WITH ANY OF THE FUNCTIONS BELOW
//  Math.floor(Math.random() * array.length);

BTN.addEventListener("click", function () {
	let randomNumber = getRandomNumber();
	document.body.style.backgroundColor = getHexColor(COLORS);
	TEXTCOLOR.textContent = getHexColor(COLORS);
});

function getRandomNumber() {
	return Math.floor(Math.random() * COLORS.length);
}

function getHexColor(arr) {
	let hexColor = "#";

	for (let i = 0; i < 6; i++) {
		hexColor += arr[getRandomNumber()];
	}
	return hexColor;
}
