var width = 0;
// var timer = setInte
var timer = setInterval(function() {
  // body...
  $('.bar2').css('width',width + "%");
  width+=1;
  if(width >100){
    $('.pageLoad').addClass('complete')
    clearInterval(timer)
  }
}, 100);
