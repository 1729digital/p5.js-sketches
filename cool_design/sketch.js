var n = 0;
var c = 3;
var redd =50;
var g=100;
var b = 200;
function setup() {
  createCanvas(800,600);
  angleMode(DEGREES);
  background(0);

}
var x =0;
var radius = 10;
var angle = 137.3;

function draw() {
 //radius += 0.01;
 
 //angle += 1;
 var a = n* angle;
 var r = c * sqrt(n);
 
  n++;
 

 console.log(n);
  
  var x = r * cos(a) + width/2;
  var y = r * sin(a) + height/2;
  
   redd+=0.35;
  redd=redd%255;
  g+=0.13;
  g= g % 255;
  b+=0.22;
  b= b % 255;
  fill(redd,g,b);
  
  
  
  ellipse(x,y,radius,radius);
  
  rotate(10);
  
 
}