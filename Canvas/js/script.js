const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.stop');
let score = document.querySelector('#score');
let interval;


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
	squares.forEach(function(element) {
		ctx.beginPath();
		ctx.rect(element.x, element.y, element.width, element.height);
		ctx.fillStyle = element.color;
		ctx.fill();
		ctx.closePath();
		element.y += element.speed;
	})
}

function deleteSquares(event) {
	squares.forEach(function(element) {
		if (element.x <= event.offsetX && element.x + 30 >= event.offsetX && element.y <= event.offsetY && element.y + 30 >= event.offsetY) {
			squares.splice(squares.indexOf(element), 1);
			score.innerHTML++;
		}
	})
}

function reset() {
	clearInterval(interval);
	squares.splice(0, squares.length);
	score.innerHTML = 0;
}

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawSquares();
	requestAnimationFrame(animate);
}

function startGame() {
	interval = setInterval(addSquares, random(200, 2000));
}

startButton.addEventListener('click', startGame);
stopButton.addEventListener('click', reset);
canvas.addEventListener('click', deleteSquares);
document.body.onload = animate;
