import { app, BrowserWindow } from "electron";
import path from "path";

const isProduction = ENV === "production"; // 环境变量

function createWindow(){
    const mainWindow = new BrowserWindow({
        width: 600,
        height: 400
    });

    if(isProduction){
        const htmlPath = path.resolve(__dirname, "../../vue-dist/index.html");
        mainWindow.loadFile(htmlPath);
    }else{
        mainWindow.loadURL("http://localhost:3344");
    }
 
    return mainWindow;
}
console.log(ENV);
app.whenReady().then(()=>{
    createWindow()
})
