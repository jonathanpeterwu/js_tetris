var Cell = function( attribs ){
  this.x = attribs.x || null;
  this.y = attribs.y || null;
  this.color = null
}

Cell.prototype = {
  updateColor: function( color ){
    this.color = color
  }
};

