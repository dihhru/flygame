sreenSize();

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let loading = document.getElementById("loading");

let plane = new Plane();
let notes = new Notes(notesPositions);
let game = new Game(plane, notes);
let input = new InputHandler(plane, game);
let touch = new TouchScreen(plane, game);
let metro = new Object("metro", plane.setSpeed);
let restart = new Object("restart", game.restart);
notes.newLvl(0);
restart.create();
metro.create();
let promise = new Promise(function(resolve) {
  requestAnimationFrame(gameLoop);
  loadAudio(resolve);
});
promise.then(x => start());
