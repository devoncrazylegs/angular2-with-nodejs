var stream = require("stream");
var util = require("util");

/**
 *
 */
function BufferStream(source) {
    if(!Buffer.isBuffer(source)) {
        throw(new Error("The source must be a buffer"));
    }

    stream.Readable.call(this);

    this._source = source;

    this._offset = 0;
    this._length = source.length;

    this.on("end", this._destroy);
}

BufferStream.prototype._read = function(size) {
    if(this._offset < this._length) {
        this.push(this._source.slice(this._offset, (this._offset + size)));
        this._offset += size;
    }

    if(this._offset >= this._length) {
        this.push(null);
    }
};

BufferStream.prototype._destroy = function() {
    this._source = null;
    this._length = null;
    this._offset = null;
};

util.inherits(BufferStream, stream.Readable);

module.exports = BufferStream;