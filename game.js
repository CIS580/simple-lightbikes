// Screen dimensions
const WIDTH = 740
const HEIGHT = 480

// Create the canvas and context
var screen = document.createElement('canvas');
var screenCtx = screen.getContext('2d');
screen.height = HEIGHT;
screen.width = WIDTH;
document.body.appendChild(screen);

// The main game loop
var start = null;
function loop(timestamp) {
  if(!start) start = timestamp;
  var elapsedTime = timestamp - start;
  start = timestamp;
  update(elapsedTime);
  render(elapsedTime);
  window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);

// Game state variables
var x = 0;

// The game update function
function update(elapsedTime) {
  x += 0.1 * elapsedTime;
}

// The game render function
function render(elapsedTime) {
  screenCtx.clearRect(0, 0, WIDTH, HEIGHT);
  screenCtx.fillStyle = "#ff0000";
  screenCtx.fillRect(10+x,10,20,20);
}
