const write = require('stream');

const writeable = new stream.Writeable({
    highWaterMark: 16000,
    decodeStrings: true
});
