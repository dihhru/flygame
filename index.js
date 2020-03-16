const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const loading = document.getElementById("loading");
sreenSize();

let promise1 = async function() {
  let audio = await new Promise(resolve => loadAudio(resolve));
  let images = await new Promise(resolve => loadImages(resolve));
  return audio + images;
};
promise1().then(x => start());
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
