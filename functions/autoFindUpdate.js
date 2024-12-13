const fs = require('node:fs');

module.exports = function autoFindUpdate() {
    return fs.readFileSync('./config/auto_update.conf', 'utf-8');
}