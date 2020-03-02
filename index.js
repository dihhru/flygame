const sounds = [
  [
    "e2",
    "d2t",
    "e2",
    "d2t",
    "e2",
    "b2",
    "d2",
    "c2",
    "a2",
    "c1",
    "e1",
    "a2",
    "b2",
    "e1",
    "c2",
    "b2",
    "a2"
  ], //Beethoven
  [
    "c1",
    "c1",
    "g1",
    "g1",
    "a2",
    "a2",
    "g1",
    "f1",
    "f1",
    "e1",
    "e1",
    "d1",
    "d1",
    "c1"
  ], //Mozart
  ["d2", "g2", "g1", "g2", "d2", "d1", "g1", "a2", "b2", "g1", "g1", "g1"],
  //Bach
  [
    "c1",
    "c1",
    "g2",
    "e2",
    "c2",
    "d2",
    "b2",
    "g1",
    "d2",
    "e2",
    "d2",
    "c1",
    "c1",
    "g2",
    "e2",
    "c2",
    "d2",
    "b2",
    "g1",
    "c2",
    "b2",
    "a2",
    "g1"
  ]
  //Brahms
];
let notesPositions = [
  [120, 100],
  [200, 110],
  [250, 100],
  [360, 90],
  [460, 100],
  [520, 100],
  [600, 120],
  [650, 150],
  [720, 130],
  [820, 100],
  [900, 110],
  [950, 90],
  [1000, 100],
  [1050, 100],
  [1100, 80],
  [1150, 140],
  [1200, 160]
];
let authors = ["bach", "beethoven", "brahms", "mozart"];
class Game {
  constructor() {
    this.isStarted = true;
    this.level = 1;
    this.activeNote = -1;
  }
  win() {
    let _this = this;
    let div = document.createElement("img");
    let img = authors[this.level];
    div.style.width = "100px";
    div.src = `images/${img}.gif`;
    var canvas = document.getElementById("bg");
    var ctx = canvas.getContext("2d");
    let x = 100;
    let int = setInterval(function() {
      x--;
      if (x === 25) {
        clearInterval(int);
        _this.levelUp();
      }
      console.log(x);
      ctx.clearRect(0, 0, 1200, 400);
      ctx.drawImage(div, 500, x, 200, 400);
    }, 10);
  }
  levelUp() {
    game.isStarted = true;
    this.level++;
    if (this.level == 4) {
      this.level = 0;
    }
    let bg = document.getElementById("bg");
    let pannel = authors[this.level];
    bg.style.backgroundImage = `url(images/pannels/${pannel}_pannel.png)`;
  }
  togglePause() {
    plane.speed = 0;
  }
  detectCollision(plane, note) {
    let bottomOfplane = plane.position.y + plane.size;
    let topOfplane = plane.position.y;
    let topOfObject = note[1];
    let bottomOfObject = note[1] + 110;
    let leftSideOfObject = note[0];
    if (
      bottomOfplane >= topOfObject &&
      topOfplane <= bottomOfObject &&
      plane.position.x + 50 >= leftSideOfObject
    ) {
      return true;
    } else {
      return false;
    }
  }
  drawNotes() {
    var canvas = document.getElementById("bg");
    var ctx = canvas.getContext("2d");
    let noteImg = document.getElementById("note");
    ctx.drawImage(note, 150, 200, 100, 100);
    ctx.clearRect(0, 0, 1200, 400);
    notesPositions.map(function(note) {
      ctx.drawImage(noteImg, note[0], note[1], 50, 50);
    });
  }
}

class Plane {
  constructor(speed) {
    this.image = "images/plane.png";
    this.speed = speed;
    this.position = { x: 0, y: 150 };
    this.size = 100;
    this.distance = 0;
  }
  moveDown() {
    this.position.y = this.position.y + 15;
  }
  moveUp() {
    this.position.y = this.position.y - 15;
  }
  update() {
    if (game.isStarted === false) {
      return;
    }
    this.position.x += this.distance;
    if (this.position.x >= 1200) {
      game.win();
      game.isStarted = false;
      this.position.x = 0;
    } else {
      this.draw();
    }
  }
  crash() {
    let audio = document.createElement("audio");
    audio.src = "sounds/crash_sound.wav";
    audio.play();
  }
  draw() {
    var canvas = document.getElementById("bg");
    var ctx = canvas.getContext("2d");
    var image = document.getElementById("plane");
    let cords = document.getElementById("cords");
    let y = this.position.y;
    if (y >= 285 || y <= -45) {
      this.crash();
      this.position.y = 150;
      this.position.x = 0;
    }
    ctx.clearRect(0, 0, 1200, 400);
    game.drawNotes();
    ctx.drawImage(image, this.position.x, this.position.y, 100, 100);
    notesPositions.forEach((note, index) => {
      if (game.activeNote !== index && index > game.activeNote) {
        let n = game.detectCollision(plane, note);
        if (n) {
          game.activeNote = index;
          let soundId = sounds[0][index];
          let src = `sounds/${soundId}.wav`;
          let audio = document.createElement("audio");
          audio.id = index;
          audio.src = src;
          audio.play();
        }
      }
    });
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
        case 13:
          let range = document.getElementById("range").value;
          range > 0 ? (range = 0) : (range = 25);
          document.getElementById("range").value = range;
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
    requestAnimationFrame(gameLoop);
  }, 15);
}
requestAnimationFrame(gameLoop);
let plane = new Plane(1);
let input = new InputHandler(plane, game);
game.drawNotes();
plane.draw();
setTimeout(function() {
  plane.draw();
}, 900);
