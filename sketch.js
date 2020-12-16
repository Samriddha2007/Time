var hr,mn,sc;
var hr1,mn1,sc1;

var l = 1;
var bg;
var w = 10;
var w1 = 10;
var w2 = 10;
function preload()
{
  bg = loadImage('images/bg.jpg');
}

function setup() {
  createCanvas(displayWidth,displayHeight);
}

function draw() {
  background(bg);  
  drawSprites();

 // arc(650, 50, 80, 80, 0,-1);
  
  hr = hour() * 20;
  mn = minute() * 15;
  sc = second() * 10;
  sc1 = second();
  mn1 = minute();
  hr1 = hour(); 
  

 // text("Hour is :" + hr1,200,100);
  //text("Minute is :" + mn1,200,150);
  //text("Second is :" + sc1,200,200);

  

  angleMode(DEGREES); // Change the mode to DEGREES
 

     w = sc;
     w1 = mn;
     w2 = hr;
 
  translate(width / 2, height / 2);
  push();
  fill("green");
  rect(-600, -305, w, 40);
  fill("blue");
  rect(-600, -105, w1, 40);
  fill("red");
  rect(-600, 125, w2, 40);
  pop();
  textSize(20);
  fill("yellow");
  text("SECOND = " +sc1,w - 750,-280)
  text("MINUTE = " + mn1,w1 - 750,-80)
  text("HOUR = " + hr1,w2 - 750,150)
}