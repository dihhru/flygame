let game = new Game();
let plane = new Plane(1);
let input = new InputHandler(plane, game);
let promise = new Promise(function(resolve) {
  requestAnimationFrame(gameLoop);
  loadAudio(resolve);
});
let unqi;
promise.then(x => start());

function loadAudio(resolve) {
  var root = document.getElementById("root");
  var canvas = document.getElementById("canvas");
  // let width = document.documentElement.clientWidth;
  // let height = document.documentElement.clientHeight;
  // root.style.width = width + "px";
  // canvas.style.width = width + "px";
  // root.style.height = height + "px";
  //canvas.style.height = height + "px";
  game.buildLevel();
  plane.draw();
  let files = JSON.parse(JSON.stringify(sounds));
  let res = resolve;
  let arr = files.flat(Infinity);
  let bg = document.getElementById("cords");
  let set = new Set(arr);
  uniq = Array.from(set);
  let counter = [];
  let length = uniq.length;
  let i = 0;
  let progress = document.getElementById("progressBar");
  while (i < length) {
    counter[i] = 0;
    let index = i;
    let sound = uniq[i];
    let doc = document.createElement("audio");
    doc.src = `sounds/${sound}.wav`;
    doc.id = "s" + index;
    bg.appendChild(doc);
    let timer;
    i = timer = setInterval(() => {
      let song = document.getElementById("s" + index);
      if (song.readyState === 4) {
        counter[index] = 1;
        let sum = counter.reduce((a, b) => a + b);
        progress.style.width = (100 / length) * sum + "%";
        console.log(sum);
        if (sum === length) {
          res();
        }
        clearInterval(timer);
        return i++;
      }
    }, 500);
  }
}
function start() {
  let app = document.getElementById("app");
  let loading = document.getElementById("loading");
  app.removeChild(loading);
  document.getElementById("root").style.display = "flex";
  plane.draw();
  setTimeout(function() {
    plane.draw();
  }, 1000);
}
let lastTime = 0;
function gameLoop(timestamp) {
  setTimeout(function() {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    plane.update(deltaTime);
    requestAnimationFrame(gameLoop);
  }, 15);
}
