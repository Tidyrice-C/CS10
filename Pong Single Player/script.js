//fills page with canvas
let canvas = document.getElementById("canvas");

//define context
let context = canvas.getContext("2d");

//GRAPHICS
function circle(x1, y1, r) {
  context.beginPath();
  context.strokeStyle = "white";
  context.lineWidth = 3;
  context.arc(x1, y1, r, 0, 2 * Math.PI);
  context.stroke();
}

function rectangle(x1, y1, w, h) {
  context.beginPath();
  context.strokeStyle = "white";
  context.lineWidth = 3;
  context.moveTo(x1, y1);
  context.lineTo(x1, y1 + h);
  context.lineTo(x1 + w, y1 + h);
  context.lineTo(x1 + w, y1);
  context.closePath();
  context.stroke();
}

function text(message, x1, y1) {
  context.font = "30px Comic Sans MS";
  context.fillStyle = "white";
  context.fillText(message, x1, y1);
  context.textAlign = "center";
}

function image(source, x1, y1, w, h) {
  context.drawImage(source, x1, y1, w, h);
}

function fillpage() {
  var width = 1024; //window.innerWidth;
  var height = 512; //window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}

fillpage();

//sprites
var pong1image = new Image();
pong1image.src = "pong1.png";

//var pong2image = new Image();
//pong2image.src = "pong2.png";

var ballimage = new Image();
ballimage.src = "ball.png";

//dimensions
var pongheight = 100;
var pongwidth = 20;

var ballhw = 16;
var ballx = 512;
var bally = 256;

//REAL BALL DIMENSIONS
var realballx = ballx - ballhw / 2;
var realbally = bally - ballhw / 2;

//score variable
var score = 0;
var highscore = document.cookie;
var hs = "High Score: ";
var hstext = hs + highscore;

//drawing base model

rectangle(20, 256 - pongheight / 2, pongwidth, pongheight);

circle(realballx, realbally, ballhw);
image(ballimage, realballx, realbally, ballhw, ballhw);
image(
  ballimage,
  realballx - ballhw,
  realbally - ballhw,
  ballhw * 2,
  ballhw * 2
);
//scoreboard
text("Score:", 475, 35);
text(score, 545, 35);

//key down listeners
document.addEventListener("keydown", checkkeydown);

//keydown and keypress functions
function checkkeydown(e) {
  var key_code = e.which || e.keyCode;
  switch (key_code) {
    case 38: //up arrow key
      pong1moveup();
      break;
    case 40: //down arrow key
      pong1movedown();
      break;
    /*    case 87: //W key
      pong2moveup();
      break;
    case 83: //S key
      pong2movedown();
      break;
*/
    default:
    //do nothing
  }
}

//initialization of x and y coords PONG1
var x1 = 10;
var y1 = 256 - pongheight / 2;

//PONG 2
//var x2 = 1014 - pongwidth;
//var y2 = 256;\
console.log(highscore);
//x and y increase values
var dy = 3.0;
var dx = 3.0;
//ball movement
function ballmove() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  circle(realballx, realbally, ballhw);
  image(
    ballimage,
    realballx - ballhw,
    realbally - ballhw,
    ballhw * 2,
    ballhw * 2
  );
  realballx += dx;
  realbally += dy;

  if (realbally + dy > canvas.height - ballhw || realbally + dy < ballhw) {
    dy = -dy;
  }

  if (realballx + dx > canvas.width - ballhw / 2) {
    dx = -dx;
  } else if (realballx + dx < 0) {
    document.cookie = highscore;
    document.location.reload();
    clearInterval(interval);
  }
  //pong collisions
  if (
    realbally > y1 &&
    realbally < y1 + pongheight &&
    realballx - ballhw <= x1 + pongwidth
  ) {
    dx = -dx;

    //increases score
    score++;
    if (score > highscore) {
      highscore = score;
      return highscore;
    }
    //increases ball speed by random amount

    if (dx > 0) {
      dx = dx + Math.random();
    } else {
      dx = dx - Math.random();
    }

    if (dy > 0) {
      dy = dy + Math.random();
    } else {
      dy = dy - Math.random();
    }
  }

  //redraw
  text("Score:", 475, 35);
  text(score, 545, 35);
  text(hstext, 490, 496);
  rectangle(x1, y1, pongwidth, pongheight);
  image(pong1image, x1, y1, pongwidth, pongheight);
  image(
    ballimage,
    realballx - ballhw,
    realbally - ballhw,
    ballhw * 2,
    ballhw * 2
  );
}
//loop every 10 ms
var interval = setInterval(ballmove, 10);

//movement of pong1
function pong1moveup() {
  console.log("up");
  context.clearRect(0, 0, canvas.width, canvas.height);
  y1 -= 10;
  //context.drawImage(pong1image, x1, y1, pongwidth, pongheight);

  rectangle(x1, y1, pongwidth, pongheight);
  image(pong1image, x1, y1, pongwidth, pongheight);
  //REQUIRES STOP AT CERTAIN Y LEVEL !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  if (y1 < 10) {
    y1 = 10;
  }
  //REDRAW OTHER SPRITES

  //redraw scoreboard
  text("Score:", 475, 35);
  text(score, 545, 35);
  text(hstext, 490, 496);
}

function pong1movedown() {
  console.log("down");
  context.clearRect(0, 0, canvas.width, canvas.height);
  y1 += 10;

  rectangle(x1, y1, pongwidth, pongheight);
  image(pong1image, x1, y1, pongwidth, pongheight);
  image(
    ballimage,
    realballx - ballhw,
    realbally - ballhw,
    ballhw * 2,
    ballhw * 2
  );

  if (y1 + pongheight > 502) {
    y1 = 502 - pongheight;
  }

  text("Score:", 475, 35);
  text(score, 545, 35);
  text(hstext, 490, 496);
}

/*
//movement of pong2
function pong2moveup() {
  console.log("up2");
  context.clearRect(0, 0, canvas.width, canvas.height);
  y2 -= 5;
  context.drawImage(pong2image, x2, y2, pongwidth, pongheight);

  if (y2 < 10) {
    y2 = 10;
  }

  context.drawImage(pong1image, x1, y1, pongwidth, pongheight);
}
function pong2movedown() {
  console.log("down2");
  context.clearRect(0, 0, canvas.width, canvas.height);
  y2 += 5;
  context.drawImage(pong2image, x2, y2, pongwidth, pongheight);

  if (y2 + pongheight > 502) {
    y2 = 502 - pongheight;
  }

  context.drawImage(pong1image, x1, y1, pongwidth, pongheight);
}
*/
