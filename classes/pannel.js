class Pannel extends Object {
  constructor(level = 0) {
    super();
    this.level = level;
    this.isLoaded = false;
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
}
