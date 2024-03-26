
const stMain = ()=>{
	const main = document.getElementById('st-main')
	main.addEventListener('click',async(event)=>{
		
		//
	})
}
const stInit = () =>{
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
	const pageArr = await window.st.load()
	console.log(pageArr)
}