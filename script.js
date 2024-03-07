/*function fibonacci(num) {
// your code here
	if(num<=1)return 0;
	if(num===2)return 1;
	return fibonacci(num-1)+fibonacci(num-2);
}

module.exports = fibonacci;
*/

function fibonacci(num){
	if(num === 0 || num === 1){
		return 0 ;
	}
	 else{
		 let a = 0 , b = 1 ;
		 
		 for(let n = 2 ; n < num ; n++){
			 let temp = b ;
			 b = a + b;
			 a = temp ;
		 }
		 return b ;
	 }
}


module.exports = fibonacci ;