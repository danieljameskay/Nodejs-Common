const http = require('http');

// Another example. By using events we can nicely seperate code.

let server1 = new http.Server();

// The "connection" event is emitted when a connection is made to the server.
server1.on('connection', socket => {
    let date = Date.now();
    console.log(`Client conneted at ${date}.`);
    socket.on('end', () => console.log('Client left.'))
});

// The "request" event is emitted when a request is made to the server.
server1.on('request', (req,res) => {
    req.setEncoding('utf8');

    // The "readable" event is emitted when a request's data is available.
    req.on('readable', () => {
        let data = req.read();
        data && res.end();
    });
});

// To disbale socket timeouts pass 0.

server1.setTimeout(2000, socket => socket.end());
server1.listen();