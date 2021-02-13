const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`
    image.classList.add("bg-image");
    body.appendChild(image);
}

function getRandom() {
    const rn = Math.floor(Math.random() * IMG_NUMBER + 1);
    return rn;
}

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();