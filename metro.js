class Metro {
  constructor(plane) {
    this.speed = 1;
  }
  create(plane) {
    let root = document.getElementById("root");
    let metro = document.createElement("img");
    let _this = this;
    metro.className = "metro";
    metro.id = "metro";
    metro.src = "images/speed1.png";
    metro.ontouchstart = e => {
      e.stopPropagation();
    };
    metro.onclick = function() {
      _this.setSpeed(plane);
    };
    root.appendChild(metro);
  }
  setSpeed(plane) {
    if (this.speed === 3) {
      this.speed = 0;
    }
    this.speed++;
    plane.speed = this.speed;
    console.log(this.speed);
    console.log(plane.speed);
  }
}
