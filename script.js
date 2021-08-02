/* TASK 1 ---------------------------------------------------------- */

// let coffeeMachine = {
//     message: 'Your coffee is ready!',
//     start: function() {
//         setTimeout(() => console.log(this.message), 3000)
//     }
// }
// coffeeMachine.start();
// let teaPlease = {
//     message: 'Wanna some tea instead of coffee?',
// }
// coffeeMachine.start.bind(teaPlease)();


/* TASK 2 ---------------------------------------------------------- */

// function concatStr(a, b, c) {
//     return a + b + c;
// };
// let checkConcat = concatStr('Hello', ' ', 'Matt');
// console.log(checkConcat);
// let hello = concatStr.bind(null, 'Hello', ' ');
// let finalResult = hello('Brad');
// console.log(finalResult);


/* TASK 3 ---------------------------------------------------------- */

// function showNumbers(startNum, endNum, interval) {
//     let timerId = setInterval(function() {
//       console.log(startNum);
//       if (startNum == endNum) clearInterval(timerId);
//       startNum++;
//     }, interval);
// }

// showNumbers(5, 10, 500);


// function showNumbers(startNum, endNum, interval) {
//     setTimeout(function go() {
//       console.log(startNum);
//       if (startNum < endNum) setTimeout(go, interval);
//       startNum++;
//     }, interval);
// }

// showNumbers(5, 10, 500);


/* TASK 4 ---------------------------------------------------------- */

/* Функция addBase с аргументом (1) - это то же самое, что функция с локальной переменной base = 1. Так как эта функция возвращает другую функцию, где используется base,
переменная base замыкается. Дальше происходит передача этой функции (а также ее переменной base) для новой переменной addOne, которая в свою очередь 
теперь принимает новый параметр num. При вызове этой функции с параметром num и передачей в нее аргумента 5, происходит суммирование base + num (1 + 5).
В итоге addOne(5) = base + num = 1 + 5 = 6, а addOne(3) = base + num = 1 + 3 = 4. 
addOne(5) + addOne(3) = 6 + 4 = 10, что нам и выводит alert. */








// /* TASK 1 ---------------------------------------------------------- */

// const vegetable = {
//     name: 'onion',
//     color: 'white',
//     shape: 'round',
// }
// const { name, color } = vegetable;
// console.log(`${name}s are usually ${color}`);


// /* TASK 2 ---------------------------------------------------------- */

// const { shape } = vegetable;
// console.log(`${name}s are usually ${shape}`);


// /* TASK 3 ---------------------------------------------------------- */

// const vegetables = [
//     { name: 'cucumber', color: 'green', shape: 'round' },
//     { name: 'tomato', color: 'red', shape: 'round' }
// ];
// const [cucumber, tomato] = vegetables;
// console.log(`${cucumber.name}s are usually ${cucumber.color}`);
// console.log(`${tomato.name}s are usually ${tomato.color}`);


// /* TASK 4 ---------------------------------------------------------- */

// let students = [
//     { name: 'Kate', age: 25 },
//     { name: 'Artur', age: 30 },
//     { name: 'Nick', age: 15 },
//     { name: 'Alex', age: 28 },
//     { name: 'Zhenia', age: 45 },
// ];

// let [, secondStudent, ...rest] = students;
// console.log(secondStudent);
// console.log(`Длина массива оставшихся элементов - ${rest.length}`);





// /* TASK 1 ---------------------------------------------------------- */

// function newBg() {
//     let element = document.querySelector('#main');
//     element.lastElementChild.style.background = 'red';
// }
// function replaceDiv() {
//     let wrapper = document.querySelector('#wrapper');
//     let main = document.querySelector('#main');
//     wrapper.prepend(main);
// }
// newBg();
// replaceDiv();


// /* TASK 2 ---------------------------------------------------------- */

