const pixelBoard = document.querySelector('#pixel-board');

for (let i = 0; i < 25; i++) {
  pixelBoard.insertAdjacentHTML('afterbegin', `
    <li class="pixel"></li>
  `);
}
