'use strict';

var electron = require('electron');
require('path');

function createWindow() {
    const mainWindow = new electron.BrowserWindow({
        width: 800,
        height: 600
    });
    {
        mainWindow.loadURL("http://localhost:3344");
    }
    return mainWindow;
}
console.log("development");
electron.app.whenReady().then(() => {
    createWindow();
});
