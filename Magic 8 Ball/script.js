//click listener
document.getElementById("eight").addEventListener("click", eightball);

//function
function eightball() {
  var answers = [
    "Without a Doubt.",
    "As I see it, yes.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "Outlook not so good.",
    "It is certain.",
    "It is decidedly so.",
    "Reply hazy, try again.",
    "Most likely.",
    "My sources say no.",
    "My reply is no.",
    "It is unlikely."
  ];
  var input = document.getElementById("input").value;

  //blank check
  if (input !== "" && input !== " " && input !== "  ") {
    //determines the response randomly
    var response = answers[Math.floor(Math.random() * 12)];
    document.getElementById("answer").innerHTML = response;
  } else {
    document.getElementById("answer").innerHTML = "Please ask a question!";
  }

  //checks if input is specific message
  if (
    input === "Does the magic 8 ball actually work?" ||
    input === "Does a magic 8 ball actually work?"
  ) {
    document.getElementById("answer").innerHTML = "How dare you doubt me!";
  }

  if (
    input === "Is Javascript awesome?" ||
    input === "Is javascript awesome?"
  ) {
    document.getElementById("answer").innerHTML = "Java is better.";
  }
  document.getElementById("input").value = ""; //resets answer box
}
