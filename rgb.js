const BTN = document.getElementById("btn"),
	TEXTCOLOR = document.querySelector(".color"),
	NAME = document.querySelector(".name");

// GENERATE A RANDOM NUMBER WITH ANY OF THE FUNCTIONS BELOW
//  Math.floor(Math.random() * array.length);

BTN.addEventListener("click", function () {
	document.body.style.backgroundColor = randomColor();
	TEXTCOLOR.textContent = randomColor();
});

function randomColor() {
	//pick a 'red' from 0 - 255
	let r = Math.floor(Math.random() * 256);
	//pick a 'green' from 0 - 255
	let g = Math.floor(Math.random() * 256);
	//pick a 'blue' from 0 - 255
	let b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
}
