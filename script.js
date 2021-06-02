const colorPalette = document.querySelector('#color-palette');
const colors = document.querySelectorAll('.color');
const inputSize = document.querySelector('#board-size');
const btnGenerate = document.querySelector('#generate-board');
const btnClear = document.querySelector('#clear-board');
const pixelBoard = document.querySelector('#pixel-board');

let selectedColor = 'rgb(0,0,0)';

let mouseTimer = 0;
let pressed = false;


for (let i = 1; i < colors.length; i++) {
  const n = Math.round(Math.random() * 250);
  const n2 = Math.round(Math.random() * 250);
  const n3 = Math.round(Math.random() * 250);
  colors[i].style.backgroundColor = `rgb(${n},${n2},${n3})`;
}

const createPixels = (n) => {
  for (let i = 0; i < n; i++) {
    pixelBoard.insertAdjacentHTML('afterbegin', `<li class="pixel"></li>`);
  }
}

const clearBoard = () => {
  for (const el of pixelBoard.children) {
    el.style.backgroundColor = 'white';
  }
}

const resizeBoard = (value) => {
  pixelBoard.innerHTML = '';

  pixelBoard.style.width = value * 40 + 'px';
  pixelBoard.style.height = value * 40 + 'px';

  setTimeout(() => {
    createPixels(value * value);
  }, 1000);
}

colorPalette.addEventListener('click', function(e) {
  for (const el of colors) {
    if (el.classList.contains('selected')) el.classList.remove('selected');
  }

  selectedColor = window.getComputedStyle(e.target).backgroundColor;
  e.target.classList.add('selected');
});

window.ondragstart = function() { return false; } 

pixelBoard.addEventListener('mousedown', function(e) {
  if (e.target.classList.contains('pixel')) {
    e.target.style.backgroundColor = selectedColor;
  }
  pressed = true;
});

pixelBoard.addEventListener('mouseover', function(e) {
  if (e.target.classList.contains('pixel') && pressed === true) {
    e.target.style.backgroundColor = selectedColor;
  }
});

pixelBoard.addEventListener('mouseup', function(e) {
  pressed = false;
});

btnClear.addEventListener('click', clearBoard);

btnGenerate.addEventListener('click', function(e) {
  e.preventDefault();
  if (inputSize.value < 5) {
    alert('Board inválido!');
    inputSize.value = 5;
  }

  if (inputSize.value > 50) inputSize.value = 50;

  clearBoard();
  resizeBoard(inputSize.value);
});

if (pressed) {
  pixelBoard.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('pixel')) {
      e.target.style.backgroundColor = selectedColor;
    }
  
    pressed = true;
  });
}

createPixels(25);





