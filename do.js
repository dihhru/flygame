sreenSize();
let game = new Game();
let plane = new Plane(1);
let input = new InputHandler(plane, game);
let promise = new Promise(function(resolve) {
  requestAnimationFrame(gameLoop);
  loadAudio(resolve);
});
promise.then(x => start());
