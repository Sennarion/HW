const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.stop');


function random(min, max) {
	return Math.floor(Math.random() * (max + 1 - min) + min);
}

function randomColor() {
	return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

function randomSpeed(min, max) {
	return Math.random() * (max - min) + min;
}

let squares = [];

function addSquares() {
	let square = {
		x: random(0, canvas.width - 30),
		y: -30,
		width: 30,
		height: 30,
		speed: randomSpeed(0.3, 0.8),
		color: randomColor()
	}
	squares.push(square);
}

function drawSquares() {
	for (let i = 0; i < squares.length; i++) {
		ctx.beginPath();
		ctx.rect(squares[i].x, squares[i].y, squares[i].width, squares[i].height);
		ctx.fillStyle = squares[i].color;
		ctx.fill();
		ctx.closePath();
		squares[i].y += squares[i].speed;
	}
}

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawSquares()
	requestAnimationFrame(animate);
}

function startGame() {
	setInterval(addSquares, random(200, 2000))
}

startButton.addEventListener('click', startGame);
document.body.onload = animate;
