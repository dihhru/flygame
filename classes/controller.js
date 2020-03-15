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
    let closest = this.notesPositions.reduce((a, b) => {
      return Math.abs(b[0] - needle) < Math.abs(a[0] - needle) ? b : a;
    });
    notes.drawNotes(notesPositions);
    let val = notes.detectCollision(x, y, closest);
    if (val) {
      console.log(val);
      this.play(closest);
    }
    //notes.check(x, y);
  }
  play(note) {
    console.log(note);
    let index = this.notesPositions.indexOf(note);
    let sound = sounds[this.level][index];
    let id = uniq.indexOf(sound);
    console.log(id);
    // document.getElementById("s" + _this.activeNote).pause();
    //   document.getElementById("s" + _this.activeNote).currentTime = 0;
    //   document.getElementById("s" + id).play();
    //   _this.notesPositions[index][2] = 0;
    // _this.scores--;
    //    _this.activeNote = id;
  }
  restart() {
    this.setPannel();
    plane.position.x = 0;
  }
  togglePause() {
    this.isStarted = !this.isStarted;
  }
}
