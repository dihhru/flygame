function sreenSize() {
  let width, height, n;

  width = document.documentElement.clientWidth;
  height = document.documentElement.clientHeight;
  n = 2.2;

  if (width < height) {
    height /= 2;
    n = 2;
  }
  loading.style.width = width + "px";
  loading.style.height = height + "px";

  root.style.width = width + "px";
  root.style.height = height + "px";

  canvas.style.width = width + "px";
  canvas.style.height = height + "px";

  for (let i = 0; i < notesPositions.length; i++) {
    notesPositions[i] = notesPositions[i].map(function(x) {
      x[0] *= n;
      x[1] *= 2;
      return x;
    });
  }
}
function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;
  function wrapper() {
    if (isThrottled) {
      // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    func.apply(this, arguments); // (1)
    isThrottled = true;
    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }
  return wrapper;
}
let sum = 0;
function loadAudio(resolve) {
  let res = resolve;
  let bg = document.getElementById("cords");
  let length = uniq.length;
  let i = 0;
  let progress = document.getElementById("progressBar");
  let timer;
  while (i < length) {
    let sound = uniq[i];
    let doc = document.createElement("audio");

    doc.muted = true; //prevents "user didn't interact with the document first. err"
    doc.src = `sounds/${sound}.wav`;
    doc.id = "s" + i;
    doc.muted = true;
    doc.onloadeddata = function() {
      console.log("loaded");
      sum++;
      console.log(sum);
    };
    bg.appendChild(doc);
    i++;
  }
  timer = setInterval(() => {
    progress.style.width = (100 / length) * sum + "%";
    if (sum === length) {
      clearInterval(timer);
      console.log("loaded audio");
      res();
    }
  }, 500);
}
let game1 = throttle(gameLoop, 20);
function start() {
  pannel.setPannel(0);
  document.getElementById("root").style.display = "";
  game1();
}
let lastTime = 0;

function gameLoop() {
  controller.update();
  requestAnimationFrame(gameLoop);
}
