const { app, BrowserWindow, ipcMain, dialog, session } = require('electron')
const path = require('path')
const fs = require('fs')
require('./script/GeneralFunction.js')
//const {sysBuild} = require('./build.js')

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
app.allowRendererProcessReuse = false

// WindowsCreator
	// Main Window
const WindowMain = async () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
			disableBlinkFeatures: 'DisallowInsecureUsage,AllowLists',
			allowlist:['style-src','self'],
            preload: path.join(__dirname, 'preload.js'),
			contextIsolation:true,
			nodeIntegration: false
        }
    })
	const debugMode = true
	if (debugMode){
		win.webContents.openDevTools()
	}
    win.loadFile('./index.html')	

}
const init = async() =>{  
	const isBuild = true
	//const isBuild = await sysBuild()
	if(isBuild){
		app.whenReady().then(() => {
			WindowMain()
			// Prevent from multiple windows create
			app.on('activate', () => {
				if (BrowserWindow.getAllWindows().length === 0) {
					WindowMain()
				}
			})	
		})
	}
	
	
}

init()

// Release all resources of the app
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})