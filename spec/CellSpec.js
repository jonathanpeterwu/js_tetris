describe("Cells", function(){
  var cell;

  beforeEach(function(){
    cell = new Cell({'x': 1, 'y': 1, 'color': 'green'});
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
});

