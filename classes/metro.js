class Metro {
  constructor(plane) {
    this.speed = 0;
  }
  create(plane) {
    let root = document.getElementById("tools");
    let metro = document.createElement("img");
    let _this = this;
    metro.className = "button1";
    metro.id = "metro";
    metro.src = `./images/metronome/speed${this.speed}.png`;
    metro.ontouchstart = e => {
      e.stopPropagation();
    };
    metro.onclick = function() {
      _this.setSpeed(plane);
    };
    metro.onmouseleave = e => e.preventDefault();
    root.appendChild(metro);
    this.setSpeed(plane);
  }
  setSpeed(plane) {
    this.speed++;
    let metro = document.getElementById("metro");
    if (this.speed === 4) {
      this.speed = 1;
    }
    let src = `./images/metronome/speed${this.speed}.png`;
    metro.src = src;
    plane.speed = this.speed;
    console.log(this.speed);
    console.log(plane.speed);
  }
}
