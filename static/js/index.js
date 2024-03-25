let currOp = ''
let config = {}
const funcArr = []

document.getElementById('toolbar').addEventListener('click',async(event)=>{
	const isOption = have(event,'tb-option')
	if(isOption){
		const e = event.target
		const html = await window.gl.load(e.id)
		document.getElementById('main-display').innerHTML = html
		funcArr[e.id]()
	}
})

//Path button
document.getElementById('main-display').addEventListener('click',async(event)=>{
	const id = event.target.id
	//Save Function
	const isSave = have(event,'save-btn')
	if(isSave){
		const e = event.target
		const dataArr = {}
		const change = e.previousElementSibling.innerHTML
	
		dataArr['value'] = change
		dataArr['key'] = e.id
		
		const saveStatus = await window.gl.save(dataArr)
	}
	//File path loading
	const isPath = have(event,'path-btn')
	if(isPath){
		const dirPath = await window.gl.path(true)
		if(dirPath){
			const updateid = id.substring(0,id.length-4)
			const updateDiv = document.getElementById(updateid)
			updateDiv.innerHTML = dirPath
		}
	}
	//Copy value
	const isCopy = have(event,'copy-btn')
	if(isCopy){
		const e = event.target
		let target = e.previousElementSibling
		if(target.tagName == 'BR'){
			target = target.previousElementSibling
		}
		const type = target.tagName
		const isValue = (type == 'INPUT') + (type == 'TEXTAREA')

		if(isValue){
			target.select()
		}else{
			const range = document.createRange()
			range.selectNode(target)
			const selection = window.getSelection()
			selection.removeAllRanges()
			selection.addRange(range)
		}

		document.execCommand('copy')
		
	}
	//Click and copy
	const isSelfCopy = have(event,'selectable')
	if(isSelfCopy){
		// Copy all nodes under the parent node if it is group-copy target
		const isGroup = have(event,'group')
		if(isGroup){
			const parent = event.target.parentNode
			const childArr = parent.childNodes
			const selArr = []
			
			for(var i=0;i<childArr.length;i++){
				const child = childArr[i]
				const isSelect = child.classList.contains('selectable')
				if(isSelect){
					selArr[selArr.length] = child
				}
			}
			
			const range = document.createRange()
			range.setStart(selArr[0],0)
			range.setEnd(selArr[selArr.length-1],1)
			const selection = window.getSelection()
			selection.removeAllRanges()
			selection.addRange(range)
			
			document.execCommand('copy')

		}
		// Vertical copy for table column
		// Broken need to be finished
		const isColumn = have(event,'column')
		if(isColumn){
			const table = event.target.closest('table')
			const x = event.target.cellIndex
			const cellArr = getColumn(table,x)
			
			const groupArr = []
			for(var i=1;i<cellArr.length;i++){
				const e = cellArr[i]
				const isGroup = e.classList.contains('group')
				if(isGroup){
					groupArr[i-1] = e
				}else{
					break
				}
			}
			
			const selectArea = document.createElement('table')
			const child = document.createElement('tbody')
			child.classList.add('fake-token')
			selectArea.appendChild(child)
			
			
			const target = selectArea.childNodes[0]
			for(var i=0;i<groupArr.length;i++){
				target.appendChild(groupArr[i])
			}
			
			const range = document.createRange()
			range.selectNode(child)
			const selection = window.getSelection()
			selection.removeAllRanges()
			selection.addRange(range)
			
			document.execCommand('copy')
		}
	}
})

const init = async()=>{
	
}
init()