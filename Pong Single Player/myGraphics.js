function circle(x1, y1, r) {
  context.beginPath();
  context.strokeStyle = "blue";
  context.lineWidth = 3;
  context.arc(x1, y1, r, 0, 2 * Math.PI);
  context.stroke();
  console.log("HIOIHI");
}

function rectangle(x1, y1, w, h) {
  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = 3;
  context.moveTo(x1, y1);
  context.lineTo(x1, y1 + h);
  context.lineTo(x1 + w, y1 + h);
  context.lineTo(x1 + w, y1);
  context.closePath();
  context.stroke();
}
