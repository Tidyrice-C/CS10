
  function rectangle(x1, y1, w, h, context) {
    const colors = [
      "fuschsia",
      "greenyellow",
      "mediumslateblue",
      "lavender,",
      "magenta",
      "mediumspringgreen",
      "mediumvioletred",
      "gold",
      "ghostwhite",
      "floralwhite",
      "darksalmon",
      "cornsilk",
      "chocolate",
      "cornflowerblue",
      "cyan",
      "crimson",
      "burlywood",
      "darkorchid",
      "darkseagreen"
    ];
  
    var color = colors[Math.floor(Math.random() * colors.length)];
    for (let num = 0; num < 20; num++) {
      context.beginPath();
      context.strokeStyle = color;
      context.lineWidth = 1;
      context.moveTo(x1, y1);
      context.lineTo(x1, y1 + h);
      context.lineTo(x1 + w, y1 + h);
      context.lineTo(x1 + w, y1);
      context.closePath();
      context.stroke();
    }
  }

  function circle(x1, y1, r, context) {
    const colors = [
      "fuschsia",
      "greenyellow",
      "mediumslateblue",
      "lavender,",
      "magenta",
      "mediumspringgreen",
      "mediumvioletred",
      "gold",
      "ghostwhite",
      "floralwhite",
      "darksalmon",
      "cornsilk",
      "chocolate",
      "cornflowerblue",
      "cyan",
      "crimson",
      "burlywood",
      "darkorchid",
      "darkseagreen"
    ];
  
    var color = colors[Math.floor(Math.random() * colors.length)];
    for (let num = 0; num < 20; num++) {
      context.beginPath();
      context.strokeStyle = color;
  
      context.lineWidth = 1;
      context.arc(x1, y1, r, 0, 2 * Math.PI);
      context.stroke();
    }
  }
  
