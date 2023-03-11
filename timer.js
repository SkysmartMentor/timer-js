const outputSelector = '.timer__output';
const timerSelector = '.timer';

let intervalId;
let remainingTime;

function startTimer() {
    showElement(outputSelector);

    const hours = parseInt(document.getElementById('hours-input').value);
    const minutes = parseInt(document.getElementById('minutes-input').value);
    const seconds = parseInt(document.getElementById('seconds-input').value);
    remainingTime = hours * 3600 + minutes * 60 + seconds;

    intervalId = setInterval(updateTimer, 1000);

    hideElement(timerSelector);
    document.documentElement.requestFullscreen();

}

function stopTimer() {
    clearInterval(intervalId);
    setTimeout(() => {
        showElement(timerSelector);
        hideElement(outputSelector);
        document.documentElement.exitFullscreen();
    }, 2000);

}

function hideElement(element) {
    document.querySelector(element).classList.add('hide');
}

function showElement(element) {
    document.querySelector(element).classList.remove('hide');
}

function updateTimer() {
    if (remainingTime > 0) {
        remainingTime--;
        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;
        document.querySelector(outputSelector).textContent =
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
        stopTimer();
    }
}


document.getElementById('start-button').addEventListener('click', startTimer);
document.querySelector('.timer').addEventListener('keydown', (event) => {
    console.log('event.keyCode: ', event.keyCode);
    console.log('event.key: ', event.key);
    
    if (event.keyCode === 13) {
        startTimer();
    }
})
document.getElementById('stop-button').addEventListener('click', stopTimer);

hideElement(outputSelector);