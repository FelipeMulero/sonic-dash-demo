//Jogo em JavaScript,CSS e HTML
//Desenvolvido por felipe Mulero

const dino = document.querySelector('.dinoRex');
const background = document.querySelector('.background');
const pontos = document.querySelector('.pontos');


let isJumping = false;
let position = 0;

function handlekeyUp(event) {
if (event.keyCode === 32) {
    if (!isJumping) {
   jump();
  }
 }
}
function jump () {
isJumping = true;
let upinterval = setInterval(() => {
if (position >= 250) {
  clearInterval(upinterval);
  let downInterval = setInterval(() => {
if (position <= 0) {
  clearInterval(downInterval);
  isJumping = false;
} else {
  position -= 30;
  dino.style.bottom = position + 'px';
  }
 }, 30);
} else {
  position += 30;
  dino.style.bottom = position + 'px';
  }
 }, 30);
}
function createCactus() {
const cactus = document.createElement('div');
let cactusPosition = 1000;
let randomTime = Math.random() * 7000;
cactus.classList.add('cactus');
cactus.style.left = 1000 + 'px';
background.appendChild(cactus);
let leftInterval = setInterval (() => {
if (cactusPosition < -60) {
  clearInterval(leftInterval);
  background.removeChild(cactus);
} else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
  clearInterval(leftInterval);
  document.body.innerHTML = '<h1 class="game-over">Fim de jogo  </h1> Desenvolvido por Felipe Mulero';
}else {
  cactusPosition -= 10;
  cactus.style.left = cactusPosition + 'px';
 }
}, 20);
  setTimeout (createCactus, randomTime);
}
createCactus();
document.addEventListener('keyup' , handlekeyUp);