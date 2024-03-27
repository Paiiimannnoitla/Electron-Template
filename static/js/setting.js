const stArr = {}
const stMain = ()=>{
	const main = document.getElementById('st-main')
	main.addEventListener('click',async(event)=>{
		
		//
	})
}

// Function first run
const stInit = () =>{
	const output = new Promise((resolve)=>{
		resolve(true)
	})
	return output
}

// Page loading Function
pageArr['setting'] = async()=>{
	console.log(stArr)
}
// Main function
funcArr['setting'] = async()=>{
	const initStatus = await stInit()
	if(initStatus){
		stMain()
	}
}

// Preload data
loadArr['setting'] = async()=>{
	stArr['template'] = await window.st.load()
}