/*
  圣杯模式 实现继承
*/
function inherit(Taget, Origin) {
  function F() {};
  F.prototype = Origin.prototype;
  Taget.prototype = new f();
  Taget.prototype.constuctor = Origin;

}
/* 高级圣杯模式 */
var inherit = (function() {
  var F = function F() {};
  return function(Taget, Origin) {
    F.prototype = Origin.prototype;
    Taget.prototype = new F();
    Taget.prototype.constuctor = Origin;
  }
})();
