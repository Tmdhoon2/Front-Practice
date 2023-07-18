// 객체 생성
var foo = {
	name: 'foo',
	major: 'computer science'
};

// 객체 프로퍼티 읽기
console.log(foo.name.toUpperCase(), foo.major)

// 객체 프로퍼티 갱신
foo.major = "Android Developer"
console.log(foo.major)

// 객체 프로퍼티 동적 생성
foo.sub = 'Frontend Developer'
console.log(foo.sub)

// 객체 프로퍼티 삭제
delete foo.major;
console.log(foo.name, foo.major, foo.sub)

// 객체 모든 프로퍼티 읽기
for(var prop in foo){
  console.log(prop, foo[prop]);
}
