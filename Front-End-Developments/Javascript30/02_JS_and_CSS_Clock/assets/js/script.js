const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegress = (seconds * 6) + 90;

    secondHand.style.transform = `rotate(${secondsDegress}deg)`;
    const minutes = now.getMinutes();
    const minutesDegress = (minutes * 6) + 90;
    minHand.style.transform = `rotate(${minutesDegress}deg)`;


    const hour = now.getHours();
    const hourDegress = (hour * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegress}deg)`;
}

setInterval(setDate, 1000);