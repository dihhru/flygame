class Plane extends Object {
  constructor(speed = 1) {
    super();
    this.image = "images/plane.png";
    this.speed = speed;
    this.size = 100;
    this.distance = 0;
    this.setSpeed = this.setSpeed.bind(this);
    this.y = 150;
    this.x = 0;
  }
  moveY(y) {
    let position = this.y;
    y === "-" ? (position += 15) : (position -= 15);
    return (this.y = position);
  }
  update() {
    this.x += 2 * this.speed;
    this.y += 0.2;
    if (this.y < 0 || this.y > 600) {
      this.crash();
      this.y = 300;
    }
    return { y: this.y, x: this.x };
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
