var arr = [300, 400];
arr[2] = 500;
arr.unshift(200);
arr.unshift(100);
arr.push(600)

console.log(arr);

// 배열의 모든 요소 출력(for)
for (var i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

// 배열의 모든 요소 출력(for-in)
for (var i in arr) {
  // prototype 단원에서 자세히 확인, 배열의 hasOwnProperty() 메소드
  if (arr.hasOwnProperty(i)) {
    console.log(i, arr[i])
  }
}

// 배열의 모든 요소 출력(for-of)
for(var elem of arr){
  console.log(elem)
}

// 배열의 모든 요소 출력(forEach())
arr.forEach(function(elem, i){
  console.log(i, elem)
})