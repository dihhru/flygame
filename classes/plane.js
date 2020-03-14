class Plane {
  constructor(speed = 1) {
    this.image = "images/plane.png";
    this.speed = speed;
    this.size = 100;
    this.distance = 0;
    this.setSpeed = this.setSpeed.bind(this);
    this.y = 150;
  }
  draw(x, y) {
    plane = document.getElementById("plane");
    ctx.drawImage(plane, x, y, 100, 100);
  }
  moveY(y) {
    let position = this.y;
    y === "-" ? (position += 15) : (position -= 15);
    return (this.y = position);
  }
  updateY() {
    this.y += 0.2;
    if (this.y < 0 || this.y > 600) {
      this.crash();
      this.y = 300;
    }
    return this.y;
  }
  crash() {
    let audio = document.createElement("audio");
    audio.src = "sounds/crash_sound.wav";
    audio.play();
  }
  setSpeed() {
    let metro = document.getElementById("metro");
    metro.onclick = () => this.setSpeed();
    this.speed++;
    if (this.speed === 4) {
      this.speed = 1;
    }
    let src = `./images/metronome/speed${this.speed}.png`;
    metro.src = src;
    plane.speed = this.speed;
  }
}
