// TASK 1

function getSec() {
    let startSeconds = 0;
    return function () {
        let newSeconds = Math.round(new Date() / 1000);
        let currentSeconds = startSeconds;
        if (!startSeconds) {
            startSeconds = newSeconds;
            return 'Enabled';
        };
        startSeconds = newSeconds;
        return `${newSeconds - currentSeconds} seconds have passed`;
    }
}

let getTime = getSec();


// TASK 2

const timer = time => {
    let myTimer = setInterval(function() {
        if (time === 0) {
            console.log('Time End');
            clearInterval(myTimer);
        } else {
            let minuts = ('0' + (Math.floor(time / 60))).slice(-2);
            let seconds = ('0' + (time - (minuts * 60))).slice(-2);
            console.log(`${minuts}:${seconds}`);
        }
        time--;
    }, 1000)
}

timer(10);