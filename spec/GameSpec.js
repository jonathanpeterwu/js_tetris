describe("Game", function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });
  describe("A Game", function(){
    it("should have a canvas size of 600x1000px", function(){
      expect(game.height).toEqual('1000px');
      expect(game.width).toEqual('600px');
    });
  });
});