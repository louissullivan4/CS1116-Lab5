let width;
let height;
let canvas;
let context;
let x;
let y;
let spaceship;
let xHeight = 35;
let xWidth = 28;
let ps = [];
let xChange;
let yChange;
let gravity = 0.5;

document.addEventListener('DOMContentLoaded', init, false);

function init() {
    canvas = document.querySelector('canvas');
    context = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
    spaceship = {
        x : ((width / 2) - (xHeight / 2)),
        y : (height - xWidth),
        speed : 1.5
    };
    window.setInterval(draw, 33);
}


function draw() {
  if (ps.length < 125) {
        let p = {
          x : ((width / 2) - 5),
          y : (spaceship.y + xHeight),
          size : 3.5,
          xChange : getRandomNumber(-10, 10),
          yChange : 10
        };
        ps.push(p)
      }
    context.clearRect(0, 0, width, height);
    context.fillStyle = 'purple';
    context.fillRect(spaceship.x, spaceship.y, xWidth, xHeight);
    spaceship.speed = (spaceship.speed **1.02);
    spaceship.y = (spaceship.y - spaceship.speed);
    for (let p of ps) {
        context.fillStyle = 'grey';
        context.fillRect(p.x, p.y, p.size, p.size);
        p.x = p.x + p.xChange;
        p.y = p.y + p.yChange;
        p.yChange = p.yChange + gravity;
  }
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
