
const ttMain = ()=>{
	console.log(100)
}
const ttInit = () =>{
	const output = new Promise((resolve)=>{
		resolve(true)
	})
	return output
}

funcArr['test'] = async()=>{
	const initStatus = await ttInit()
	if(initStatus){
		ttMain()
	}
}