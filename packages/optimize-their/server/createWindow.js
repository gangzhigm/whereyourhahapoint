const windowList = require("./windowList");
const projectOption = require("./projectOption");
const { BrowserWindow } = require('electron')
module.exports = function(options) {
    if(windowList.find(item => item[0] === options.name)){
      return false;
    }
    const windowIndex = windowList.length;
    windowList[windowIndex] = new Array(2);
    windowList[windowIndex][0] = options.name;
    windowList[windowIndex][1] = new BrowserWindow(options.BrowserWindowOptions);
    switch(process.env.NODE_ENV){
      case "develop":
        windowList[windowIndex][1].loadURL(`${projectOption.devHost}${options.path}`);
        windowList[windowIndex][1].webContents.openDevTools();
        break;
      case "production":
        windowList[windowIndex][1].loadFile('index.html')
        break;
      default:
        windowList[windowIndex][1].loadFile('index.html')
        break;
    }
};