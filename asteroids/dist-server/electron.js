"use strict";

var _require = require('electron'),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow;

function createWindow() {
  // Create the browser window.     
  win = new BrowserWindow({
    width: 800,
    height: 600
  }); // and load the index.html of the app.

  win.loadURL("http://localhost:3000/");
  win.webContents.openDevTools();
}

;
app.on('ready', createWindow);
//# sourceMappingURL=electron.js.map