class Game {
  constructor(plane, notesPositions) {
    this.plane = plane;
    this.scores = notesPositions.length;
    this.isStarted = false;
    this.level = null;
    this.notesPositions = notesPositions;
    this.activeNote = 0;
    this.image = "images/plane.png";
    this.speed = 1;
    this.position = { x: 0, y: 300 };
    this.size = 100;
    this.distance = 0;
    this.restart = this.restart.bind(this);
  }
  restart() {
    this.buildLevel(this.level);
    plane.position.x = 0;
  }
  win(level) {
    let img = document.getElementById(authors[level]);
    let clone = img.cloneNode();
    let root = document.getElementById("root");
    clone.className = "author";
    root.appendChild(clone);
    setTimeout(() => clone.classList.add("authorA"), 200);
    setTimeout(() => {
      root.removeChild(clone);
      document.getElementById("loading").style.display = "";
      this.buildLevel();
    }, 3500);
  }
  buildLevel(level) {
    this.notesPositions = null;
    this.activeNote = 0;
    this.notesPositions = JSON.parse(JSON.stringify(notesPositions[level]));
    this.scores = notesPositions[level].length;
    let root = document.getElementById("root");
    let pannel = document.getElementById("pannel");
    root.removeChild(pannel);
    let oldPannel = document.getElementById(`${authors[level]}_pannel`);
    let newPannel = oldPannel.cloneNode();
    newPannel.id = "pannel";
    newPannel.className = "pannel";
    newPannel.onload = () => {
      document.getElementById("loading").style.display = "none";
      this.isStarted = true;
    };
    root.appendChild(newPannel);
  }
  togglePause() {
    this.isStarted = true;
    plane.speed = 0;
  }
  detectCollision(planeX, planeY, note, index) {
    if (Array.isArray(note)) {
      let posX = planeX >= note[0] - 100 && planeX <= note[0] + 50;
      let posY = planeY >= note[1] - 75 && planeY <= note[1] + 75;
      let value;
      posX && posY ? (value = true) : (value = false);
      return value;
    }
    return false;
  }
  draw(note) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    let nota = document.getElementById(note[3]);
    if (nota === null) {
      return;
    }
    let img = nota;
    if (note[3] === 3) {
      ctx.drawImage(img, note[0], note[1], 70, 120);
    } else {
      ctx.drawImage(img, note[0], note[1], 55, 85);
    }
  }
  drawNotes() {
    let _this = this;
    this.notesPositions.map(function(note) {
      if (note[2] === 0) {
        return;
      }
      _this.draw(note);
    });
  }
  move() {
    this.distance = 2 * this.speed;
    if (game.isStarted === false) {
      return;
    }
    this.position.x += this.distance;
    this.position.y = this.plane.updateY();
  }
  update(level = 0) {
    let _this = this;
    this.move();
    let plane = this.plane;
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var image = document.getElementById("plane");
    let pannel = document.getElementById("pannel");
    ctx.drawImage(pannel, 0, -160, 3600, 860);
    ctx.setTransform(1, 0, 0, 1, 0, 0); //reset the transform matrix as it is cumulative
    ctx.translate(-this.position.x, 0);
    ctx.drawImage(image, this.position.x + 50, this.position.y, 100, 100);
    this.drawNotes();
    let planeX = this.position.x + 50;
    let planeY = this.position.y;
    this.notesPositions.map((note, index) => {
      if (_this.notesPositions[index][2] === 0) {
        return;
      }
      let n = _this.detectCollision(planeX, planeY, note, index);
      if (n) {
        let sound = sounds[level][index];
        let id = uniq.indexOf(sound);
        document.getElementById("s" + _this.activeNote).pause();
        document.getElementById("s" + _this.activeNote).currentTime = 0;
        document.getElementById("s" + id).play();
        _this.notesPositions[index][2] = 0;
        _this.scores--;
        _this.activeNote = id;
      }
    });
    let last = [...this.notesPositions].pop();
    if (this.position.x > last[0]) {
      this.position.x = 0;
      if (this.scores < 3) {
        this.isStarted = false;
        this.win();
      } else {
        this.restart();
      }
    }
  }
}
