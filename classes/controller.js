class Controller {
  constructor(pannel, plane, notes) {
    this.plane = plane;
    this.notes = notes;
    this.isStarted = false;
    this.level = null;
    this.speed = 1;
    this.position = { x: 0, y: 300 };
    this.size = 100;
    this.distance = 0;
    this.restart = this.restart.bind(this);
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
      console.log(1);
      return;
    }
    this.move();
    let { plane, notes } = this;
    let { x, y } = this.position;
    let border = notes.border();
    if (x > border) {
      this.isStarted = false;
      this.level++;
      this.win(this.level);
    }
    pannel.draw(x);
    plane.draw(x, y);
    notes.drawNotes();
    notes.check(x, y);
  }
  setPosition() {
    return null;
  }
  pause() {
    return null;
  }
}
