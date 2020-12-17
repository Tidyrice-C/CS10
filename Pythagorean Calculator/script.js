document.getElementById("calc").addEventListener("click", calculate);
//start

function calculate() {
  let a = document.getElementById("legA").value;
  let b = document.getElementById("legB").value;

  //actual calc

  let hypo = Math.sqrt(a * a + b * b);

  //output

  document.getElementById("output").innerHTML = hypo;
}
