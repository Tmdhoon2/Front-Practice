var arr = ['zero', 'one', 'two', 'three'];
console.log(arr);

// splice(시작index, 잘라낼 개수-생략시 마지막까지)
// 배열의 요소를 잘라서 새로운 배열을 반환한다.
// 원본 데이터 제거

// var arr2 = arr.splice(1, 2)
// var arr2 = arr.splice(1)
var arr2 = arr.splice()

// slice(시작index, 종료index-생략시 마지막까지)
// 배열의 요소를 복사해서 새로운 배열을 반환한다.
// 원본 데이터 유지
var arr2 = arr.slice(1, 3);
var arr3 = arr

console.log(arr)
console.log(arr2)
console.log(arr == arr2)