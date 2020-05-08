/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider')
const fullScreen = player.querySelector('.fullscreen')

/* Build out functions  */
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    /*
    if (video.paused) {
        video.play()
    } else {
        video.pause();
    }
    */
}

function updateButton() {
    console.dir(this.paused)
    const icon = this.paused ? '▶' : '❚ ❚'
    toggle.textContent = icon;
}

function skip() {
    //console.log(this.dataset)
    video.currentTime += parseFloat(this.dataset.skip);
    console.log(video.currentTime, video.duration)
}

function handleRangeUpdate() {

    video[this.name] = this.value
        // console.log(this.value)
        // console.log(this.name)
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`

}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime;
    console.log(e)

}

function toggleFullScreen() {
    if (!video.fullscreenElement) {
        video.requestFullscreen();
    } else {
        if (video.exitFullscreen) {
            video.exitFullscreen();
        }
    }
}

/* Hook up the event listeners */

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))


let mouseDown = false;
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e))

if (mouseDown) {
    scrub();
}
progress.addEventListener('mousedown', () => mouseDown = true)
progress.addEventListener('mouseup', () => mouseDown = false)


fullScreen.addEventListener('click', toggleFullScreen)