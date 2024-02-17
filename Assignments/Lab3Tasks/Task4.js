function getDays() {
    var month = document.getElementById("month").value;

    month = month.toUpperCase();
  
    var daysInMonth = {
      "JAN": 31,
      "FEB": 28,
      "MAR": 31,
      "APR": 30,
      "MAY": 31,
      "JUN": 30,
      "JUL": 31,
      "AUG": 31,
      "SEP": 30,
      "OCT": 31,
      "NOV": 30,
      "DEC": 31
    };

    if (daysInMonth.hasOwnProperty(month)) {
      var numDays = daysInMonth[month];
      var resultDiv = document.getElementById("result");
      resultDiv.innerHTML = "<span style='color: red;'>" + numDays + "</span>";
    } else {
      var resultDiv = document.getElementById("result");
      resultDiv.innerHTML = "Invalid month. Please enter a valid month shorthand.";
    }
  }