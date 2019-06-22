var canvas = document.getElementById('canvas');
var context2d = canvas.getContext('2d');
context2d.moveTo(100, 100);
context2d.lineTo(200, 100);
context2d.lineTo(150, 170);
context2d.lineTo(100, 100);
context2d.strokeStyle = "#FF0000";
context2d.lineWidth = 20;
context2d.closePath();
context2d.fill();
context2d.fillStyle = "#000";
context2d.stroke();

var drawingLineObj = {
  cavs: $('#canvas_real'),
  ctx: $('#canvas_real')[0].getContext('2d'),
  pencilSize: $('#pencilSize'),
  colorBoard: $('#colorBoard'),
  clearAll: $('#clearAll'),
  clear: $('clear'),
  backPer: $('backPer'),
  colorBoard: $('#colorBoard'),
  pencilSize: $('#pencilSize'),
  arrImgs: [],
  init: function() {
    this.ctx.lineCap = 'round'; // 画圆角的线
    this.draw();
    this.btnFun();
  },
  draw: function() {
    var self = this;
    var c_x = this.cavs.offset().left,
      c_y = this.cavs.offset().top;
    this.cavs.mousedown(function(e) {
      var isDraw = true;

      // console.log(e);
      var m_x = e.pageX - c_x,
        m_y = e.pageY - c_y;
      self.ctx.beginPath();
      self.ctx.moveTo(m_x, m_y);

      self.cavs.mousemove(function(e) {
        // console.log(e);
        if (isDraw) {
          self.ctx.lineTo(e.pageX - c_x, e.pageY - c_y);
          self.ctx.stroke();
        }
      });
      self.cavs.mouseup(function(e) {
        isDraw = false;
        self.ctx.closePath();
      });
      self.cavs.mouseleave(function() {
        isDraw = false;
        self.ctx.closePath();
      });


      var history = self.ctx.getImageData(0, 0, self.cavs.width(), self.cavs.height());
      self.arrImgs.push(history);
    });


  },
  btnFun: function() {
    var self = this;
    $('.btn-list').on('click', function(event) {
      event = event || window.event;
      console.log(event.target.id);
      switch (event.target.id) {
        case 'clearAll':
          self.ctx.clearRect(0, 0, self.cavs.width(), self.cavs.height());
          break
        case 'clear':
          self.ctx.strokeStyle = '#FFF';
          break
        case 'backPer':
          var last = self.arrImgs.pop();
          if (last) {
            self.ctx.putImageData(last,0,0);
          } else {
            console.log('已经是初始化状态');
          }
          break
      }
    });
    // 颜色变化
    self.colorBoard.change(function(e) {
      self.ctx.strokeStyle = $(this).val();
    });

    self.pencilSize.change(function(e) {
      self.ctx.lineWidth = ($(this).val());
    });

  }

};

drawingLineObj.init();
