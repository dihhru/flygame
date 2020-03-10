class Plane {
  constructor(speed) {
    this.image = "images/plane.png";
    this.speed = 1;
    this.position = { x: 0, y: 150 };
    this.size = 100;
    this.distance = 0;
  }
  moveY(x) {
    x === "-" ? (this.position.y += 15) : (this.position.y -= 15);
  }

  update() {
    let range = document.getElementById("range").value;
    this.distance = 0.2 * range;
    if (game.isStarted === false) {
      return;
    }
    this.position.x += this.distance;
    this.position.y += 0.5 * this.distance;

    this.draw();
  }
  crash() {
    let audio = document.createElement("audio");
    audio.src = "sounds/crash_sound.wav";
    audio.play();
  }
  draw() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var image = document.getElementById("plane");
    let pannel = document.getElementById("pannel");
    let y = this.position.y;
    ctx.drawImage(pannel, 0, -160, 3600, 860);
    ctx.setTransform(1, 0, 0, 1, 0, 0); //reset the transform matrix as it is cumulative
    ctx.translate(-this.position.x, 0);
    ctx.drawImage(image, this.position.x + 10, this.position.y, 100, 100);
    game.drawNotes();
    let planeX = this.position.x + 200;
    let planeY = this.position.y;
    game.notesPositions.map((note, index) => {
      let n = game.detectCollision(planeX, planeY, note, index);
      if (n) {
        game.notesPositions[index][2] = 0;
      }
    });
  }
}
