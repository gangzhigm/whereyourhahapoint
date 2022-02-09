const { ipcMain } = require('electron');
const {  
    accountChange,
    accountDel,
    accountType,
    account
} = require('../business/account.js')

function API(){
    ipcMain.handle('getAccount', async (event, someArgument) => {
        return account;
    })
    ipcMain.handle('accountChange', async (event, someArgument) => {
        return accountChange(JSON.parse(someArgument));
    })
    ipcMain.handle('accountDel', async (event, someArgument) => {
        return accountDel(someArgument);
    })
    ipcMain.handle('getAccountType', async (event, someArgument) => {
      console.info(1);

        return accountType;
    })
}
module.exports = {API}