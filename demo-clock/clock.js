function Index(dom, is24) {
  this.createDom();
  this.clumns = Array.from(dom);
  this.classList = ['show', 'far1', 'close'];
  this.is24 = is24;
  this.start();
}
Index.prototype.start = function() {
  var self = this;
  setInterval(function() {
    var clock1 = self.getClock();
    self.clumns.forEach(function(ele, index) {
      var a = +clock1[index];
      var offset = a * 86 + 60;
      $(ele).css({
        'transform': 'translateY(calc(50vh - ' + offset + 'px))'
      });

      Array.from(ele.children).forEach(function(ele2, index2) {
          switch(a-index2){
            case 0:
            $(ele2).attr('class',self.classList[0]);
            break;
            case 1:
            case 2:
            $(ele2).attr('class',self.classList[1]);
            break;

            default:
            $(ele2).attr('class',self.classList[2]);
            break;
          }
      });

    });
  }, 200);

}
Index.prototype.getClock = function() {
  var newDate = new Date();
  return [this.is24 ? newDate.getHours() : newDate.getHours() % 12, newDate.getMinutes(), newDate.getSeconds()].reduce(function(p, p1) {
    return p + ('0' + p1).slice(-2);
  }, '');
  // console.log(a);

}
Index.prototype.createDom = function() {
  for (var i = 0; i < 3; i++) {
    var div = '<div>' + i + '</div>';
    $('.three').append(div);
  }

  for (var i = 0; i < 6; i++) {
    var div = '<div>' + i + '</div>';
    $('.six').append(div);
  }

  for (var i = 0; i < 10; i++) {
    var div1 = '<div>' + i + '</div>';
    $('.ten').append(div1);
  }

}

var abc = new Index($('.div-list'), true);
