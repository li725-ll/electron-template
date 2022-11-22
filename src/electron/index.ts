import { app, BrowserWindow } from "electron";
import path from "path";

function createWindow(){
    const mainWindow = new BrowserWindow({
        width: 600,
        height: 400
    });
    const htmlPath = path.resolve(__dirname, "../../vue-dist/index.html");
    mainWindow.loadFile(htmlPath);
    return mainWindow;
}

app.whenReady().then(()=>{
    createWindow()
})
