class Notes extends Object {
  constructor() {
    super();
    this.notesPositions = null;
    this.level = null;
    this.scores = notesPositions.length;
    this.activeNote = null;
  }
  content(level, notesPositions, scores) {
    this.level = level;
    this.notesPositions = notesPositions;
    this.scores = scores;
  }
  play(note) {
    let level = this.level;
    if (!!this.activeNote) {
      document.getElementById(this.activeNote).pause();
      document.getElementById(this.activeNote).muted = true;
      document.getElementById(this.activeNote).currentTime = 0;
    }
    let index = this.notesPositions.indexOf(note);
    let sound = sounds[level][index];
    let id = uniq.indexOf(sound);
    this.notesPositions[index][2] = 0;
    this.scores--;
    this.activeNote = "s" + id;
    let doc = document.getElementById("s" + id);
    doc.muted = false;
    doc.play();
  }
  check(x, y) {
    let needle = x;
    let arr = this.notesPositions.filter(el => el[2] !== 0);
    if (!arr.length) {
      return;
    }
    let closest = arr.reduce((a, b) => {
      return Math.abs(b[0] - needle) < Math.abs(a[0] - needle) ? b : a;
    });
    let val = notes.detectCollision(x, y, closest);
    if (val) {
      this.play(closest);
    }
  }
  drawNotes() {
    let _this = this;
    let notes = this.notesPositions;
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
