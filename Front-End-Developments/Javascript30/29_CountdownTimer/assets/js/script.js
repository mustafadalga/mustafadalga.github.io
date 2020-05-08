const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');


let countDown;

function timer(seconds) {
    clearInterval(countDown)

    const now = Date.now()
    const then = now + seconds * 1000;
    displayTimeLeft(seconds)
    displayEndTime(then)

    countDown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countDown)
            return;
        }
        displayTimeLeft(secondsLeft)
    }, 1000)
}


function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const reaminderSeconds = seconds % 60;
    const display = `${minutes}:${reaminderSeconds < 10 ? '0':''}${reaminderSeconds}`;
    timerDisplay.textContent = display;
    document.title = display
}


function displayEndTime(timestamp) {
    const end = new Date(timestamp)
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    const adjustedMinutes = minutes < 10 ? '0' + minutes : minutes;
    endTime.textContent = `Be Back At ${adjustedHour}:${adjustedMinutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time)
    timer(seconds)
}

function getFormData(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset()
}

buttons.forEach(button => button.addEventListener('click', startTimer))
document.customForm.addEventListener('submit', getFormData)