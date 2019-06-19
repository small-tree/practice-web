var father = {
  aaa: "aaa",
  bbb: "bbb",
  func:function(){
    console.log("func");
    return this;
  },
  fund:function(){
    console.log("fund");
    return this;
  }
}
Childen.prototype = father;

function Childen() {

}

var childen1 = new Childen();
