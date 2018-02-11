const { Writable } = require('stream');

class CountStream extends Writable {
  constructor(matchStr, options) {
    super(options)
    this.count = 0
    this.matchExp = new RegExp(matchStr, 'g')
  }
  _write(chunk, encoding, callback) {
    var matches = chunk.toString().match(this.matchExp)
    if (matches) {
      this.count += matches.length;
    }
    callback()
  }
  end() {
    this.emit('total', this.count)
  }
}

module.exports = CountStream