// Create a server using http.createServer. 
// It returns a http.server which exends eventemitter so broadcasts events as they occur.

let server = http.createServer((req,res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write('PONG');
    res.end();
}).listen(8080);

server.on("request", (req,res) => {
    req.setEncoding('utf8');
    request.on('readable', () => console.log(req.read()));
    request.on('end', () => console.log("DONE."));
});

