$(document).ready(function(){
  console.log("page is loaded");
  var numTerm = 0
  var testingTerm = []
  var operatorTerm = []
  $("td").click(function(event){

    var operators = ["C", "x", "-", "+","="];
    var charPressed = event.target.innerText;
    var existingDisplayNum = $("#numDisplay div")["0"].innerText;
    console.log(charPressed);
    if (existingDisplayNum.length){
      console.log(existingDisplayNum)
    }
    if ($.inArray(charPressed, operators) == -1) {
      $("#numDisplay div").html(existingDisplayNum + charPressed);
    }
    switch (charPressed) {
      case "C":
        total = ("")
        numTotal = ("")
        numTerm = 0
        testingTerm = []
        operatorTerm = []
        $("#numDisplay div").html("")
        console.log("cleared");
        break;
      case "x":
        console.log("multiply");
        testingTerm.push(existingDisplayNum)
        console.log(testingTerm[numTerm])
        operatorTerm.push("*")
        console.log(operatorTerm[numTerm])
        numTerm += 1;
        $("#numDisplay div").html("")
        break;
      case "-":
        console.log("subtract");
        testingTerm.push(existingDisplayNum)
        console.log(testingTerm[numTerm])
        operatorTerm.push("-")
        console.log(operatorTerm[numTerm])
        numTerm += 1;
        $("#numDisplay div").html("")
        break;
      case "+":
        console.log("add");
        testingTerm.push(existingDisplayNum)
        console.log(testingTerm[numTerm])
        operatorTerm.push("+")
        console.log(operatorTerm[numTerm])
        numTerm += 1;
        $("#numDisplay div").html("")
        break;
      case "=":
        console.log("equal");
        testingTerm.push(existingDisplayNum)
        console.log(testingTerm[numTerm])
        numTerm += 1;
        console.log(numTerm)
        $("#numDisplay div").html("")
        console.log(testingTerm.length)
        var total = ("");
        for (i = 0; i < testingTerm.length; i++){
          if (testingTerm[i] != undefined && operatorTerm[i] != undefined){
            total += (testingTerm[i] + operatorTerm[i]);
          } else if (testingTerm[i] != undefined) {
            total += (testingTerm[i]);
          } else if (operatorTerm[i] != undefined) {
            total += (operatorTerm[i])
          }
        }
        console.log(total);
        var numTotal = eval(total);
        $("#numDisplay div").html(numTotal)
        console.log(numTotal);
        numTerm = 0
        testingTerm = []
        operatorTerm = []
        break;
      default:
        console.log("number pressed");
    }
  });
});
