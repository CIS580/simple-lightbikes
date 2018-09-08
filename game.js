// Screen dimensions
const WIDTH = 740
const HEIGHT = 480

// Create the canvas and context
var screen = document.createElement('canvas');
var screenCtx = screen.getContext('2d');
screen.height = HEIGHT;
screen.width = WIDTH;
document.body.appendChild(screen);

/* Game state variables */
var start = null;
var currentInput = {
  space: false
}
var priorInput = {
  space: false
}
var x = 0;

/** @function handleKeydown
  * Event handler for keydown events
  * @param {KeyEvent} event - the keydown event
  */
function handleKeydown(event) {
  switch(event.key) {
    case ' ':
      currentInput.space = true;
      break;
  }
}
// Attach keydown event handler to the window
window.addEventListener('keydown', handleKeydown);

/** @function handleKeyup
  * Event handler for keyup events
  * @param {KeyEvent} event - the keyup event
  */
function handleKeyup(event) {
  switch(event.key) {
    case ' ':
      currentInput.space = false;
      break;
  }
}
// Attach keyup event handler to the window
window.addEventListener('keyup', handleKeyup);

/** @function loop
  * The main game loop
  * @param {DomHighResTimestamp} timestamp - the current system time,
  * in milliseconds, expressed as a double.
  */
function loop(timestamp) {
  if(!start) start = timestamp;
  var elapsedTime = timestamp - start;
  start = timestamp;
  pollInput();
  update(elapsedTime);
  render(elapsedTime);
  window.requestAnimationFrame(loop);
}

/** @function pollInput
  * Copies the current input into the previous input
  */
function pollInput() {
  priorInput = JSON.parse(JSON.stringify(currentInput));
}

/** @function update
  * Updates the game's state
  * @param {double} elapsedTime - the amount of time
  * elapsed between frames
  */
function update(elapsedTime) {
  // move the red square when the space bar is down
  if(currentInput.space) {
    x += 0.1 * elapsedTime;
  }
}

/** @function render
  * Renders the game into the canvas
  * @param {double} elapsedTime - the amount of time
  * elapsed between frames
  */
function render(elapsedTime) {
  screenCtx.clearRect(0, 0, WIDTH, HEIGHT);
  screenCtx.fillStyle = "#ff0000";
  screenCtx.fillRect(10+x,10,20,20);
}

// Start the game loop
window.requestAnimationFrame(loop);
