//PROJECT FINISHED ON 11/27/2020
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

//snake
let snake = [
  { x: 220, y: 200 },
  { x: 210, y: 200 },
  { x: 200, y: 200 },
  { x: 190, y: 200 },
  { x: 180, y: 200 }
];

//draw one pixel of snake (DO NOT CALL THIS FUNCTION)
function drawsnakepixel(arrayelement) {
  rectangle(arrayelement.x, arrayelement.y, 10, 10, context);
}

//prints snake pixels (CALL THIS FUNCTION)
function drawsnake() {
  snake.forEach(drawsnakepixel);
}

//change in x and y
var dx = 10;
var dy = 0;

//message when game over
const wallcollide = "You collided with a wall! Score: ";
const eatyourself = "You ate yourself! Score: ";
//move the snake
function move() {
  var x = snake[0].x;
  var y = snake[0].y;

  const head = { x: x + dx, y: y + dy };

  //wall collision detection
  if (x === 410 || x === -10 || y === -10 || y === 410) {
    alert(wallcollide + score);
    clearInterval(loop);
    location.reload();
    //document.location.reload();
  }

  //checks if snake touches body
  for (let i = 4; i < snake.length; i++) {
    if (snake[i].x === x && snake[i].y === y) {
      alert(eatyourself + score);
      clearInterval(loop);
      //document.location.reload();
    }
  }

  //adds next block, removes last block
  snake.unshift(head);
  snake.pop();
}

//main snake move code
function main() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  move();
  drawsnake();
  generatepellet();
}
//calls main
var loop = setInterval(main, 100);

//score value to see if first pellet has been eaten
var score = 0;

//pellet x and y coordinates ARE DEFINED IN PELLETCORDS.JS

var dumbcheck = 0;
var x = 0;
var y = 0;
//generates pellet
function generatepellet() {
  //generates random coordinate with x and y

  function generatepelletcoords() {
    var xpellet = xcoords[Math.floor(Math.random() * (38 - 1 + 1) + 1)];
    var ypellet = ycoords[Math.floor(Math.random() * (38 - 1 + 1) + 1)];

    var pelletxyarray = [{ x: xpellet, y: ypellet }];

    //returns array for use in other function
    return pelletxyarray[0];
  }

  //draw pellet
  function drawpellet() {
    circle(x + 5, y + 5, 5, context);
  }

  //main function body
  if (dumbcheck === 0) {
    dumbcheck++; //PREVENTS CODE FROM RUNNING TWICE

    x = generatepelletcoords().x;
    y = generatepelletcoords().y;
  } else if (snake[0].x === x && snake[0].y === y) {
    x = generatepelletcoords().x;
    y = generatepelletcoords().y;
    //adds another chunk to snake's body
    var lastItem = snake[snake.length - 1];
    snake.push({ x: lastItem.x - dx, y: lastItem.y - dy });
    score++;
  }
  drawpellet();
}

//key down listeners
document.addEventListener("keydown", checkkeydown);

//key listeners
function checkkeydown(e) {
  var key_code = e.which || e.keyCode;
  switch (key_code) {
    case 38: //up arrow key
      goup();
      break;
    case 40: //down arrow key
      godown();
      break;
    case 37: //left arrow key
      goleft();
      break;
    case 39: //right arrow key
      goright();
      break;

    default:
    //do nothing
  }
}

//movement functions
//UP AND DOWN ARE REVERSED BECAUSE OF COORDINATE PLANE in quadrant four |y|
function godown() {
  //if the snake is not going up, then execute
  if (dy !== -10) {
    dx = 0;
    dy = 10;
  }
}

function goup() {
  if (dy !== 10) {
    dx = 0;
    dy = -10;
  }
}

function goleft() {
  if (dx !== 10) {
    dx = -10;
    dy = 0;
  }
}

function goright() {
  if (dx !== -10) {
    dx = 10;
    dy = 0;
  }
}
