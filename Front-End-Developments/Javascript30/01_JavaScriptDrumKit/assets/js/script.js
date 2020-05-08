function keydownHandler(e) {
    const audio = getAudio(e.keyCode)
    const key = getKey(e)
    playSound(audio)
    playEffect(key)
}

function clickHandler(key) {
    const keyCode = getDataAttrKey(key)
    const audio = getAudio(keyCode)
    playSound(audio)
    playEffect(key)
}

function getDataAttrKey(key) {
    return key.getAttribute("data-key")
}

function getAudio(keyCode) {
    return document.querySelector(`audio[data-key="${keyCode}"]`);
}

function getKey(e) {
    return document.querySelector(`.key[data-key="${e.keyCode}"]`);
}

function playEffect(key) {
    key.classList.add('playing')
}

function playSound(audio) {
    if (!audio) return;
    audio.currentTime = 0
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', keydownHandler)