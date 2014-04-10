describe("Cells", function(){
  var cell, cell2, cell3;

  beforeEach(function(){
    cell = new Cell({'x': 1, 'y': 1, 'color': 'green'});
    cell2 = new Cell({'x': 1, 'y': 2})
    cell3 = new Cell({'x': 2, 'y': 1})
    puzzleCell = new Cell({'x': 0, 'y': 0, 'color': 'green'})

  });
  describe("A new Cell", function(){
    it("should have a an attribs of 1,1 for x and y", function(){
      expect(cell.x).toEqual(1);
      expect(cell.y).toEqual(1);
    });
    it("should have color of null", function(){
      expect(cell.color).toEqual(null);
    });
    it("should not have a color", function(){
      expect(cell.color).not.toEqual('green');
    });
    it("should have a neighbors value initialized as []", function(){
      expect(cell.neighbors).toEqual([])
    });
    it("should have one neighbor", function(){
      cell.updateNeighbors( cell2 )
      expect(cell.neighbors).toEqual([cell2])
    });
    it("should have more than one neighbor", function(){
      cell.updateNeighbors( [cell2, cell3] )
      expect(cell.neighbors).toEqual( [cell2, cell3] )
    });
    it("should have a puzzleNeighbors value initialized as []", function(){
      expect(cell.puzzleNeighbors).toEqual([])
    });
    it("should have a puzzleNeighbor", function(){
      cell.updatePuzzleNeighbors( puzzleCell )
      expect(cell.puzzleNeighbors).toEqual( [puzzleCell] )
    });
  });
  describe("Cell method updateColor", function(){
    it("should be called", function(){
      spyOn(cell, 'updateColor')
      cell.updateColor()
      expect(cell.updateColor).toHaveBeenCalled()
    });
    it("should change color", function(){
      cell.updateColor('green')
      expect(cell.color).toEqual('green')
    });
  });
  describe("Cell method clearCell", function(){
    it("should be called", function(){
      spyOn(cell, 'clearCell')
      cell.clearCell()
      expect(cell.clearCell).toHaveBeenCalled()
    });
    it("should change color", function(){
      cell.clearCell()
      expect(cell.color).toEqual(null)
    });
  });

});

