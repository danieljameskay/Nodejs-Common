const stream = require('stream');

/**
 * =================================================
 * IMPLEMENTING A READABLE STREAM
 * =================================================
 * 
 * The stream.Readable class is extended to implement a Readable stream.
 * 
 * We then implement the readable._read method.
 */
 
let Feed = function(channel) {
    let readable = new stream.Readable({});
    let news = [
        "Big Win!",
        "Stocks Down!",
        "Actor Sad!"
    ];

    // Implements the _read method which pushes data to a consumer until there is nothing left to push.
    readable._read = () => {
        if(news.length) {
            return readable.push(news.shift() + "\n");
        }
        readable.push("");
    }
    return readable;
}

const feed = new Feed();

feed.on("readable", () => {
    let data = feed.read();
    process.stdout.write(data);
});

feed.on("end", () => {
    console.log("No more news.");
});