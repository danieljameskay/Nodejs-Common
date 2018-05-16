const stream = require('stream');

const writable = new stream.Writable({
    decodeStrings: false
});

// Inside _write the logic to write to a destination.
writable._write = (chunk, encoding, callback) => {
  console.log(chunk.toString());
  callback();
};

let written = writable.write(Buffer.alloc(32, 'A'));
writable.end();

console.log(written);
