class InputHandler {
  constructor(plane, controller) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 38:
          plane.moveY("+");
          break;
        case 40:
          plane.moveY("-");
          break;
        case 32:
          controller.isStarted = !this.isStarted;
          break;
        case 13:
          controller.isStarted = !this.isStarted;
          break;
        default:
          break;
      }
    });
  }
}
class TouchScreen {
  constructor(plane, game) {
    document.body.addEventListener(
      "touchstart",
      event => {
        let height = document.documentElement.clientHeight;
        let touchY = event.targetTouches[0].clientY;
        let middle = height / 2;
        touchY >= middle ? plane.moveY("-") : plane.moveY("+");
        game.isStarted = true;
      },
      false
    );
  }
}
