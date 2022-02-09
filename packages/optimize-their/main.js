const { app, BrowserWindow } = require('electron')

const createWindow = require('./server/createWindow');
const {ipcInit} = require('./server/ipc/main');

const mainWindow = require('./server/mainWindow')
app.whenReady().then(()=>{
  createWindow(mainWindow);
  menuInit();
  ipcInit();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})