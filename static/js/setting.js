const stArr = {}
const stMain = ()=>{
	const main = document.getElementById('st-main')
	main.addEventListener('click',async(event)=>{
		
		//
	})
}
const stInit = () =>{
	console.log(currFunc)
	console.log(currPage)
	const output = new Promise((resolve)=>{
		resolve(true)
	})
	return output
}

funcArr['setting'] = async()=>{
	const initStatus = await stInit()
	if(initStatus){
		stMain()
	}
}

loadArr['setting'] = async()=>{
	stArr['template'] = await window.st.load()
}