const { app, BrowserWindow, WebContentsView } = require('electron');
const { api_url } = require('./data.js');
const systemOffline = require('./notifications/systemOffline.js');
const outdatedVersion = require('./notifications/outdatedVersion.js');
const customMenu = require('./customs/customMenu.js');
const autoFindUpdate = require('./functions/autoFindUpdate.js');
const systemAlerts = require('./functions/systemAlerts.js');

(async function () {
    let win;

    function createWindow() {
        win = new BrowserWindow({
            width: 1366,
            height: 720,
            webPreferences: {
                nodeIntegration: true
            },
            resizable: false,
        });

        customMenu(app, win);

        win.loadFile('index.html');
    };

    app.whenReady()
        .then(createWindow)
        .then(async () => {
            if (systemAlerts() === "1") {
                const api_update = await fetch(api_url + '/get-update', {
                    method: 'get',
                    headers: { version: '0.9' }
                });

                if (api_update.status != 200) return systemOffline();
                if (autoFindUpdate() === "1" && api_update.json()?.message != 'latest') outdatedVersion();
            }
        });

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
})()
