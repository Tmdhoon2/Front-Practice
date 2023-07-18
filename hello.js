window.onload = function () {
  var btn = document.querySelector('button');
  btn.onclick = function (event) {
    console.log('버튼 클릭', event.clientX)
  };
};