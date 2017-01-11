"use strict";

const fs = require('fs'),

        // returns the spawn function of the child_process module.
        spawn = require('child_process').spawn,
        filename = process.argv[2];

if(!filename){
    throw Error("A file to watch must be specified");
}

fs.watch(filename, function(){
    let ls = spawn('ls', ['-lh', filename]);
    ls.stdout.pipe(process.stdout);
});

console.log("Now watching " + filename + " for changes.");