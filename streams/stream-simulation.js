const stream = require('stream');

/**
* DO NOT COMMIT THIS EXAMPLE!
*/

// Create a new writable stream with a high water mark of 10.
const writable = new stream.Writable({
  highWaterMark: 10
});

writable._write = (chunk, encoding, callback, err) => {
  process.stdout.write(chunk);
  callback();
};

function writeData(iterations, writer, data, encoding, cb) {
  (function write() {

    if(!iterations --) {
      return cb()
    }

    if(!writer.write(data, encoding)) {
      console.log(` <wait> highWaterMark of ${writable.highWaterMark} reached`);
      writer.once('drain', write);
    }

  })();

}

writeData(4, writable, 'String longer thatn highWaterMark', 'utf8', () => console.log('finished'))
