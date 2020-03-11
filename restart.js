class Restart {
  constructor(plane) {
    this.speed = 0;
  }
  create(game) {
    let root = document.getElementById("root");
    let restart = document.createElement("img");
    let _this = this;
    restart.className = "restart";
    restart.id = "restart";
    restart.src = `images/restart.png`;
    restart.ontouchstart = e => {
      e.stopPropagation();
    };
    restart.onclick = function() {
      game.restart();
    };
    root.appendChild(restart);
  }
}
