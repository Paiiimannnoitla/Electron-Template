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
		
		const optArr = {}
		const tempArr = Object.copy(stArr['template'])
		/*const keyArr = Object.keys(tempArr)
		const valArr = Object.values(tempArr)*/
		/*
		for(var i=0;i<valArr.length;i++){
			const val = valArr[i]
			for(var a=0;a<val.length;a++){
				const e = val[a]
				
				const option = `<option value='` + e + `'>` + e + `</option>`
				val[a] = option
			}
			valArr[i] = valArr[i].join('')
			optArr[keyArr[i]] = valArr[i]
		}*/
		for(const k in tempArr){
			const arr = tempArr[k]
			const optStr = optMaker(arr)
			optArr[k] = optStr
		}
		const selArr = document.querySelectorAll('.page-dropmenu')
		for(var i=0;i<selArr.length;i++){
			const updateDiv = selArr[i]
			const name = updateDiv.getAttribute('name')
			
			updateDiv.innerHTML = optArr[name]
		}
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

