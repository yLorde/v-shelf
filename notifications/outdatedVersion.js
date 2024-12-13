const { Notification } = require("electron")

module.exports = function systemOffline() {
    new Notification({
        title: 'V-Shelf | Atualização disponível',
        body: 'Encontramos uma versão mais recente, vá para as configurações para atualizar!',
        urgency: 'normal',
        timeoutType: 'default',
    }).show()
}