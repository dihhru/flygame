const authors = ["mozart", "beethoven", "bach", "brahms"];
const sounds = [
  [
    "c1",
    "c1",
    "g1",
    "g1",
    "a2",
    "a2",
    "g1",
    "f1",
    "f1",
    "e1",
    "e1",
    "d1",
    "d1",
    "c1"
  ], //Mozart
  [
    "e2",
    "d2t",
    "e2",
    "d2t",
    "e2",
    "b2",
    "d2",
    "c2",
    "a2",
    "c1",
    "e1",
    "a2",
    "b2",
    "e1",
    "c2",
    "b2",
    "a2"
  ], //Beethoven
  [
    "d2",
    "g2",
    "g1",
    "b2",
    "d2",
    "d1",
    "g1",
    "a2",
    "b2",
    "a2",
    "b2",
    "g1",
    "g1",
    "g1"
  ],
  //Bach
  [
    "c1",
    "c1",
    "g2",
    "e2",
    "c2",
    "d2",
    "b2",
    "g1",
    "d2",
    "e2",
    "c2",
    "d2",
    "c1",
    "c1",
    "g2",
    "e2",
    "c2",
    "d2",
    "b2",
    "g1",
    "c2",
    "b2",
    "a2",
    "g1"
  ]
  //Brahms
];

const notesPositions = [
  [
    [130, 100, 1, 0],
    [190, 100, 1, 0],

    [270, 80, 1, 0],
    [330, 80, 1, 0],

    [390, 75, 1, 0],
    [450, 75, 1, 0],

    [510, 80, 1, 2],
    [570, 80, 1, 0],

    [630, 85, 1, 0],
    [690, 85, 1, 0],

    [750, 90, 1, 0],
    [810, 90, 1, 0],

    [870, 95, 1, 0],
    [930, 150, 1, 3]
  ], //mozart
  [
    [140, 100, 1, 0],
    [190, 110, 1, 0],
    [240, 100, 1, 0],
    [290, 110, 1, 0],
    [340, 100, 1, 0],
    [390, 120, 1, 0],
    [440, 110, 1, 0],
    [490, 120, 1, 0],
    [540, 140, 1, 2],

    [620, 160, 1, 0],
    [670, 140, 1, 0],
    [720, 120, 1, 0],
    [780, 110, 1, 2],

    [850, 130, 1, 0],
    [900, 100, 1, 0],
    [950, 110, 1, 0],
    [1000, 150, 1, 3]
  ], //beethoven
  [
    [130, 90, 1, 0],
    [190, 60, 1, 0],
    [250, 110, 1, 0],
    [310, 90, 1, 0],
    [370, 80, 1, 0],
    [430, 110, 1, 0],
    [480, 95, 1, 1],
    [540, 90, 1, 1],
    [600, 85, 1, 0],
    [660, 95, 1, 0],
    [720, 85, 1, 0],
    [780, 95, 1, 0],
    [840, 95, 1, 0],
    [900, 150, 1, 3]
  ], //bach
  [
    [70, 100, 1, 1],
    [110, 100, 1, 1],
    [165, 70, 1, 2],
    [210, 90, 1, 1],
    [250, 100, 1, 1],
    [310, 85, 1, 2],
    [350, 120, 1, 1],
    [390, 130, 1, 1],
    [450, 120, 1, 0],
    [490, 110, 1, 0],
    [530, 100, 1, 0],
    [575, 110, 1, 2],
    [620, 120, 1, 1],
    [660, 120, 1, 1],
    [720, 80, 1, 2],
    [760, 110, 1, 1],
    [800, 110, 1, 1],
    [860, 110, 1, 2],
    [900, 140, 1, 1],
    [940, 160, 1, 1],
    [990, 80, 1, 0],
    [1030, 90, 1, 0],
    [1070, 100, 1, 0],
    [1110, 160, 1, 3]
  ] //brahms
];