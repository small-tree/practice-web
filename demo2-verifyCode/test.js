// var canvas = $('#canvas')[0];
var createStr = ''
function createCanvas(){
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var cHeight = canvas.height;
  var cWidth = canvas.width;
  var img = new Image();
  img.src = 'img/bg.png';

  img.onload = function() {
    createStr = randomUtils.randomStr(6);
    var str = createStr.split('').join(' ');
    var pattern = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, 300, 80);
    ctx.font = '46px Roboto Slab';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#FFF';
    // ctx.setTransform(1, -0.12, 0.2, 1, 0, 12);
    ctx.fillText(createStr, canvas.width / 2, 60);
  }
}
createCanvas();

$('.refresh')[0].onclick = function() {
  console.log('refresh is clicked');
  createCanvas();
};

$('.submit').click(function (){
  var inputStr = $('input')[0].value;

  if (inputStr.toLowerCase() == createStr.toLowerCase()) {
    console.log("success");
  } else {
    console.log('failed');
    $('.errorMsg').css({
      display:'block'
    })
  }
  createCanvas();
});

function showSuccess() {
    $('.wraper .rightSuccess').css({
      display:'inline-block'
    });
}
