describe("Game", function() {
  const game = new Game();
  let arr = [];
  it("collision", function() {
    assert.isBoolean(game.detectCollision(0, 0, arr));
  });
});
