const { stdin } = require("process");

// 지정한 배열의 모든 요소를 출력한다.
function printArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i])
    }
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
var arr3 = {
    0: 'orange',
    1: 'yellow',
    2: 'green',
    push: function (elem) {
        // 마지막 인덱스에 지정한 elem를 추가한다.
        // this[length] = ele
        // this.length++

        var tmpArr = new Array()
        tmpArr.push(elem)
        Array.prototype.push.apply(this, [elem])
    },
    pop: function () {
        // 마지막 요소 추출후 반환(ex03-17.js 참조)
        // var last = this[this.length - 1]
        // this.length--

        // return last
        Array.prototype.pop.call(this)
    },
    shift: function () {
        // 첫번째 요소 추출후 반환(ex03-17.js 참조)
        // var first = this[0]
        // for (var i = 0; i < this.length - 1; i++) {
        //     this[i] = this[i + 1]
        // }
        // this.length--
        // delete this[this.length]
        // return first
        Array.prototype.shift.call(this)
    }
};
arr2.push('black');
arr2.push('white');
console.log(arr2.shift());
console.log(arr2.pop());
printArr(arr2);

function test() {
    const readLine = require("readline")
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
}