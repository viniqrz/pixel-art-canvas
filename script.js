const colorPalette = document.querySelector('#color-palette');
const colors = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');

let selectedColor = 'rgb(0,0,0)';

for (let i = 0; i < 25; i++) {
  pixelBoard.insertAdjacentHTML('afterbegin', `
    <li class="pixel"></li>
  `);
}

colorPalette.addEventListener('click', function(e) {
  for (const el of colors) {
    if (el.classList.contains('selected')) el.classList.remove('selected');
  }

  selectedColor = window.getComputedStyle(e.target).backgroundColor;
  e.target.classList.add('selected');
})

pixelBoard.addEventListener('click', function(e) {
  if (e.target.classList.contains('pixel')) {
    e.target.style.backgroundColor = selectedColor;
  }
})





