// 지정한 두 값의 최대값을 반환한다.
function max(n1, n2){
	//var maxNum;
    //let maxNum
    const PI = 3.14592

	if(n1 < n2) maxNum = n2
    else maxNum = n1
	
	return maxNum;
}

console.log(max(10, 20));   // 20
console.log(max(200, 30));  // 200