describe("PuzzlePiece", function(){
  var puzzlePiece;

  beforeEach(function(){
    puzzlePiece = new PuzzlePiece ({'type': 'line', 'color': 'green'})
  })

  describe("A Puzzle Piece", function(){
    it("should have a type == line", function(){
      expect(puzzlePiece.type).toEqual('line')
    });
    it("should not have a type of == pair", function(){
      expect(PuzzlePiece.type).not.toEqual('pair')
    });
    it("should have a color of green", function(){
      expect(puzzlePiece.color).toEqual('green')
    });
    it("should not have a color of null", function(){
      expect(puzzlePiece.color).not.toEqual(null)
    });
  })
});