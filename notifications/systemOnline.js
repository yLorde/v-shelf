const { Notification } = require("electron");

module.exports = function systemOnline() {
    new Notification({
        title: 'V-Shelf | Aplicativo',
        body: 'O seu aplicativo de controle de filmes e séries foi iniciado com sucesso!',
        silent: true,
        urgency: 'low',
        timeoutType: 'default'
    }).show()
};