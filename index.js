const cEl = document.querySelector(".container");

const btnEl = document.querySelector(".btn");

const tcEl = document.querySelector(".trailer-container");

const videoEl = document.querySelector("video")

const iconEl = document.querySelector(".icon");

const x = () => {
    tcEl.classList.remove("active")
    cEl.classList.add("active")
}
btnEl.addEventListener("click", x)

const y = () => {
    tcEl.classList.add("active")
    cEl.classList.remove("active")
    videoEl.pause();
    videoEl.currentTime = 0;
}
iconEl.addEventListener("click", y)