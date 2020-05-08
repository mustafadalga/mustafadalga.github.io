const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.strokeStyle = "#BADASS";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.globalCompositeOperation = "exists content";



let isDrawing = false;
let lastX = 0
let lastY = 0
let hue = 0;
let direction = true

function draw(e) {
    if (!isDrawing) return;
    console.log(e)
    ctx.strokeStyle = `hsl(${hue},100% ,50%)`;

    ctx.beginPath()
    ctx.moveTo(lastX, lastY) //start from
    ctx.lineTo(e.offsetX, e.offsetY); //go to
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    hue = hue >= 360 ? 0 : hue;


    direction = (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) ? !direction : direction
    direction ? ctx.lineWidth++ : ctx.lineWidth--;
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;

    [lastX, lastY] = [e.offsetX, e.offsetY];
})
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)