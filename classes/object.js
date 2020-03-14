class Object {
  constructor(name, func) {
    this.name = name;
    this.func = func;
  }
  create(func = this.func) {
    let root = document.getElementById("tools");
    let object = document.createElement("img");
    let _this = this;
    object.className = "object";
    object.id = this.name;
    object.src = `images/other/${this.name}.png`;
    object.ontouchstart = e => {
      e.stopPropagation();
    };
    object.onclick = func;
    root.appendChild(object);
  }
}
