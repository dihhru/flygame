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
          controller.isStarted = !controller.isStarted;
          break;
        case 13:
          controller.isStarted = !controller.isStarted;
          break;
        default:
          break;
      }
    });
    document.addEventListener(
      "touchstart",
      event => {
        let height = document.documentElement.clientHeight;
        let touchY = event.targetTouches[0].clientY;
        let middle = height / 2;
        touchY >= middle ? plane.moveY("-") : plane.moveY("+");
        controller.isStarted = true;
      },
      false
    );
  }
}
