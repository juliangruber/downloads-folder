const downloads = require('.');

console.log(`System: ${downloads()}`);
console.log(`Darwin: ${downloads.darwin()}`);
console.log(`Unix: ${downloads.unix()}`);
console.log(`Windows: ${downloads.windows()}`);
