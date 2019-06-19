var init = (function() {

})();

// 打印类型
function type(a) {
  if ('object' == typeof(a)) {
    console.log(Object.prototype.toString.call(a));
  } else {
    console.log(typeof a);
  }
}
Array.prototype.unique = function() {
  var obj = {};
  for (var i = 0; i < this.length; i++) {
    obj[this[i]] = 0;
  }
  console.log(obj);
  this.splice(0, this.length);
  for (var prop in obj) {
    this.push(prop)
  }
  console.log(this);
}
