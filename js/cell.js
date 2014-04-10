var Cell = function( attribs ){
  this.x = attribs.x || null;
  this.y = attribs.y || null;
  this.color = null
  this.neighbors = [] // these indicate adjacent puzzle pieces
  this.puzzleNeighbors = [] // these indicate cells in same puzzle
}

Cell.prototype = {
  updateColor: function( color ){
    this.color = color
  },
  clearCell: function ( ){
    this.color = null
  },
  updateNeighbors: function( neighbors ){
    if(neighbors.length > 1){
      for(var i = 0; i < neighbors.length; i++){
        console.log("YAY")
        this.neighbors.push(neighbors[i])
      };
    }
    else{
      this.neighbors.push(neighbors)
    }
  },
  updatePuzzleNeighbors: function( puzzle ){
    if(puzzle.length > 1){
      for(var i = 0; i < puzzle.length; i++){
        this.puzzleNeighbors.push(puzzle[i])
      };
    }
    else{
      this.puzzleNeighbors.push(puzzle)
    }
  }
};

