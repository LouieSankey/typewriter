module.exports = Header2;
var Block = require('../blocks/block');


function Header2(text, markups) {
  Block.call(this, text, markups);
}

Block.extend(Header2, {
  static: {
    selector: 'h2'
  },

  toDOM: function() {
    return document.createElement('h2');
  }
});
