const fs = require('node:fs');

module.exports = function systemAlerts() {
    return fs.readFileSync('./config/system_alerts.conf', 'utf-8');
};