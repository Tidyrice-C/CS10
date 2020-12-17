//spans are rawscore and percentscore
document.getElementById("calcscore").addEventListener("click", calculate);

//begin (ADD SCRIPT EXE IN HTML)

function calculate() {
  let score = 0;

  var answer1 = document.getElementById("Q1").value;
  var answer2 = document.getElementById("Q2").value;
  var answer3 = document.getElementById("Q3").value;
  var answer4 = document.getElementById("Q4").value;

  if (
    answer1 === "2009" ||
    answer1 === "May 2009" ||
    answer1 === "May 17 2009"
  ) {
    score++;
    document.getElementById("feedback1").innerHTML = " Correct";
  } else {
    document.getElementById("feedback1").innerHTML = " Incorrect";
    document.getElementById("feedback1").style.color = "red";
  }

  if (answer2 === "9") {
    score++;
    document.getElementById("feedback2").innerHTML = " Correct";
  } else {
    document.getElementById("feedback2").innerHTML = " Incorrect";
  }

  if (answer3 === "3") {
    score++;
    document.getElementById("feedback3").innerHTML = " Correct";
  } else {
    document.getElementById("feedback3").innerHTML = " Incorrect";
  }

  if (
    answer4 === "Caves and Cliffs" ||
    answer4 === "caves and cliffs" ||
    answer4 === "Caves and cliffs"
  ) {
    score++;
    document.getElementById("feedback4").innerHTML = " Correct";
  } else {
    document.getElementById("feedback4").innerHTML = " Incorrect";
  }

  //output
  let pscore = (score / 4) * 100;
  document.getElementById("rawscore").innerHTML = score;
  document.getElementById("percentscore").innerHTML = pscore;

  //feedback
  if (score > 2) {
    document.getElementById("feedback").innerHTML = "You did great!";
  } else {
    document.getElementById("feedback").innerHTML =
      "Read the wiki, then try again!";
  }
}
