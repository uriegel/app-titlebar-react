import { app, BrowserWindow } from "electron"
import installExtension, { REACT_DEVELOPER_TOOLS} from 'electron-devtools-installer'

const createWindow = async () => {  
    
    await installExtension(REACT_DEVELOPER_TOOLS)
    //await session.defaultSession.loadExtension("/home/uwe/.config/google-chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.27.1_0")

    const win = new BrowserWindow({
        autoHideMenuBar: true,
        frame: true
    })
    //win.removeMenu()

    win.once('ready-to-show', win.show)
    win.loadURL(`http://localhost:3000`)

    

}

app.on('ready', createWindow)

