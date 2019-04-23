// SCOPE

function varTest(){
	var a = 10;

	if(true){
		var a = 15;
		console.log('varTest - 1', a)
	}

	console.log('varTest - 2', a)
}

function letTest(){
	var a = 10;

	if(true){
		let a = 15;
		console.log('letTest - 1', a)
	}

	console.log('letTest - 2', a)
}

varTest()
letTest()
