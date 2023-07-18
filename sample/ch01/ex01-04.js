// 1 ~ 100 까지의 합계(for)
var sum = 0;
for (var i = 1; i <= 100; i++) {
  sum += i;
}

console.log('1 ~ 100 까지의 합계: ' + sum);

// 1부터 누적했을때 얼마까지 누적하면 1000000을 넘는가?(while)
var count = 1;
sum = 0;

while (true) {
  sum += count;
  count++;
  if (sum > 1000000) {
    break;
  }
}

/**
 * 연산자 우선 순위
 * 0. 전위형 증감연산자(++, --)
 * 1. 산술연산자(+, -...)
 * 2. 비교연산자(>, <...)
 * 3. 논리연산자(||, &&...)
 * 4. 대입연산자(=, +=...)
 * 5. 후위형 증감연산자(++, 00)
 */

console.log('1부터 ' + count + '까지 누적하면 합계는 ' + sum);

// 로또 1등 당첨확률
// 로또는 1부터 45까지의 숫자중 6개의 숫자를 맞춰야 함
// 45 * ~ 40

function lotto() {
  var sum = 1;
  for (var i = 45; i >= 1; i--) {
    sum *= i;
  }

  var sum2 = 1;
  for (var i = 6; i >= 1; i--) {
    sum2 *= i;
  }

  var sum3 = 1;
  for (var i = 39; i >= 1; i--) {
    sum3 *= i;
  }

  console.log(sum / (sum2 * sum3))
};

function lotto2() {
  var a = 1; // 분자 45!
  var b = 1; // 분모 6!*39!

  for (var i = 45; i > 0; i--) {
    a *= i;
  }

  for (var i = 6; i > 0; i--) {
    b *= i;
  }

  for (var i = 39; i > 0; i--) {
    b *= i;
  }

  print('로또 1등 당첨 확률은 1/' + Math.round(a / b))
};