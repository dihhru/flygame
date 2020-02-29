const sounds = [
  [
    "E2",
    "D2#",
    "E2",
    "D2#",
    "E2",
    "B2",
    "D2",
    "C2",
    "A2",
    "C1",
    "E1",
    "A2",
    "B2",
    "E1",
    "C2",
    "B2",
    "A2"
  ], //Beethoven
  [
    "C1",
    "C1",
    "G1",
    "G1",
    "A2",
    "A2",
    "G1",
    "F1",
    "F1",
    "E1",
    "E1",
    "D1",
    "D1",
    "C1"
  ], //Mozart
  ["D2", "G2", "G1", "B2", "D2", "D1", "G1", "A2", "B2", "G1", "G1", "G1"],
  //Bach
  [
    "C1",
    "C1",
    "G2",
    "E2",
    "C2",
    "D2",
    "B2",
    "G1",
    "C2",
    "D2",
    "E2",
    "D2",
    "C1",
    "C1",
    "G2",
    "E2",
    "C2",
    "D2",
    "B2",
    "G1",
    "C2",
    "B2",
    "A2",
    "G1"
  ]
  //Brahms
];
class Game {
  constructor() {
    this.level = 0;
  }
  detectCollision(plane, gameObject) {
    let bottomOfplane = plane.position.y + plane.size;
    let topOfplane = plane.position.y;
    let topOfObject = gameObject.position.y;
    let leftSideOfObject = gameObject.position.x;
    let rightSideOfObject = gameObject.position.x + gameObject.width;
    let bottomOfObject = gameObject.position.y + gameObject.height;
    if (
      bottomOfplane >= topOfObject &&
      topOfplane <= bottomOfObject &&
      plane.position.x >= leftSideOfObject &&
      plane.position.x + plane.size <= rightSideOfObject
    ) {
      return true;
    } else {
      return false;
    }
  }
  drawNotes() {
    let notes = sounds[this.level]; //slice or something
    notes.map(function(note, index) {
      let notes = document.getElementById("notes");
      let img = document.createElement("img");
      img.src = "images/note.png";
      img.style.width = "50px";
      notes.appendChild(img);
    });
  }
}
class Plane {
  constructor(speed) {
    this.image = "images/plane.png";
    this.speed = speed;
    this.position = { x: 10, y: 400 };
    this.size = 10;
  }
  draw() {
    let canvas = document.getElementById("bg");
    let ctx = canvas.getContext("2d");
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }
}
let game = new Game();
let plane = new Plane("t");
plane.draw();
console.log(plane);
game.drawNotes();
