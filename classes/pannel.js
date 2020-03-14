class Pannel {
  constructor(plane, notes, level = 0) {
    this.plane = plane;
    this.notes = notes;
    this.isStarted = false;
    this.level = null;
    this.speed = 0;
    this.position = { x: 0, y: 300 };
    this.size = 100;
    this.distance = 0;
    this.restart = this.restart.bind(this);
  }

  win(level) {
    let _this = this;
    this.position.x = 0;
    let img = document.getElementById(authors[level]);
    let clone = img.cloneNode();
    let root = document.getElementById("root");
    clone.className = "author";
    root.appendChild(clone);
    setTimeout(() => clone.classList.add("authorA"), 200);
    setTimeout(() => {
      root.removeChild(clone);
      document.getElementById("loading").style.display = "";
      _this.notes.newLevel(level);
      _this.setPannel(level);
    }, 3500);
  }
  setPannel(level = 0) {
    let loading = document.getElementById("loading");
    loading.style.display = "none";
    let root = document.getElementById("root");
    let pannel = document.getElementById("pannel");
    root.removeChild(pannel);
    let oldPannel = document.getElementById(`${authors[level]}_pannel`);
    let newPannel = oldPannel.cloneNode();
    newPannel.id = "pannel";
    newPannel.className = "pannel";
    newPannel.onload = () => {
      document.getElementById("loading").style.display = "none";
    };
    root.appendChild(newPannel);
  }
  draw(x) {
    let pannel = document.getElementById("pannel");
    ctx.drawImage(pannel, 0, -160, 3600, 860);
    ctx.setTransform(1, 0, 0, 1, 0, 0); //reset the transform matrix as it is cumulative
    ctx.translate(-x, 0);
  }
}
