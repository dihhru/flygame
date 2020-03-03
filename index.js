const sounds = [
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
  [
    [120, 100, 1, 0],
    [200, 110, 1, 0],
    [250, 100, 1, 0],
    [360, 90, 1, 0],
    [460, 100, 1, 0],
    [520, 100, 1, 0],
    [600, 120, 1, 0],
    [650, 150, 1, 0],
    [720, 130, 1, 2],
    [820, 100, 1, 0],
    [900, 110, 1, 0],
    [950, 90, 1, 0],
    [1000, 100, 1, 2],
    [1050, 100, 1, 0],
    [1100, 80, 1, 0],
    [1150, 140, 1, 0],
    [1200, 160, 1, 3]
  ],
  [
    [120, 100, 1, 0],
    [200, 110, 1, 0],
    [250, 100, 1, 0],
    [360, 90, 1, 0],
    [460, 100, 1, 0],
    [520, 100, 1, 0],
    [600, 120, 1, 2],
    [650, 150, 1, 0],
    [720, 130, 1, 0],
    [820, 100, 1, 0],
    [900, 110, 1, 0],
    [950, 90, 1, 0],
    [1000, 100, 1, 0],
    [1050, 100, 1, 3]
  ],
  [
    [120, 100, 1, 0],
    [200, 110, 1, 0],
    [250, 100, 1, 0],
    [360, 90, 1, 0],
    [460, 100, 1, 0],
    [520, 100, 1, 0],
    [600, 120, 1, 1],
    [650, 150, 1, 1],
    [720, 130, 1, 0],
    [820, 100, 1, 0],
    [900, 110, 1, 0],
    [950, 90, 1, 0],
    [1000, 100, 1, 0],
    [1050, 100, 1, 3]
  ],
  [
    [50, 100, 1, , 1],
    [100, 110, 1, 1],
    [150, 100, 1, 2],
    [200, 90, 1, 1],
    [250, 100, 1, 1],
    [300, 100, 1, 2],
    [350, 120, 1, 1],
    [400, 150, 1, 1],
    [450, 130, 1, 0],
    [500, 100, 1, 0],
    [550, 110, 1, 0],
    [600, 90, 1, 2, 2],
    [650, 100, 1, 1],
    [700, 100, 1, 1],
    [750, 80, 1, 2],
    [800, 140, 1, 1],
    [850, 160, 1, 1],
    [900, 80, 1, 2],
    [950, 140, 1, 1],
    [1000, 160, 1, 1],
    [1050, 80, 1, 0],
    [1100, 140, 1, 0],
    [1100, 140, 1, 0],
    [1100, 140, 1, 3]
  ]
];
let authors = ["mozart", "beethoven", "bach", "brahms"];
class Game {
  constructor() {
    this.scores = notesPositions.length;
    this.isStarted = false;
    this.level = -1;
    this.notesPositions = null;
    this.activeNote = -1;
  }
  speed() {
    document.getElementById("range").value = 10 + 20 * this.level;
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
        _this.isStarted = true;
        _this.levelUp();
      }
      ctx.clearRect(0, 0, 1200, 400);
      ctx.drawImage(div, 500, x, 200, 400);
    }, 10);
  }
  levelUp() {
    game.notesPositions = null;
    game.activeNote = -1;
    this.level++;
    if (this.level == 4) {
      this.level = 0;
    }
    game.notesPositions = JSON.parse(
      JSON.stringify(notesPositions[game.level])
    );
    game.scores = notesPositions[game.level].length;
    let bg = document.getElementById("bg");
    let pannel = authors[this.level];
    bg.style.backgroundImage = `url(images/pannels/${pannel}_pannel.png)`;
    this.speed();
  }
  togglePause() {
    console.log(notesPositions);
    plane.speed = 0;
  }
  detectCollision(plane, note, index) {
    let bottomOfplane = plane.position.y + plane.size;
    let topOfplane = plane.position.y;
    let topOfObject = note[1];
    let bottomOfObject = note[1] + 110;
    let leftSideOfObject = note[0];
    if (
      bottomOfplane >= topOfObject &&
      topOfplane <= bottomOfObject &&
      plane.position.x + 50 >= leftSideOfObject &&
      note[2] !== 0
    ) {
      game.scores--;
      game.notesPositions[index][2] = 0;
      return true;
    } else {
      return false;
    }
  }
  drawNotes() {
    var canvas = document.getElementById("bg");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 1200, 400);
    game.notesPositions.map(function(note) {
      if (note[2] === 0) {
        return;
      }
      let img = document.createElement("img");
      img.src = `images/notes/${note[3]}.png`;
      img.width = 150;
      ctx.drawImage(img, note[0], note[1], 50, 75);
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
    let range = document.getElementById("range").value;
    this.distance = 0.05 * range;
    if (game.isStarted === false) {
      return;
    }
    this.position.x += this.distance;
    if (this.position.x >= 1200) {
      game.isStarted = false;
      this.position.x = 0;
      if (game.scores > 3) {
        game.isStarted = true;
        game.activeNote = -1;
        return;
      }
      game.win();
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
    game.notesPositions.map((note, index) => {
      if (game.activeNote !== index && index > game.activeNote) {
        let n = game.detectCollision(plane, note, index);
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
        case 32:
          var value = game.isStarted;
          game.isStarted = !value;
          console.log(game);
          break;
        case 13:
          var value = game.isStarted;
          game.isStarted = !value;
          break;
      }
    });
  }
}

let game = new Game();
let plane = new Plane(1);
let input = new InputHandler(plane, game);
game.levelUp();
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
game.drawNotes();
plane.draw();
setTimeout(function() {
  plane.draw();
}, 900);
