const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const loading = document.getElementById("loading");
sreenSize();
let promise1 = async function() {
  let images, audio;
  let imagesP = new Promise((resolve, reject) => loadImages(resolve, reject));
  let audioP = new Promise((resolve, reject) => loadAudio(resolve, reject));
  images = await imagesP;
  audio = await audioP;
};
promise1()
  .then(x => start())
  .catch(e => alert(e));

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
