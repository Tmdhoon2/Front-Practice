// 지정한 배열의 모든 요소를 출력한다.
function printArr(arr){
	
}

var colorArr = ['orange', 'yellow', 'green'];
colorArr.push('black');
colorArr.push('white');
console.log(colorArr.shift());
console.log(colorArr.pop());
printArr(colorArr);

// 유사배열객체
//  - length 속성 추가
//  - 0부터 시작해서 1씩 증가하는 속성 추가
var arr2 = {
  push: function(elem){
    // 마지막 인덱스에 지정한 elem를 추가한다.

  },
  pop: function(){
    // 마지막 요소 추출후 반환(ex03-17.js 참조)

  },
  shift: function(){
    // 첫번째 요소 추출후 반환(ex03-17.js 참조)

  }
};
arr2.push('black');
arr2.push('white');
console.log(arr2.shift());
console.log(arr2.pop());
printArr(arr2);