function redirectToSubdomain(subdomain, event) {
  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;

  // Multiple waves from button
  for (let i = 0; i < 2; i++) {
    setTimeout(() => {
      launchCarrotConfetti(originX, originY, 40);
    }, i * 100);
  }

  // Extra waves from screen edges

    setTimeout(() => {
      launchEdgeCarrots(100);
    }, 300);


  setTimeout(() => {
    window.location.href = `http://${subdomain}.localhost`;
  }, 2500); // 1 second extra delay
}

function launchCarrotConfetti(x, y, count) {
  for (let i = 0; i < count; i++) {
    const carrot = document.createElement('div');
    carrot.textContent = '🥕';
    carrot.className = 'carrot';

    carrot.style.left = `${x}px`;
    carrot.style.top = `${y}px`;

    const angle = Math.random() * 2 * Math.PI;
    const distance = 150 + Math.random() * 150;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    const size = 16 + Math.random() * 24;

    carrot.style.setProperty('--dx', `${dx}px`);
    carrot.style.setProperty('--dy', `${dy}px`);
    carrot.style.fontSize = `${size}px`;

    document.body.appendChild(carrot);
    setTimeout(() => carrot.remove(), 3000);
  }
}

function launchEdgeCarrots(count) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  for (let i = 0; i < count; i++) {
    const carrot = document.createElement('div');
    carrot.textContent = '🥕';
    carrot.className = 'carrot';

    const edge = Math.floor(Math.random() * 4);
    let x, y;

    switch (edge) {
      case 0: x = Math.random() * width; y = 0; break; // top
      case 1: x = width; y = Math.random() * height; break; // right
      case 2: x = Math.random() * width; y = height; break; // bottom
      case 3: x = 0; y = Math.random() * height; break; // left
    }

    carrot.style.left = `${x}px`;
    carrot.style.top = `${y}px`;

    const dx = (Math.random() - 0.5) * 600;
    const dy = (Math.random() - 0.5) * 600;
    const size = 16 + Math.random() * 24;

    carrot.style.setProperty('--dx', `${dx}px`);
    carrot.style.setProperty('--dy', `${dy}px`);
    carrot.style.fontSize = `${size}px`;

    document.body.appendChild(carrot);
    setTimeout(() => carrot.remove(), 5000);
  }
}

function spawnFloatingCarrots() {
  setInterval(() => {
    const carrot = document.createElement('div');
    carrot.textContent = '🥕';
    carrot.className = 'floating-carrot';

    carrot.style.left = `${Math.random() * 100}vw`;
    carrot.style.fontSize = `${16 + Math.random() * 20}px`;
    carrot.style.animationDuration = `${10 + Math.random() * 10}s`;

    document.body.appendChild(carrot);

    setTimeout(() => carrot.remove(), 20000);
  }, 500); // spawn every 0.5s
}

window.onload = () => {
  spawnFloatingCarrots();
};
