const sounds = [
  [
    "E2",
    "D2#",
    "E2",
    "D2#",
    "E2",
    "B2",
    "D2",
    "C2",
    "A2",
    "C1",
    "E1",
    "A2",
    "B2",
    "E1",
    "C2",
    "B2",
    "A2"
  ], //Beethoven
  [
    "C1",
    "C1",
    "G1",
    "G1",
    "A2",
    "A2",
    "G1",
    "F1",
    "F1",
    "E1",
    "E1",
    "D1",
    "D1",
    "C1"
  ], //Mozart
  ["D2", "G2", "G1", "B2", "D2", "D1", "G1", "A2", "B2", "G1", "G1", "G1"],
  //Bach
  [
    "C1",
    "C1",
    "G2",
    "E2",
    "C2",
    "D2",
    "B2",
    "G1",
    "C2",
    "D2",
    "E2",
    "D2",
    "C1",
    "C1",
    "G2",
    "E2",
    "C2",
    "D2",
    "B2",
    "G1",
    "C2",
    "B2",
    "A2",
    "G1"
  ]
  //Brahms
];
class Game {
  constructor() {
    this.level = 0;
  }
  drawNotes() {
    let notes = sounds[this.level]; //slice or something
    notes.map(function(note, index) {
      let notes = document.getElementById("notes");
      let img = document.createElement("img");
      img.src = "images/note.png";
      img.style.width = "50px";
      notes.appendChild(img);
    });
  }
}
let game = new Game();
game.drawNotes();
