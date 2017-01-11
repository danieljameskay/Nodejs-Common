"use strict";

const fs = require('fs'),

        // argv is an argument vector which accepts command-line arguments.
        filename = process.argv[2];

if(!filename){
    throw Error("A file to watch must be specified");
};

fs.watch(filename, function(){
    console.log("File " + filename + " has just changed.");
});

console.log("Now watching " + filename + " for changes.");