class Controller {
  constructor(pannel, plane, notes) {
    this.allNotesPositions = notesPositions;
    this.pannel = pannel;
    this.plane = plane;
    this.notes = notes;
    this.isStarted = false;
    this.level = null;
    this.position = { x: null, y: null };
    this.border = null;
    this.startLvl = this.startLvl.bind(this);
  }
  win(level) {
    this.level++;
    this.isStarted = false;
    let _this, img, clone;
    _this = this;
    img = document.getElementById(authors[this.level]);
    clone = img.cloneNode();
    clone.className = "author";
    root.appendChild(clone);
    setTimeout(() => clone.classList.add("authorA"), 200);
    setTimeout(() => {
      root.removeChild(clone);
      _this.level++;
      if (_this.level === authors.length) {
        _this.level = 0;
      }
      _this.startLvl(_this.level);
    }, 3500);
  }
  startLvl(level = 0) {
    this.level = level;
    this.notes.level = level;
    this.plane.x = 0;
    let { pannel, allNotesPositions } = this;
    let arr = JSON.parse(JSON.stringify(allNotesPositions[level]));
    this.border = [...arr].pop().slice(0, 1);
    this.notes.content(this.level, arr, arr.length);
    console.log(this.notes);
    pannel.setPannel(level);
    this.isStarted = true;
  }
  update() {
    if (!this.isStarted) {
      return;
    }
    this.position = this.plane.update();
    let { plane, notes, level } = this;
    let { x, y } = this.position;
    if (x > this.border) {
      this.notes.scores <= 3 ? this.win() : this.startLvl(this.level);
    }
    pannel.draw("pannel", 0, -160, 3600, 860);
    plane.draw("plane", x, y, 100, 100);
    notes.drawNotes();
    notes.check(x, y);
    ctx.setTransform(1, 0, 0, 1, 0, 0); //reset the transform matrix as it is cumulative
    ctx.translate(-x, 0);
  }
}
