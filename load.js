function loadImages(resolve, reject) {
  let res = resolve;
  let rej = reject;
  let err = setTimeout(() => {
    rej("errordog");
  }, 3000);

  let bg = document.getElementById("res");
  let length = authors.length;
  let i = 0;
  let sum = 0;
  let allLength = length;
  authors();
  notes();
  let timer = setInterval(() => {
    if (sum >= allLength) {
      clearInterval(timer);
      console.log("loaded images");
      setTimeout(() => {
        clearTimeout(err);
        res("dog");
      }, 2000);
    }
  });
  function authors() {
    while (i < length) {
      let author = authors[i];
      let img = document.createElement("img");
      img.id = author;
      img.src = `images/authors/${author}.gif`;
      img.width = "200";
      img.height = "300";
      img.onloadeddata = () => sum++;
      bg.appendChild(img);
      i++;
    }
  }
  function notes() {
    let i1 = 0;
    while (i1 < 4) {
      let img = document.createElement("img");
      img.src = `images/notes/${i1}.png`;
      img.width = "150";
      img.id = i1;
      img.onloadeddata = () => sum++;
      bg.appendChild(img);
      i1++;
    }
  }
}

function loadAudio(resolve, reject) {
  let res = resolve;
  let bg = document.getElementById("cords");
  let length = uniq.length;
  let i = 0;
  let progress = document.getElementById("progressBar");
  let sum = 0;
  audios();
  let timer = setInterval(() => {
    if (sum >= length) {
      clearInterval(timer);
      console.log("loaded audio");
      res("cat");
    }
  }, 500);
  function audios() {
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
  }
}
