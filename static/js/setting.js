
const stMain = ()=>{
	console.log(100)
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