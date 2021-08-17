function randomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let number = Math.floor(1 + Math.random() * 6);
            if (1 <= number && number <= 5) {
                console.log('Start the game...');
                resolve(number);
            } else reject('Game over');
        }, 2000);
    });
}

async function createGame() {
    try {
        let number = await randomNumber();
        if (number == 1) {
            console.log('Stay here');
        } else console.log(`Go ${number} steps`);
    } catch (error) {
        console.error(error);
    }
}

createGame()