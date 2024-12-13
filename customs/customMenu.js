const { Menu, shell } = require("electron");
const autoFindUpdate = require("../functions/autoFindUpdate");
const systemAlerts = require("../functions/systemAlerts");
const fs = require('fs');
const rewriteFile = require("../functions/rewriteFile");

module.exports = function customMenu(app, win) {
    const template = [
        //Exibição
        {
            label: 'Arquivo',
            submenu: [
                {
                    label: 'Abrir pasta',
                    click: () => { },
                },
                {
                    label: 'Carregar lista offline',
                    click: () => { },
                },
                {
                    label: 'Carregar filme',
                    click: () => { },
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Buscar nova versão',
                    click: () => { },
                },
                {
                    label: 'Encerrar Aplicação',
                    click: () => app.quit(),
                }
            ]
        },

        //Definições
        {
            label: 'Exbir',
            submenu: [
                {
                    label: 'Abrir definições',
                    click: () => { },
                },
                {
                    label: 'Abrir perfil',
                    click: () => { },
                },
                {
                    label: 'Recarregar Página',
                    role: 'reload',
                },
                {
                    type: 'separator',
                },
                {
                    label: 'Aplicar Zoom',
                    role: 'zoomIn',
                },
                {
                    label: 'Remover Zoom',
                    role: 'zoomOut'
                },
                {
                    label: 'Restaurar Zoom',
                    role: 'resetZoom'
                }
            ],
        },

        //Para Desenvolvedores
        {
            label: 'Desenvolvedores',
            submenu: [
                {
                    label: 'Ferramentas de desenvolvedor',
                    role: 'toggleDevTools',
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Open source',
                    click: () => { shell.openExternal('https://github.com/ylorde/movie-organizer') },
                },
                {
                    label: 'Abrir API',
                    click: () => { shell.openExternal('https://github.com/ylorde/') }
                },
                {
                    label: 'GitHub do Criador',
                    click: () => { shell.openExternal('https://github.com/ylorde/') }
                }
            ]
        },

        //Notificações
        {
            label: 'Notificações',
            submenu: [
                {
                    label: 'Alertas do sistema:  ' + `${systemAlerts() === "0" ? 'Não' : 'Sim'}`,
                    click: () => {
                        systemAlerts() === "0" ?
                            rewriteFile("./config/system_alerts.conf", "1") :
                            rewriteFile("./config/system_alerts.conf", "0")
                    }
                },
                {
                    label: 'Nova versão:  ' + `${autoFindUpdate() === "0" ? 'Não' : 'Sim'}`,
                    click: () => {
                        autoFindUpdate() === "0" ?
                            rewriteFile("./config/auto_update.conf", "1") :
                            rewriteFile("./config/auto_update.conf", "0") 
                    }
                }
            ],
        }
    ]

    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
};