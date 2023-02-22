function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

setInterval(updateTime, 1000);


let intervalId;
let remainingTime;

function startTimer() {
    const hours = parseInt(document.getElementById('hours-input').value);
    const minutes = parseInt(document.getElementById('minutes-input').value);
    const seconds = parseInt(document.getElementById('seconds-input').value);
    remainingTime = hours * 3600 + minutes * 60 + seconds;
    intervalId = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(intervalId);
}

function updateTimer() {
    if (remainingTime > 0) {
        remainingTime--;
        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;
        document.getElementById('timer-output').innerText =
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
        stopTimer();
    }
}

document.getElementById('start-button').addEventListener('click', startTimer);
document.getElementById('stop-button').addEventListener('click', stopTimer);
