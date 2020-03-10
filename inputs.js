class InputHandler {
  constructor(plane, game) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 38:
          plane.moveY("+");
          break;
        case 40:
          plane.moveY("-");
          break;
        case 32:
          var value = game.isStarted;
          game.isStarted = !value;
          break;
        case 13:
          var value = game.isStarted;
          game.isStarted = !value;
          break;
      }
    });
  }
}
