var inc = 0.001;
var start = 0 ;


function setup() {
  createCanvas(400,400);
}

function draw() {
  background(51);
  stroke(255);
  noFill();
  
  var xoff = start;
  
  beginShape();
  for ( var x = 0; x<width;x++){
   stroke(255);
   var y = noise(xoff)*height;
   vertex(x,y);
   xoff+=inc;
  }
  endShape();
  
  start+= inc;
  inc+=0.000001;
  
 
}