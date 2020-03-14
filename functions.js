function sreenSize() {
  let root = document.getElementById("root");
  let canvas = document.getElementById("canvas");
  let loading = document.getElementById("loading");
  let width = document.documentElement.clientWidth;
  let height = document.documentElement.clientHeight;
  let n;
  n = 2.2;
  if (width < height) {
    height = height / 2;
    n = 2;
  }
  loading.style.width = width + "px";
  loading.style.height = height + "px";
  root.style.width = width + "px";
  canvas.style.width = width + "px";
  root.style.height = height + "px";
  canvas.style.height = height + "px";
  for (let i = 0; i < notesPositions.length; i++) {
    notesPositions[i] = notesPositions[i].map(function(x) {
      x[0] = x[0] * n;
      x[1] = x[1] * 2;
      return x;
    });
  }
}
function loadAudio(resolve) {
  let res = resolve;
  let bg = document.getElementById("cords");
  let counter = [];
  let length = uniq.length;
  let i = 0;
  let progress = document.getElementById("progressBar");
  while (i < length) {
    counter[i] = 0;
    let index = i;
    let sound = uniq[i];
    let doc = document.createElement("audio");
    doc.preload = "auto";
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
  pannel.setPannel(0);
  document.getElementById("root").style.display = "flex";
}
let lastTime = 0;
function gameLoop(timestamp) {
  setTimeout(function() {
    lastTime = timestamp;
    controller.update();
    requestAnimationFrame(gameLoop);
  }, 10);
}
