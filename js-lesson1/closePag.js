function test() {
  var arr = [];
  for (var i = 0; i < 10; i++) {
    (function(j) {
      console.log(j);
    }(i))
  }
  return arr
}

var a = test()
for (var i = 0; i < a.length; i++) {
  a[i]();
}

var obj = {
  abc:""
}
abj.af
var a1 =
