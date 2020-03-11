sreenSize();
let promise = new Promise(function(resolve) {
  requestAnimationFrame(gameLoop);
  loadAudio(resolve);
});
let game = new Game();
let plane = new Plane(1);
let input = new InputHandler(plane, game);
let touch = new TouchScreen(plane, game);
promise.then(x => start());
