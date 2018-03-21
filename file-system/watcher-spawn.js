"use strict";

const fs = require('fs'),

// returns the spawn function of the child_process module.
spawn = require('child_process').spawn,
filename = process.argv[2];

if(!filename){
    throw Error("A file to watch must be specified");
}

// first argument to spawn is the name of the program we want to execute, then 
// second is an array of arguments..in this case a flag and a filename.
fs.watch(filename, () => {
    const ls = spawn('ls', ['-lh', filename]);
    ls.stdout.pipe(process.stdout);
});

console.log(`Now watching ${filename} for changes.`);