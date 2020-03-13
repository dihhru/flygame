class Restart {
  constructor(plane) {
    this.speed = 0;
  }
  create(game) {
    let root = document.getElementById("tools");
    let restart = document.createElement("img");
    let _this = this;
    restart.className = "button1";
    restart.id = "restart";
    restart.src = `images/other/restart.png`;
    restart.ontouchstart = e => {
      e.stopPropagation();
    };
    restart.onclick = function() {
      game.restart();
    };
    root.appendChild(restart);
  }
}
