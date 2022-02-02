const { app, BrowserWindow, Menu } = require('electron');
const url = require('url')
const path = require('path')

if(process.env.NODE_ENV !== 'production')
  require('electron-reload')(__dirname,{
    electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
  })

let mainWindow;
let newProductWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600})

  mainWindow.loadFile(url.format(
    path.join(__dirname, 'views/index.html'), 
    { protocol: 'file', slashes: true }
  ));

  const mainMenu = Menu.buildFromTemplate(templateMetu);
  Menu.setApplicationMenu(mainMenu);
  
});

const createNewProductWindow = () => {
  newProductWindow =new BrowserWindow({
    width: 400,
    height: 400,
    title: 'Add A New Product'
  });

  newProductWindow.setMenu(null);
  
  newProductWindow.loadFile(url.format(
    path.join(__dirname, 'views/new-product.html'), 
    { protocol: 'file', slashes: true }
  ));
}

const templateMetu = [{
  label: 'File',
  submenu: [{
      label: 'New Product',
      accelerator: 'Ctrl+N',        
      click() {
        createNewProductWindow();
      }
    }]
  }]
