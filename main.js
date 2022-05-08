const {app, BrowserWindow} = require('electron')
const url = require("url");
const path = require("path");

let mainWindow;

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile(
    path.join(__dirname, `/dist/index.html`),
  );
  // Open the DevTools.
 // mainWindow.webContents.openDevTools();

  // mainWindow.on('closed', function () {
  //   mainWindow = null
  // })
}



app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
});

