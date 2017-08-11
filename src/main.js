function testVar() {
  var a = 5;
  if (a == 5) {
    //overrides
    var a = 10;
    console.log(a); //10
  }
  console.log(a); //10
}
function testLet() {
  let a = 5;
  if (a == 5) {
    //block scope
    let a = 4;
    console.log(a); //4
  }
  console.log(a); //5
}
testVar();
console.log("---------------")
testLet();

const colors = [];
colors.push('red');
colors.push('blue');

//colors='Green'; //Errors : Assignment to constant variable.
