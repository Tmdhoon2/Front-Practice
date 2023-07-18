// 지정한 배열의 모든 요소를 출력한다.
function printArr(arr) {
    var i;
    for (i = 0; i < arr.length; i++) {
        console.log(i, arr[i]);
    }
    console.log('');
}

// 지정한 객체의 모든 속성을 출력한다.
function printObj(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(prop, obj[prop])
        }
    }
}

var arr = ['zero', 'one', 'two'];
arr.push('three');
arr.push('four');
printArr(arr);

arr.pop();
arr.shift();
printArr(arr);

// 일반 객체처럼 속성 추가
arr.name = "kim"

arr.age = 30

// 속성을 추가하는 전용 메소드
Object.defineProperty(arr, 'age', {
    value: 30,
    enumerable: true, // 열거 가능한지 여부(for-in, Object.key()... 에 노출여부)ㅡ 생략시 false
    writable: true, // 대입연산자로 value 수정이 가능한지 여부
    configurable: true // Object.defineProperty() 로 속성값 설정이 가능한지 여부, 생략시 false
});

printObj(arr.name)
