"use scrtict";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const loading = document.getElementById("loading");
const plane = new Plane();
const notes = new Notes(notesPositions);
const pannel = new Pannel(plane, notes);
const controller = new Controller(pannel, plane, notes);
const metro = new Object("metro", plane.setSpeed);
const restart = new Object("restart", controller.startLvl);
const input = new InputHandler(plane, controller);

let prepare = async function() {
  let images, audio;
  let imagesP = new Promise((resolve, reject) => loadImages(resolve, reject));
  let audioP = new Promise((resolve, reject) => loadAudio(resolve, reject));
  sreenSize();
  controller.startLvl(0);
  metro.create();
  restart.create();
  images = await imagesP;
  audio = await audioP;
};
prepare()
  .then(x => start())
  .catch(e => alert(e));
