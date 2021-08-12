let promise = new Promise(function(resolve, reject){
    let random = Math.floor(1 + Math.random() * 6);
    setTimeout(function() {
        if (1 <= random <= 5) {
            console.log(`Start the game... ${random}`);
        } else console.error(`Error`);
    }, 2000)
})

// const promise = new Promise((resolve, reject) => {
//     const randomNumber = Math.random();
//   setTimeout(() => {
//       if(randomNumber < .6) {
//         console.log('Все прошло отлично!');
//       } else {
//         reject('Что-то пошло не так');
//     }
//     }, 2000);
//   });