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
  [
    "d2",
    "g2",
    "g1",
    "b2",
    "d2",
    "d1",
    "g1",
    "a2",
    "b2",
    "a2",
    "b2",
    "g1",
    "g1",
    "g1"
  ],
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
    "c2",
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
let uniq;
function loadAudio(resolve) {
  let files = JSON.parse(JSON.stringify(sounds));
  let arr = files.flat(Infinity);
  let bg = document.getElementById("res");
  uniq = Array.from(new Set(arr));
  let length = uniq.length;
  let i = 0;
  let progress = document.getElementById("progressBar");
  while (i < length) {
    progress.style.width = (100 / length) * i + "%";
    let index = i;
    let sound = uniq[i];
    let doc = document.createElement("audio");
    doc.src = `sounds/${sound}.wav`;
    doc.id = "s" + index;
    bg.appendChild(doc);
    i = timer = setInterval(() => {
      let song = document.getElementById("s" + index);
      if (song.readyState === 4) {
        if (i === length) {
          resolve();
        }
        clearInterval(timer);
        return i++;
      }
    }, 100);
  }
}

let notesPositions = [
  [
    [130, 100, 1, 0],
    [190, 100, 1, 0],

    [270, 80, 1, 0],
    [330, 80, 1, 0],

    [390, 75, 1, 0],
    [450, 75, 1, 0],

    [510, 80, 1, 2],
    [570, 80, 1, 0],

    [630, 85, 1, 0],
    [690, 85, 1, 0],

    [750, 90, 1, 0],
    [810, 90, 1, 0],

    [870, 95, 1, 0],
    [930, 150, 1, 3]
  ], //mozart
  [
    [140, 100, 1, 0],
    [190, 110, 1, 0],
    [240, 100, 1, 0],
    [290, 110, 1, 0],
    [340, 100, 1, 0],
    [390, 120, 1, 0],
    [440, 110, 1, 0],
    [490, 120, 1, 0],
    [540, 140, 1, 2],

    [620, 160, 1, 0],
    [670, 140, 1, 0],
    [720, 120, 1, 0],
    [780, 110, 1, 2],

    [850, 130, 1, 0],
    [900, 100, 1, 0],
    [950, 110, 1, 0],
    [1000, 150, 1, 3]
  ], //beethoven
  [
    [130, 90, 1, 0],
    [190, 60, 1, 0],
    [250, 110, 1, 0],
    [310, 90, 1, 0],
    [370, 80, 1, 0],
    [430, 110, 1, 0],
    [480, 95, 1, 1],
    [540, 90, 1, 1],
    [600, 85, 1, 0],
    [660, 95, 1, 0],
    [720, 85, 1, 0],
    [780, 95, 1, 0],
    [840, 95, 1, 0],
    [900, 150, 1, 3]
  ], //bach
  [
    [70, 100, 1, 1],
    [110, 100, 1, 1],
    [165, 70, 1, 2],
    [210, 90, 1, 1],
    [250, 100, 1, 1],
    [310, 85, 1, 2],
    [350, 120, 1, 1],
    [390, 130, 1, 1],
    [450, 120, 1, 0],
    [490, 110, 1, 0],
    [530, 100, 1, 0],
    [575, 110, 1, 2],
    [620, 120, 1, 1],
    [660, 120, 1, 1],
    [720, 80, 1, 2],
    [760, 110, 1, 1],
    [800, 110, 1, 1],
    [860, 110, 1, 2],
    [900, 140, 1, 1],
    [940, 160, 1, 1],
    [990, 80, 1, 0],
    [1030, 90, 1, 0],
    [1070, 100, 1, 0],
    [1110, 160, 1, 3]
  ] //brahms
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
    document.getElementById("range").value = 20 + 20 * this.level;
  }
  win() {
    let _this = this;
    let img = document.getElementById(authors[game.level]);
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    let x = 250;
    let int = setInterval(function() {
      x--;
      if (x === 80) {
        clearInterval(int);
        setTimeout(() => {
          _this.levelUp();
          setTimeout(() => (_this.isStarted = true), 2000);
        }, 2000);
      }
      ctx.clearRect(0, 0, 1200, 400);
      ctx.drawImage(img, 500, x, 200, 300);
    }, 5);
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
    console.log(game);
    console.log(this);
    game.scores = notesPositions[game.level].length;
    let root = document.getElementById("root");
    let pannel = document.getElementById("pannel");
    root.removeChild(pannel);
    let oldPannel = document.getElementById(authors[this.level] + "_pannel");
    let newPannel = oldPannel.cloneNode();
    newPannel.id = "pannel";
    newPannel.className = "pannel";
    root.appendChild(newPannel);
    this.speed();
    document.getElementById("s" + "5").oncanplay = () => console.log("load");
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
      uniq.map((sound, index) => {
        let id = "s" + index;
        let song = document.getElementById(id);
        song.pause();
        song.currentTime = 0;
      });
      return true;
    } else {
      return false;
    }
  }
  drawNotes() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 1200, 400);
    game.notesPositions.map(function(note) {
      if (note[2] === 0) {
        return;
      }
      let nota = document.getElementById(note[3]);
      let img = nota.cloneNode();
      ctx.drawImage(img, note[0], note[1], 40, 75);
    });
  }
}

class Plane {
  constructor(speed) {
    this.image = "images/plane.png";
    this.speed = speed;
    this.position = { x: -100, y: 150 };
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
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var image = document.getElementById("plane");
    let y = this.position.y;
    if (y >= 285 || y <= -45) {
      this.crash();
      this.position.y = 250;
      this.position.x = -100;
    }
    ctx.clearRect(0, 0, 1200, 400);
    game.drawNotes();
    ctx.drawImage(image, this.position.x, this.position.y, 100, 100);
    game.notesPositions.map((note, index) => {
      if (game.activeNote !== index && index >= game.activeNote) {
        let n = game.detectCollision(plane, note, index);
        if (n) {
          game.activeNote = index;
          let soundId = sounds[game.level][index];
          let id = uniq.indexOf(soundId);
          let audio = document.getElementById("s" + id);
          audio.currentTime = 0;
          audio.play();
        }
      }
    });
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
let promise = new Promise(function(resolve) {
  loadAudio(resolve);
});
promise.then(x => start());

function start() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("root").style.display = "flex";
  game.levelUp();
  requestAnimationFrame(gameLoop);
  game.drawNotes();
  plane.draw();
  setTimeout(function() {
    plane.draw();
  }, 1000);
}
console.log("final V3");
let lastTime = 0;
function gameLoop(timestamp) {
  setTimeout(function() {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    plane.update(deltaTime);
    requestAnimationFrame(gameLoop);
  }, 15);
}
