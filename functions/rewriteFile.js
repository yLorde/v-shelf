const fs = require('node:fs');

module.exports = function rewriteFile(path, txt) {
    fs.writeFileSync(path, txt, 'utf-8', (func) => { })
};