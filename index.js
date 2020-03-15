sreenSize();
<<<<<<< Updated upstream
let game = new Game();
let plane = new Plane(1);
let input = new InputHandler(plane, game);
let touch = new TouchScreen(plane, game);
let metro = new Metro(plane);
let restart = new Restart();
metro.create(plane);
restart.create(game);
=======

let plane = new Plane();
let notes = new Notes(notesPositions);
let pannel = new Pannel(plane, notes);
let controller = new Controller(pannel, plane, notes);
let metro = new Object("metro", plane.setSpeed);
let restart = new Object("restart", controller.startLvl);
let input = new InputHandler(plane, controller);
controller.startLvl(0);
metro.create();
restart.create();
>>>>>>> Stashed changes
let promise = new Promise(function(resolve) {
  requestAnimationFrame(gameLoop);
  loadAudio(resolve);
});
promise.then(x => start());
