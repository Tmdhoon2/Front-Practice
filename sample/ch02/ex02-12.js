function fn(n1, n2) {
    //console.log(n1, n2)
    // 모든 인자값의 합계 출력
    var sum = 0
    for(var i = 0; i<arguments.length; i++){
        sum += arguments[i]
    }
    console.log('합계', sum)
}

fn()
fn(1)
fn(1, 2)
fn(1, 2, 3)
fn(23, 23, 43, 23, 34, 234, 2, 3, 234, 23, 423, 4, 234, 234, 2343, 423, 4343, 434434, 34434, 34)