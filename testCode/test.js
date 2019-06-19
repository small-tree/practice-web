var buttons = document.getElementsByTagName('button');
buttons[0].onclick = function () {
  app.paySuccess()
};

buttons[1].onclick = function () {
  app.payFailed()
};
