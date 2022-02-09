const { Menu } = require('electron')
const template = [];

function menuInit(){
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu);
}

module.exports = {menuInit}