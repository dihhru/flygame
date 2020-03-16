class Pannel extends Object {
  constructor(level = 0) {
    super();
    this.level = level;
    this.isLoaded = false;
  }
  setPannel(level) {
    let _this = this;
    loading.style.display = "";
    let root = document.getElementById("root");
    this.isLoaded = false;
    let newPannel = document.getElementById("pannel");
    let pannel = authors[level];
    newPannel.src = `images/pannels/${pannel}_pannel.png`;
    newPannel.id = "pannel";
    newPannel.className = "pannel";
    newPannel.onload = () => {
      loading.style.display = "none";
      _this.isLoaded = true;
    };
    root.appendChild(newPannel);
  }
}
