sreenSize();

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let loading = document.getElementById("loading");

let plane = new Plane();
let notes = new Notes(notesPositions);
let pannel = new Pannel(plane, notes);
let input = new InputHandler(plane, pannel);
let touch = new TouchScreen(plane, pannel);
let metro = new Object("metro", plane.setSpeed);
let restart = new Object("restart", pannel.restart);
let controller = new Controller(pannel, plane, notes);
controller.startLvl(0);
restart.create();
metro.create();
let promise = new Promise(function(resolve) {
  requestAnimationFrame(gameLoop);
  loadAudio(resolve);
});
promise.then(x => start());
