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