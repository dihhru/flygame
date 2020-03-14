class Notes {
  constructor(notesPositions) {
    this.level = null;
    this.allNotesPositions = notesPositions;
    this.scores = notesPositions.length;
    this.notesPositions = null;
  }
  // check(planeX, planeY) {
  //   let _this = this;
  //   planeX = planeX + 50;
  //   this.notesPositions.map((note, index) => {
  //     if (_this.notesPositions[index][2] === 0) {
  //       return;
  //     }
  //     let n = _this.detectCollision(planeX, planeY, note, index);
  //     if (n) {
  //       let sound = sounds[this.level][index];
  //       let id = uniq.indexOf(sound);
  //       document.getElementById("s" + _this.activeNote).pause();
  //       document.getElementById("s" + _this.activeNote).currentTime = 0;
  //       document.getElementById("s" + id).play();
  //       _this.notesPositions[index][2] = 0;
  //       _this.scores--;
  //       _this.activeNote = id;
  //     }
  //   });

  // let last = [...this.notesPositions].pop();
  //  if (this.position.x > last[0]) {
  //   this.position.x = 0;
  //  if (this.scores < 3) {
  //    this.isStarted = false;
  //    this.win();
  //  } else {
  //   this.restart();
  //  }
  //  }

  drawNotes(notes) {
    let _this = this;
    notes.map(function(note) {
      if (note[2] === 0) {
        return;
      }
      _this.draw(note);
    });
  }
  draw(note) {
    let nota = document.getElementById(note[3]);
    if (nota === null) {
      return;
    }
    let img = nota;
    if (note[3] === 3) {
      ctx.drawImage(img, note[0], note[1], 70, 120);
    } else {
      ctx.drawImage(img, note[0], note[1], 55, 85);
    }
  }
  detectCollision(planeX, planeY, note, index) {
    if (Array.isArray(note)) {
      let posX = planeX >= note[0] - 100 && planeX <= note[0] + 50;
      let posY = planeY >= note[1] - 75 && planeY <= note[1] + 75;
      let value;
      posX && posY ? (value = true) : (value = false);
      return value;
    }
    return false;
  }
}
