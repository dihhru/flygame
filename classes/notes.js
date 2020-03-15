class Notes extends Object {
  constructor(notesPositions) {
    super();
    this.level = null;
    this.scores = notesPositions.length;
    this.scores--;
    this.activeNote = "s" + id;
  }
  play(notesPositions, level, note) {
    console.log(arguments);
    let index = notesPositions.indexOf(note);
    let sound = sounds[level][index];
    let id = uniq.indexOf(sound);
    let doc = document.getElementById("s" + id);
    doc.muted = false;
    doc.play();
  }
  drawNotes(notes) {
    let _this = this;
    notes.map(function(note) {
      if (note[2] === 0) {
        return;
      }
      let img = note[3];
      _this.draw(img, note[0], note[1], 70, 120);
    });
  }
  detectCollision(planeX, planeY, note, index) {
    if (Array.isArray(note)) {
      let posX = planeX >= note[0] - 100 && planeX <= note[0] + 150;
      let posY = planeY >= note[1] - 75 && planeY <= note[1] + 75;
      let value;
      posX && posY ? (value = true) : (value = false);
      return value;
    }
    return false;
  }
}
