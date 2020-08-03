let threshold = 50;
let points = [];
let canvas;
let context;
let width;
let height;

document.addEventListener('DOMContentLoaded', init, false);

function init() {
    canvas = document.querySelector('canvas');
    context = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
    window.setInterval(draw, 33);
}

function draw() {
    let q = {
      x : getRandomNumber(0, 500),
      y : getRandomNumber(0, 500)
    };
    for (let i = 0; i < points.length; i += 1) {
      if (((points[i].x - q.x)**2 + (points[i].y - q.y)**2)**0.5 < threshold) {
        context.beginPath();
        context.lineWidth = "0.5";
        context.strokeStyle = "black"
        context.moveTo(q.x, q.y)
        context.lineTo(points[i].x, points[i].y);
        context.stroke();
      }
    }
  points.push(q)
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