// function addImg() {
//     let question = confirm('Хотите добавить картинку?');
//     if (question) {
//         let link = prompt('Введите ссылку на картинку', 'https://res.cloudinary.com/practicaldev/image/fetch/s--ij_hqKUb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/damiancipolat/js_vs_memes/blob/master/doc/mind_js.jpg%3Fraw%3Dtrue');
//         let newImg = document.createElement('img');
//         newImg.src = link;
//         let wrapper = document.querySelector('#wrapper');
//         wrapper.append(newImg);
//     }
// }
// addImg();


// /* TASK 3 ---------------------------------------------------------- */

// let number = prompt('Введите количество Input', '8');
// let form = document.querySelector('form');

// for (let i = number; i >= 1; i--) {
//     let input = document.createElement('input');
//     input.className = 'input-item';
//     input.value = `Input ${i}`;
//     form.prepend(input);
// }

// let inputs = document.querySelectorAll('form > input');
// inputs[inputs.length - 1].classList.add('margin-zero');

// for (let i = 0; i < number; i++) {
//     if (!(i % 2)) {
//         inputs[i].classList.add('my-class');
//     }
// };

// let myClass = document.querySelectorAll('.my-class');
// for (let input of myClass) {
//     input.style.background = 'yellow';
// }

// for (let i = 0; i < number; i++) {
//     if (!(i % 3 - 2)) {
//         inputs[i].value = null;
//         inputs[i].setAttribute('placeholder', 'Some text');
//     }
// }


// /* TASK 4 ---------------------------------------------------------- */

// function createTable(number) {
//     let table = document.querySelector('#matrix');
//     for (let i = 0; i < number; i++) {
//         let newTr = document.createElement('tr');
//         table.append(newTr);
//         for (let j = 1; j <= number; j++) {
//             let newTd = document.createElement('td');
//             newTd.innerText = `${j + i}`;
//             newTr.append(newTd);
//         }
//     }
// }
// createTable(10);

// function fillCell() {
//     let allTr = document.querySelectorAll('tr');
//     for (let i = 0; i < allTr.length; i++) {
//         allTr[allTr.length - i - 1].children[i].style.background = 'blue';
//     }
// }
// fillCell();



/////////////////////////////////////////////////////////



// /* TASK 1 ---------------------------------------------------------- */

let input = document.querySelector('#search');
let filmsCount = document.querySelector('#filmsCount');
const films = document.querySelectorAll('ul > li');

function howManyFilms(e) {
    e.preventDefault();
    let count = 0;
    for (let film of films) {
        if (e.target.value == '') {
            count = 0;
        } else if (film.innerText.startsWith(e.target.value)) {
            count++;
        }
    };
    filmsCount.innerText = count;
}

input.addEventListener('input', howManyFilms);



// /* TASK 2 ---------------------------------------------------------- */

// const INGREDIENTS = {
//     "cocoa": ["cocoa powder", "milk", "sugar"],
//     "cappuccino": ["milk", "coffee"],
//     "smoothie": ["banana", "orange", "sugar"],
//     "matcha frappe": ["matcha", "milk", "ice"]
// };

// function addIngridients(event) {
//     let ol = document.createElement('ol');
//     if (event.target.children.length > 0) {
//         document.querySelector('ol').remove();
//     } else {
//         for (let i = 0; i < INGREDIENTS[event.target.innerHTML].length; i++) {
//             let myLi = document.createElement('li');
//             myLi.innerHTML = INGREDIENTS[event.target.innerHTML][i];
//             ol.append(myLi);
//         }
//         event.target.append(ol);
//     }
// }

// menu.addEventListener('click', addIngridients);




// /* CANVAS ---------------------------------------------------------- */

// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// var ballRadius = 10;
// var x = canvas.width/2;
// var y = canvas.height-30;
// var dx = 2;
// var dy = -2;
// var paddleHeight = 10;
// var paddleWidth = 75;
// var paddleX = (canvas.width-paddleWidth)/2;
// var rightPressed = false;
// var leftPressed = false;
// var brickRowCount = 5;
// var brickColumnCount = 3;
// var brickWidth = 75;
// var brickHeight = 20;
// var brickPadding = 10;
// var brickOffsetTop = 30;
// var brickOffsetLeft = 30;
// var score = 0;
// var lives = 3;

