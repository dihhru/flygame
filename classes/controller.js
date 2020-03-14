class Controller {
  constructor(pannel, plane, notes) {
    this.allNotesPositions = notesPositions;
    this.pannel = pannel;
    this.plane = plane;
    this.notes = notes;
    this.isStarted = true;
    this.level = 0;
    this.position = { x: 0, y: 300 };
    this.restart = this.restart.bind(this);
  }
  startLvl() {
    let { pannel, allNotesPositions, level } = this;
    this.activeNote = 0;
    this.notesPositions = JSON.parse(JSON.stringify(allNotesPositions[level]));
    this.scores = notesPositions[level].length;
    pannel.setPannel(this.level);
  }
  newLvl(level) {
    this.level = level;
    this.activeNote = 0;
    this.notesPositions = JSON.parse(JSON.stringify(notesPositions[level]));
    this.scores = notesPositions[level].length;
    this.border(this.notesPositions);
  }
  border(arr = this.notesPositions) {
    let last = [...arr].pop().slice(0, 1);
    return last;
  }
  restart() {
    this.setPannel();
    plane.position.x = 0;
  }
  togglePause() {
    this.isStarted = true;
    plane.speed = 0;
  }
  move() {
    this.position.x += 2 * this.plane.speed;
    this.position.y = this.plane.updateY();
  }
  update(level = 0) {
    if (!this.isStarted) {
      return;
    }
    this.move();
    let { plane, notes, notesPositions } = this;
    let { x, y } = this.position;
    console.log(x);
    let border = notes.border();
    if (x > border) {
      this.isStarted = false;
      this.level++;
      this.win(this.level);
    }
    pannel.draw(x);
    plane.draw(x, y);
    notes.drawNotes(notesPositions);
    //notes.check(x, y);
  }
  setPosition() {
    return null;
  }
  pause() {
    return null;
  }
}
