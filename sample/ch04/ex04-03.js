// prototype 이용해서 작성(ex04-01.js 파일 참조)
var Person = function(name){
  
};

var kim = new Person('김철수');
var lee = new Person('이영희');

console.log(kim.getName());
console.log(lee.getName());
kim.setName('홍길동');
console.log(kim.getName());

console.log(kim.getName == lee.getName);	// true
console.log(kim.setName == lee.setName);	// true