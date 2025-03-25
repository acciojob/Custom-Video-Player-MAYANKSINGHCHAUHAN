const video = document.querySelector(".player__video");
const playButton = document.querySelector(".toggle");
const volumeSlider = document.querySelector("input[name='volume']");
const speedSlider = document.querySelector("input[name='playbackRate']");
const skipButtons = document.querySelectorAll("[data-skip]");
const progressBar = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");

function togglePlay() {
    if (video.paused) {
        video.play();
        playButton.textContent = "❚ ❚";
    } else {
        video.pause();
        playButton.textContent = "►";
    }
}

function updateVolume() {
    video.volume = volumeSlider.value;
}

function updatePlaybackRate() {
    video.playbackRate = speedSlider.value;
}

function skipVideo() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}

function scrub(event) {
    const scrubTime = (event.offsetX / progressBar.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

video.addEventListener("click", togglePlay);
playButton.addEventListener("click", togglePlay);
volumeSlider.addEventListener("input", updateVolume);
speedSlider.addEventListener("input", updatePlaybackRate);
skipButtons.forEach(button => button.addEventListener("click", skipVideo));
video.addEventListener("timeupdate", updateProgress);
progressBar.addEventListener("click", scrub);
