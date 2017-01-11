"use strict";

const fs = require('fs');

// When target.txt is modified, the callback is invoked.
fs.watch('target.txt', function(){
    console.log("File 'target.txt' just changed!");
});

console.log('Now watching target.txt for changes...');