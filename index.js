sreenSize();
let plane = new Plane(1);
let game = new Game(plane, notesPositions);
let input = new InputHandler(plane, game);
let touch = new TouchScreen(plane, game);
let metro = new Object("metro", plane.setSpeed);
let restart = new Object("restart", game.restart);
restart.create();
metro.create();
let promise = new Promise(function(resolve) {
  requestAnimationFrame(gameLoop);
  loadAudio(resolve);
});
promise.then(x => start());
