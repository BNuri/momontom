const body = document.querySelector("body");

const IMAGE_NUM = 3;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function generateRandom() {
  const num = Math.floor(Math.random() * IMAGE_NUM) + 1;
  return num;
}

function init() {
  const randomNumber = generateRandom();
  paintImage(randomNumber);
}

init();
