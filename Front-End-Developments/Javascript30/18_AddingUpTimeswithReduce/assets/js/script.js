// Array from === [...]
const timeNodes = [...(document.querySelectorAll('[data-time]'))];

const seconds = timeNodes.map(node => node.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat)
        return (mins * 60) + secs;
    })
    .reduce((total, vidSeconds) => {
        return total + vidSeconds
    })


let totalSeconds = seconds;

let hour = Math.floor(totalSeconds / 3600)
let minutes = Math.floor(totalSeconds / 60) - (hour * 60);
let second = (totalSeconds - minutes * 60) % 60
    //second = (totalSeconds - minutes * 60 - hour * 3600)
console.log(hour, minutes, second)