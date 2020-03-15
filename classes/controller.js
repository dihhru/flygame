class Controller {
  constructor(pannel, plane, notes) {
    this.allNotesPositions = notesPositions;
    this.pannel = pannel;
    this.plane = plane;
    this.notes = notes;
    this.isStarted = true;
    this.level = null;
    this.position = { x: 0, y: 300 };
    this.restart = this.restart.bind(this);
    this.border = null;
    this.activeNote = null;
  }
  startLvl(lvl = 0) {
    this.position.x = 0;
    let { pannel, allNotesPositions } = this;
    this.level = lvl;
    this.activeNote = 0;
    this.notesPositions = JSON.parse(
      JSON.stringify(allNotesPositions[this.level])
    );
    this.scores = this.notesPositions[this.level].length;
    this.border = [...this.notesPositions].pop().slice(0, 1);
    pannel.setPannel(this.level);
  }
  move() {
    this.position.x += 2 * this.plane.speed;
    this.position.y = this.plane.updateY();
  }
  update() {
    if (!this.isStarted) {
      return;
    }
    this.move();
    let { plane, notes, notesPositions } = this;
    let { x, y } = this.position;
    if (x > this.border) {
      this.level++;
      this.startLvl(this.level);
    }

    pannel.draw(x);
    plane.draw(x, y);
    let needle = x;
    let arr = this.notesPositions.filter(el => el[2] !== 0);
    console.log(arr);
    let closest = arr.reduce((a, b) => {
      return Math.abs(b[0] - needle) < Math.abs(a[0] - needle) ? b : a;
    });
    notes.drawNotes(notesPositions);
    let val = notes.detectCollision(x, y, closest);
    if (val) {
      this.play(closest);
    }
  }
  play(note) {
    let index = this.notesPositions.indexOf(note);
    let sound = sounds[this.level][index];
    let id = uniq.indexOf(sound);
    if (!!this.activeNote) {
      document.getElementById("s" + this.activeNote).pause();
      document.getElementById("s" + this.activeNote).currentTime = 0;
    }
    document.getElementById("s" + id).play();
    this.activeNote = id;
    this.notesPositions[index][2] = 0;
    this.scores--;
    this.activeNote = id;
  }
  restart() {
    this.setPannel();
    plane.position.x = 0;
  }
  togglePause() {
    this.isStarted = !this.isStarted;
  }
}
