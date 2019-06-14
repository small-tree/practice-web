document.write("hello world")


function scream(animal){
    switch (animal) {
      case "dog":
        document.write("wang wang!!")
        break;
        case "cat":
          document.write("miao miao !!")
          break;
          case "tiger":
            document.write("hou gou !!")
            break;
      default:

    }
}


scream("dog")
scream("cat")


function reverse(){
  var num = window.prompt("input")
  var reverseValue = ""
  for (var i = 0; i < num.length; i++) {
    reverseValue+=num[num.length - i -1]
  }
  console.info(reverseValue)
}
reverse()

