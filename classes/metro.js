class Metro extends Object {
  constructor(plane) {
    super((name = "metro"));
    this.speed = 0;
    this.plane = plane;
  }
  setSpeed(plane = this.plane) {
    let metro = document.getElementById(this.name);
    metro.onclick = () => plane.setSpeed();
  }
}