// var bricks = [];
// for(var c=0; c<brickColumnCount; c++) {
//   bricks[c] = [];
//   for(var r=0; r<brickRowCount; r++) {
//     bricks[c][r] = { x: 0, y: 0, status: 1 };
//   }
// }

// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);
// document.addEventListener("mousemove", mouseMoveHandler, false);

// function keyDownHandler(e) {
//     if(e.key == "Right" || e.key == "ArrowRight") {
//         rightPressed = true;
//     }
//     else if(e.key == "Left" || e.key == "ArrowLeft") {
//         leftPressed = true;
//     }
// }

// function keyUpHandler(e) {
//     if(e.key == "Right" || e.key == "ArrowRight") {
//         rightPressed = false;
//     }
//     else if(e.key == "Left" || e.key == "ArrowLeft") {
//         leftPressed = false;
//     }
// }

// function mouseMoveHandler(e) {
//   var relativeX = e.clientX - canvas.offsetLeft;
//   if(relativeX > 0 && relativeX < canvas.width) {
//     paddleX = relativeX - paddleWidth/2;
//   }
// }
// function collisionDetection() {
//   for(var c=0; c<brickColumnCount; c++) {
//     for(var r=0; r<brickRowCount; r++) {
//       var b = bricks[c][r];
//       if(b.status == 1) {
//         if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
//           dy = -dy;
//           b.status = 0;
//           score++;
//           if(score == brickRowCount*brickColumnCount) {
//             alert("YOU WIN, CONGRATS!");
//             document.location.reload();
//           }
//         }
//       }
//     }
//   }
// }

// function drawBall() {
//   ctx.beginPath();
//   ctx.arc(x, y, ballRadius, 0, Math.PI*2);
//   ctx.fillStyle = "#0095DD";
//   ctx.fill();
//   ctx.closePath();
// }
// function drawPaddle() {
//   ctx.beginPath();
//   ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
//   ctx.fillStyle = "#0095DD";
//   ctx.fill();
//   ctx.closePath();
// }
// function drawBricks() {
//   for(var c=0; c<brickColumnCount; c++) {
//     for(var r=0; r<brickRowCount; r++) {
//       if(bricks[c][r].status == 1) {
//         var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
//         var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
//         bricks[c][r].x = brickX;
//         bricks[c][r].y = brickY;
//         ctx.beginPath();
//         ctx.rect(brickX, brickY, brickWidth, brickHeight);
//         ctx.fillStyle = "#0095DD";
//         ctx.fill();
//         ctx.closePath();
//       }
//     }
//   }
// }
// function drawScore() {
//   ctx.font = "16px Arial";
//   ctx.fillStyle = "#0095DD";
//   ctx.fillText("Score: "+score, 8, 20);
// }
// function drawLives() {
//   ctx.font = "16px Arial";
//   ctx.fillStyle = "#0095DD";
//   ctx.fillText("Lives: "+lives, canvas.width-65, 20);
// }

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawBricks();
//   drawBall();
//   drawPaddle();
//   drawScore();
//   drawLives();
//   collisionDetection();

//   if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
//     dx = -dx;
//   }
//   if(y + dy < ballRadius) {
//     dy = -dy;
//   }
//   else if(y + dy > canvas.height-ballRadius) {
//     if(x > paddleX && x < paddleX + paddleWidth) {
//       dy = -dy;
//     }
//     else {
//       lives--;
//       if(!lives) {
//         alert("GAME OVER");
//         document.location.reload();
//       }
//       else {
//         x = canvas.width/2;
//         y = canvas.height-30;
//         dx = 3;
//         dy = -3;
//         paddleX = (canvas.width-paddleWidth)/2;
//       }
//     }
//   }

//   if(rightPressed && paddleX < canvas.width-paddleWidth) {
//     paddleX += 7;
//   }
//   else if(leftPressed && paddleX > 0) {
//     paddleX -= 7;
//   }

//   x += dx;
//   y += dy;
//   requestAnimationFrame(draw);
// }

// draw();