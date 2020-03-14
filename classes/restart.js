class Restart extends Object {
  constructor() {
    super((name = "restart"));
    this.speed = 0;
  }
  reload(game) {
    let metro = document.getElementById(this.name);
    metro.onclick = () => game.restart();
  }
}
