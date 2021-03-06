class Object {
  constructor(name, func) {
    this.name = name;
    this.func = func;
  }
  create(func = this.func) {
    let root = document.getElementById("tools");
    let object = document.createElement("img");
    object.className = "object";
    object.id = this.name;
    object.src = `images/other/${this.name}.png`;
    object.ontouchstart = e => {
      e.stopPropagation();
    };
    object.onclick = func;
    root.appendChild(object);
  }
  draw(img, x, y, width, height) {
    img = document.getElementById(img);
    ctx.drawImage(img, x, y, width, height);
  }
}
