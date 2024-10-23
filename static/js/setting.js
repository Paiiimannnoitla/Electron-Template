const stArr = {}

const stMain = ()=>{
	const main = document.getElementById('st-main')
	main.addEventListener('click',async(event)=>{
		const id = event.target.id
		// Homepage
		const isHomepage = currPage == 'homepage'
		if(isHomepage){
			// Homepage change Button
			const isChange = have(event,'change-btn')
			if(isChange){
				const tr = event.target.closest('tr')
				const menu = tr.children[3].children[0]
				const updateDiv = tr.children[1].children[0]
				
				updateDiv.innerHTML = menu.value
			}
		}
	})
}

// Function first run
const stInit = () =>{
	const output = new Promise((resolve)=>{
		//console.log(globalArr)
		
		resolve(true)
	})
	return output
}

// Page loading Function
pageArr['setting'] = async()=>{
	
	// Homepage
	const isHomepage = currPage == 'homepage'
	if(isHomepage){
		// Loading available homepage
		const tempArr = Object.copy(stArr['template'])
		
		let tableStr = ''
		for(const k in tempArr){
			const nameStr = `<td>` + k + `</td>`
			
			const defaultStr = `<td><span id='` + k + `-homepage' class='autofill'></span></td>`
			
			const btnStr = `<td><button name='` + k + `-homepage' class='save-btn'>`
				+ `Save</button></td>`
			
			const arr = tempArr[k]
			const optStr = optMaker(arr)
			const menuStr = `<td><select name="` + k + `">` + optStr + `</select></td>`
				+ `<td><button class='change-btn'>更改</button></td>`
				
			const content = `<tr>` + nameStr + defaultStr + btnStr + menuStr + `</tr>`
			tableStr = tableStr + content
		}
		const updateDiv = document.getElementById('homepage-table')
		updateDiv.innerHTML = tableStr

		
		return
	}
}

// Preload data
loadArr['setting'] = async()=>{
	const templateArr = globalArr.preload.template
	stArr['template'] = templateArr
	console.log(templateArr)
	const menuArr = {}
	for(const k in templateArr){
		const arr = templateArr[k]
		
	}
	
}

// Main page function
funcArr['setting'] = async()=>{
	const initStatus = await stInit()
	if(initStatus){
		stMain()
	}
}

