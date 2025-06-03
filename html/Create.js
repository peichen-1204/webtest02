const images = {
  head: [
    'img/head/head (1).png',
    'img/head/head (2).png',
    'img/head/head (3).png',
    'img/head/head (4).png',
    'img/head/head (5).png',
    'img/head/head (6).png'
  ],
  face: [
    'img/face/face (1).png',
    'img/face/face (2).png',
    'img/face/face (3).png',
    'img/face/face (4).png',
    'img/face/face (5).png',
    'img/face/face (6).png'
  ],
  body: [
    'img/body/body (1).png',
    'img/body/body (2).png',
    'img/body/body (3).png',
    'img/body/body (4).png',
    'img/body/body (5).png',
    'img/body/body (6).png',
    'img/body/body (7).png',
    'img/body/body (8).png',
    'img/body/body (9).png',
    'img/body/body (10).png',
    'img/body/body (11).png',
    'img/body/body (12).png'
  ],
  legs: [
    'img/legs/legs (1).png',
    'img/legs/legs (2).png',
    'img/legs/legs (3).png',
    'img/legs/legs (4).png',
    'img/legs/legs (5).png',
    'img/legs/legs (6).png',
    'img/legs/legs (7).png'
  ],
};

const colors = ['#2fc4b2', '#f48c1b', '#8e73c5', '#ef4ca3', '#f3e242', '#468de3'];

const indexes = {
  head: 0,
  face: 0,
  body: 0,
  legs: 0
};

let currentPart = 'head';

function renderCharacter() {
  ['head', 'face', 'body', 'legs'].forEach(part => {
    document.getElementById(part).style.backgroundImage = `url('${images[part][indexes[part]]}')`;
  });
}

function renderPreviews() {
  ['head', 'face', 'body', 'legs'].forEach((part, idx) => {
    const preview = document.getElementsByClassName('icon-preview')[idx];
    preview.style.backgroundImage = `url('${images[part][indexes[part]]}')`;

    // 點擊預覽圖時 → 選擇當前部位並更新側邊欄圖片
    preview.onclick = () => {
      currentPart = part;
      renderSideOptions();
    };
  });
}

function renderSideOptions() {
  const box = document.getElementById('side-options');
  box.innerHTML = '';
  images[currentPart].forEach((src, idx) => {
    const img = document.createElement('img');
    img.src = src;
    img.onclick = () => {
      indexes[currentPart] = idx;
      renderCharacter();
      renderPreviews();
    };
    box.appendChild(img);
  });
}

function renderColorButtons() {
  const box = document.getElementById('color-options');
  box.innerHTML = '';
  colors.forEach((color, idx) => {
    const btn = document.createElement('div');
    btn.className = 'color-btn';
    btn.style.backgroundColor = color;
    btn.onclick = () => {
      document.getElementById(currentPart).style.filter = `hue-rotate(${idx * 60}deg)`;
    };
    box.appendChild(btn);
  });
}

function renderAll() {
  renderCharacter();
  renderPreviews();
  renderSideOptions();
  renderColorButtons();
}

renderAll();
