class Pannel {
  constructor(level = 0) {
    this.level = level;
    this.isLoaded = false;
  }
  win(level) {
    let _this = this;
    let img = document.getElementById(authors[level]);
    let clone = img.cloneNode();
    let root = document.getElementById("root");
    clone.className = "author";
    root.appendChild(clone);
    setTimeout(() => clone.classList.add("authorA"), 200);
    setTimeout(() => {
      root.removeChild(clone);
      _this.setPannel(level);
      _this.notes.newLevel(level);
    }, 3500);
  }
  setPannel(level = 0) {
    let _this = this;
    loading.style.display = "";
    let root = document.getElementById("root");
    let pannel = document.getElementById("pannel");
    root.removeChild(pannel);
    this.isLoaded = false;
    let oldPannel = document.getElementById(`${authors[level]}_pannel`);
    let newPannel = oldPannel.cloneNode();
    newPannel.id = "pannel";
    newPannel.className = "pannel";
    newPannel.onload = () => {
      loading.style.display = "none";
      _this.isLoaded = true;
    };
    root.appendChild(newPannel);
  }
  draw(x = 0) {
    let pannel = document.getElementById("pannel");
    ctx.drawImage(pannel, 0, -160, 3600, 860);
    ctx.setTransform(1, 0, 0, 1, 0, 0); //reset the transform matrix as it is cumulative
    ctx.translate(-x, 0);
  }
}
