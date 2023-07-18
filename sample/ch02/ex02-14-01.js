// ex02-14.js 복사
var count = 0;
var myObj = {
	count: 0,
	visit: function(){
		// 방문자를 한명 증가시킨다.
        this.count++
        var that = this
        var visit2 = function(){
            that.count++
        }
		visit2()
	},
    cash: function(){
        // 자산을 증가시킴
        this.money += 10
    }
};

myObj.visit();
myObj.visit();
console.log('합계', myObj.count);