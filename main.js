const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

let flag = 114514;

app.on( 'ready', () => {

    mainWindow = new BrowserWindow({
        width:600, height:500,
        webPreferences:{
            nodeIntegration: true
        }
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html' );
    mainWindow.webContents.openDevTools();
    mainWindow.on( 'closed', function() {
        mainWindow = null;
    });

});

const { ipcMain } = require('electron');
ipcMain.on('message', (event, arg) => {
    console.log(arg);
    event.returnValue = arg; 
});

