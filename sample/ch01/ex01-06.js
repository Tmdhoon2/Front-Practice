var foo = {
  name:"응아",
  age:18,
  job:"안드로이드 개발자",
  married:false,
}

console.log(foo, foo['name'], foo.age, foo.job, foo['married']);
console.log(typeof foo);

var strFoo =  JSON.stringify(foo);
console.log(typeof strFoo, strFoo);

var objFoo = JSON.parse(strFoo);
var string = JSON.parse("fsiejfsef");

console.log(typeof objFoo, objFoo);

console.log(typeof string, string)