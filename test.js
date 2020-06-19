const fs = require('fs');
const downloads = require('.');
fs.statSync(downloads());
console.log(downloads());
