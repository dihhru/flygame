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
let notesPositions = [
  [120, 100],
  [140, 110],
  [160, 100],
  [180, 90],
  [200, 100],
  [220, 100],
  [240, 120],
  [260, 150],
  [280, 130],
  [300, 100],
  [320, 110],
  [340, 90],
  [360, 100],
  [380, 100],
  [400, 80],
  [420, 140],
  [440, 160]
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
    var canvas = document.getElementById("bg");
    var ctx = canvas.getContext("2d");
    let img = document.createElement("img");
    img.src = "images/note.png";
    img.style.width = "50px";
    document.getElementById("cords").innerHTML = img;
    ctx.clearRect(0, 0, 1200, 400);
    notesPositions.map(function(note, index) {
      ctx.drawImage(img, note[0], note[1], 100, 100);
    });
  }
}
class Plane {
  constructor(speed) {
    this.image = "images/plane.png";
    this.speed = speed;
    this.position = { x: 0, y: 150 };
    this.size = 1;
    this.distance = 0;
  }
  moveDown() {
    this.position.y = this.position.y + 15;
  }
  moveUp() {
    this.position.y = this.position.y - 15;
  }
  update() {
    this.position.x += this.distance;
  }
  draw() {
    var canvas = document.getElementById("bg");
    var ctx = canvas.getContext("2d");
    var image = document.getElementById("plane");
    let cords = document.getElementById("cords");
    ctx.clearRect(0, 0, 1200, 400);
    ctx.drawImage(image, this.position.x, this.position.y, 100, 100);
    let range = document.getElementById("range").value;
    this.distance = 0.05 * range;
    cords.innerHTML =
      "x:" +
      Math.ceil(this.position.x) +
      "y:" +
      Math.ceil(this.position.y) +
      "range:" +
      range;
  }
}
class InputHandler {
  constructor(plane, game) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 38:
          plane.moveUp();
          break;

        case 40:
          plane.moveDown();
          break;
        // case 27:
        //    game.togglePause();
        //  break;
        //  case 32:
        //   game.start();
        //  break;
      }
    });
  }
}

let game = new Game();
let lastTime = 0;
function gameLoop(timestamp) {
  setTimeout(function() {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    plane.update(deltaTime);
    plane.draw();
    requestAnimationFrame(gameLoop);
  }, 15);
}
requestAnimationFrame(gameLoop);
let plane = new Plane(1);
let input = new InputHandler(plane);
game.drawNotes();
plane.draw();
setTimeout(function() {
  plane.draw();
}, 900);
