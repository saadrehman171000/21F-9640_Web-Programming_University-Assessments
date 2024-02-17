function printTable() {
    var number = document.getElementById("number").value;

    if (number != "") {
      var table = "";
      for (var i = 1; i <= 10; i++) {
        table += number + " x " + i + " = " + (number * i) + "<br>";
      }

      var resultDiv = document.getElementById("result");
      resultDiv.innerHTML = table;
    } else {
      var resultDiv = document.getElementById("result");
      resultDiv.innerHTML = "Please enter a valid number.";
    }
  }