var inc = 0.1;
var scl = 10;
var cols,rows;
var zoff=0;
var particles = [];

var fr;

var flowfield = [];

function setup() {
   background(255);

  createCanvas(400,400);
  cols = floor(width/scl);
  rows = floor(height/scl);
  fr = createP('');
  
  flowfield = new Array(cols*rows);
  
  for(var i=0;i<500;i++){
  
  particles[i]= new Particle();}
}

function draw() {
 var yoff = 0;
  stroke(255);
  noFill();
 
  for(var y = 0;y<rows;y++){
   var xoff = 0;
   for ( var x = 0; x<cols;x++){
    var index = x+y*cols;
    flowfield[index]= v;
    
    var angle = noise(xoff,yoff,zoff)*TWO_PI*4;
    var v = p5.Vector.fromAngle(angle);
    v.setMag(1);
    
    stroke(0,50);
    //push();
    //translate(x*scl,y*scl);
   // rotate(v.heading());
    //strokeWeight(1);
    //line(0,0,scl,0);
    //pop();
    
  
    
    xoff += inc;
   }
   yoff+= inc;
   zoff+=0.0003;
 
  }
  for(var i=0;i<particles.length;i++){
   particles[i].follow(flowfield);
  particles[i].update();
  particles[i].edges();
  particles[i].show();
  
  
   
  }
  
  fr.html(floor(frameRate()));
}