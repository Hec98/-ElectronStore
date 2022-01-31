const { app, BrowserWindow } = require('electron');
const url = require('url')
const path = require('path')

if(process.env.NODE_ENV !== 'production')
require('electron-reload')(__dirname,{})

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600})

  mainWindow.loadFile(url.format(
    path.join(__dirname, 'views/index.html'), 
    { protocol: 'file', slashes: true }
  ))

});
