class Game {
  constructor() {
    this.scores = notesPositions.length;
    this.isStarted = false;
    this.level = -1;
    this.notesPositions = null;
    this.activeNote = 0;
    this.restart = this.restart.bind(this);
  }
  restart() {
    this.level--;
    this.buildLevel();
    plane.position.x = 0;
  }
  test() {
    return true;
  }
  win() {
    let img = document.getElementById(authors[game.level]);
    let clone = img.cloneNode();
    let root = document.getElementById("root");
    clone.className = "author";
    root.appendChild(clone);
    setTimeout(() => clone.classList.add("authorA"), 200);
    setTimeout(() => {
      root.removeChild(clone);
      document.getElementById("loading").style.display = "";
      game.buildLevel();
    }, 3500);
  }
  buildLevel() {
    game.notesPositions = null;
    game.activeNote = 0;
    this.level++;
    if (this.level == 4) {
      this.level = 0;
    }
    game.notesPositions = JSON.parse(
      JSON.stringify(notesPositions[game.level])
    );
    game.scores = notesPositions[game.level].length;
    let root = document.getElementById("root");
    let pannel = document.getElementById("pannel");
    root.removeChild(pannel);
    let oldPannel = document.getElementById(`${authors[game.level]}_pannel`);
    let newPannel = oldPannel.cloneNode();
    newPannel.id = "pannel";
    newPannel.className = "pannel";
    newPannel.onload = () => {
      document.getElementById("loading").style.display = "none";
      game.isStarted = true;
    };
    root.appendChild(newPannel);
  }
  togglePause() {
    this.isStarted = true;
    plane.speed = 0;
  }
  detectCollision(planeX, planeY, note) {
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
    let img = nota;
    if (note[3] === 3) {
      ctx.drawImage(img, note[0], note[1], 70, 120);
    } else {
      ctx.drawImage(img, note[0], note[1], 55, 85);
    }
  }
  drawNotes() {
    let _this = this;
    game.notesPositions.map(function(note) {
      if (note[2] === 0) {
        return;
      }
      _this.draw(note);
    });
  }
}
