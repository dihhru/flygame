let sum = 0;
function loadAudio(resolve) {
  let res = resolve;
  let bg = document.getElementById("cords");
  let length = uniq.length;
  let i = 0;
  let progress = document.getElementById("progressBar");
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
      progress.style.width = (100 / length) * sum + "%";
    };
    bg.appendChild(doc);
    i++;
  }
  let timer = setInterval(() => {
    if (sum === length) {
      clearInterval(timer);
      console.log("loaded audio");
      res();
    }
  }, 500);
}
