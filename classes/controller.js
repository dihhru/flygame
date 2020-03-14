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
    console.log(this.border);
    pannel.setPannel(this.level);
  }
  move() {
    this.position.x += 2 * this.plane.speed;
    this.position.y = this.plane.updateY();
  }
  update() {
    this.move();
    let { plane, notes, notesPositions } = this;
    let { x, y } = this.position;
    if (x > this.border) {
      this.level++;
      this.startLvl(this.level);
    }
    pannel.draw(x);
    plane.draw(x, y);
    notes.drawNotes(notesPositions);
    notes.detectCollision(x, y);
    //notes.check(x, y);
  }
  restart() {
    this.setPannel();
    plane.position.x = 0;
  }
  togglePause() {
    this.isStarted = true;
    plane.speed = 0;
  }
}
