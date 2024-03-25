const { contextBridge, ipcRenderer } = require('electron')

// General Function
contextBridge.exposeInMainWorld('gl', {
    load: 			(v)		=> ipcRenderer.invoke('gl-load',v),
	path:			(b)		=> ipcRenderer.invoke('gl-path',b),
	save:			(arr)	=> ipcRenderer.invoke('gl-save',arr),
	config:			()		=> ipcRenderer.invoke('gl-config')
})




