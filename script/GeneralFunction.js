const {ipcMain,dialog} = require('electron')
const fs = require('fs')
const path = require('path')
// Page Loading
ipcMain.handle('gl-load',(event,arr)=>{
	const { homepage,id } = arr
	const output = new Promise((resolve)=>{
		const filepath = './template/' + id + '/' + homepage + '.html'
		fs.readFile(filepath,'utf8',(err,html)=>{
			if(err){
				console.log(err)
				resolve(false)
			}else{
				resolve(html)
			}		
		})		
	})
	return output
})

//Path Finder
ipcMain.handle('gl-path',(event,isDirectory = false)=>{
	const output = new Promise(async(resolve)=>{
		if(isDirectory){
			const dialogArr = await dialog.showOpenDialog({
				properties: ['openDirectory']
			})
			const filepath = dialogArr.filePaths[0]
			resolve(filepath)
		}		
	})
	return output
})
//Path Finder
ipcMain.handle('gl-save',(event,arr)=>{
	const {start,end,content} = arr
	const output = new Promise(async(resolve)=>{
		
		const filepath = "./data/config.json"
		fs.readFile(filepath,(err,file)=>{
			const config = JSON.parse(file)
			const {key,value} = arr
			config[key] = value
		
			const json = JSON.stringify(config)
			fs.writeFile(filepath,json,(err,res)=>{
				resolve(true)
			})
		})
	
	})
	return output
})
//Load config
ipcMain.handle('gl-config',(event)=>{
	const output = new Promise((resolve)=>{
		const filepath = "./data/config.json"
		fs.readFile(filepath,(err,file)=>{
			const config = JSON.parse(file)
			resolve(config)
		})
	})
	return output
})