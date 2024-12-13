const { Notification } = require("electron")

module.exports = function systemOffline() {
    new Notification({
        title: 'V-Shelf | Sistema fora do ar',
        body: 'Aparentemente nosso sistema está fora do ar, tente novamente mais tarde.',
        urgency: 'critical',
        timeoutType: 'default',
    }).show()
}