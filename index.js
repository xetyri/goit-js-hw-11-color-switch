const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let Clic = null;

const Start = document.querySelector('[data-action="start"]');
const Stop = document.querySelector('[data-action="stop"]');

Stop.disabled = true;

function StartBtn(event) {
  event.target.disabled = true;
  Stop.disabled = false;
  Clic = setInterval(BgColor, 1000);
  //Clic = setInterval(document.body.style.backgroundColor = colors[random(0, colors.length)], 500);
}

function BgColor() {
  document.body.style.backgroundColor = colors[random(0, colors.length)];
}

function StopBtn(event) {
  event.target.disabled = true;
  Start.disabled = false;

  document.body.style.backgroundColor = '#FFFFFF';

  clearInterval(Clic);
}

Start.addEventListener('click', StartBtn);
Stop.addEventListener('click', StopBtn);

