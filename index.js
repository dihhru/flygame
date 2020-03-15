"use strict";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const loading = document.getElementById("loading");
sreenSize();

let plane = new Plane();
let notes = new Notes(notesPositions);
let pannel = new Pannel(plane, notes);
let touch = new TouchScreen(plane, pannel);
let controller = new Controller(pannel, plane, notes);
let metro = new Object("metro", plane.setSpeed);
let restart = new Object("restart", controller.startLvl);
let input = new InputHandler(plane, controller);
controller.startLvl(0);
metro.create();
restart.create();
let promise = new Promise(function(resolve) {
  loadAudio(resolve);
});
promise.then(x => start());
