const button = document.querySelector('.button');

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function moveButtonAway() {
  const width = button.offsetWidth;
  const height = button.offsetHeight;
  const padding = 16;
  const minDistance = 140;

  const maxX = window.innerWidth - width - padding;
  const maxY = window.innerHeight - height - padding;

  let newX = padding;
  let newY = padding;

  for (let attempt = 0; attempt < 40; attempt++) {
    newX = padding + Math.random() * Math.max(0, maxX - padding);
    newY = padding + Math.random() * Math.max(0, maxY - padding);

    const centerX = newX + width / 2;
    const centerY = newY + height / 2;
    const distance = Math.hypot(centerX - mouseX, centerY - mouseY);

    if (distance >= minDistance) break;
  }

  button.style.left = `${newX}px`;
  button.style.top = `${newY}px`;
}

function centerButton() {
  const width = button.offsetWidth;
  const height = button.offsetHeight;
  button.style.left = `${(window.innerWidth - width) / 2}px`;
  button.style.top = `${(window.innerHeight - height) / 2}px`;
}

button.addEventListener('mouseenter', moveButtonAway);
button.addEventListener('touchstart', (e) => {
  e.preventDefault();
  moveButtonAway();
});

centerButton();
window.addEventListener('resize', centerButton);
