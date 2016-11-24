var bubbles = [];

function setup() {
  createCanvas(600,400);
}

function draw(){
  background(0);
  for (var i=0;i<bubbles.length;i++){
    bubbles[i].update();
    bubbles[i].display();
    if (bubbles[i].lifespan < 0 ){
      bubbles.splice(i,1);
    }
  }
}
function mouseDragged(){
var b = new Bubble(mouseX,mouseY);
bubbles.push(b);
  }
