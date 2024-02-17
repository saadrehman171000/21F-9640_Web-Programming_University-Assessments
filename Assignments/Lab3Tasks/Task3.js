function calculate() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
  
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
  
    var addition = num1 + num2;
    var subtraction = num1 - num2;
    var multiplication = num1 * num2;
    var division = num1 / num2;

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Addition: " + addition + "<br>" +
                         "Subtraction: " + subtraction + "<br>" +
                         "Multiplication: " + multiplication + "<br>" +
                         "Division: " + division;
  }