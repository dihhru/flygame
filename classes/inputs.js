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
<<<<<<< Updated upstream
          var value = game.isStarted;
          game.isStarted = !value;
          break;
        case 13:
          var value = game.isStarted;
          game.isStarted = !value;
=======
          controller.isStarted = !controller.isStarted;
          break;
        case 13:
          controller.isStarted = !controller.isStarted;
          break;
        default:
>>>>>>> Stashed changes
          break;
      }
      document.body.addEventListener(
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
    });
  }
}
<<<<<<< Updated upstream
class TouchScreen {
  constructor(plane, game) {
    document.body.addEventListener(
      "touchstart",
      event => {
        let height = document.documentElement.clientHeight;
        let touchY = event.targetTouches[0].clientY;
        let middle = height / 2;
        touchY >= middle ? plane.moveY("-") : plane.moveY("+");
        console.log(event);
        game.isStarted = true;
      },
      false
    );
  }
}
=======
>>>>>>> Stashed changes
