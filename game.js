class Game {
  constructor() {
    this.scores = notesPositions.length;
    this.isStarted = false;
    this.level = -1;
    this.notesPositions = null;
    this.activeNote = 0;
  }
  speed() {
    document.getElementById("range").value = 10 + 7 * this.level;
  }
  win() {
    let img = document.getElementById(authors[game.level]);
    let clone = img.cloneNode();
    let root = document.getElementById("root");
    clone.className = "author";
    root.appendChild(clone);
    setTimeout(() => clone.classList.add("authorA"), 100);
    setTimeout(() => {
      root.removeChild(clone);
      game.buildLevel();
      game.isStarted = true;
    }, 2500);
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
    newPannel.style.display = "none";
    newPannel.style.width = "3600px";
    newPannel.className = "pannel";
    root.appendChild(newPannel);
    this.speed();
  }
  togglePause() {
    console.log(notesPositions);
    plane.speed = 0;
  }
  detectCollision(planeX, planeY, note, index) {
    let posX = planeX >= note[0] - 100 && planeX <= note[0] + 50;
    let posY = planeY >= note[1] - 50 && planeY <= note[1] + 50;
    if (posX && posY) {
      return true;
    }
    return false;
  }
  drawNotes() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    game.notesPositions.map(function(note) {
      if (note[2] === 0) {
        return;
      }
      let nota = document.getElementById(note[3]);
      let img = nota;
      ctx.drawImage(img, note[0], note[1], 40, 75);
    });
  }
}
