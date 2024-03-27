const {ipcMain,dialog} = require('electron')
const fs = require('fs')
const path = require('path')
// Page Loading
ipcMain.handle('st-load',(event)=>{
	const output = new Promise((resolve)=>{
		const temppath = './template'
		const pageArr = {}
		
		fs.readdir(temppath,async(err,dirnames)=>{
			const dirArr = []
			for(var i=0;i<dirnames.length;i++){
				const dirname = dirnames[i]
				const isFile = dirname.indexOf('.') + 1
				if(!isFile){
					dirArr[dirArr.length] = dirname
				}
			}
			
			
			const innerChain = []
			for(var i=0;i<dirArr.length;i++){
				innerChain[i] = new Promise((resolve)=>{
					const dir = dirArr[i]
					const dirpath = temppath + '/' + dir
					fs.readdir(dirpath,(err,files)=>{
						const filelist = []
						for(var i=0;i<files.length;i++){
							const f = files[i]

							const isTemplate = f.substring(f.length-5) == '.html'
							if(isTemplate){
								filelist[filelist.length] = f.replace('.html','')
							}
						}

						pageArr[dir] = filelist
						resolve(true)
					})
				})
				
			}
			const midpoint = await Promise.all(innerChain)
			if(midpoint){
				console.log(pageArr)
				resolve(pageArr)
			}
		})
	})
	return output
})

