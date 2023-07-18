// 지정한 배열의 모든 요소를 출력한다.
function printArr(arr){
  var i;
	for(i=0; i<arr.length; i++){
		console.log(i, arr[i]);
	}
  console.log('');
}

var arr = ['zero', 'one', 'two'];
arr.push('three');
arr.push('four');
printArr(arr);

arr.pop();
arr.shift();
printArr(arr);

