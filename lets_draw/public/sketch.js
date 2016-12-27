var socket;

function setup(){
createCanvas(800,400);
socket = io.connect('http://localhost:3001');
background(10,80,90);
socket.on('mouse',newDrawing);
}
function newDrawing(data){
  noStroke();
  fill(0,255,0);
  ellipse(data.x,data.y,10,10);


}
function draw(){


}
function mouseDragged(){
  noStroke();
  fill(255,0,255);
  ellipse(mouseX,mouseY,10,10);

  console.log('sending '+mouseX+ ' '+mouseY);

  var data = {
    x: mouseX,
    y: mouseY
  }
  socket.emit('mouse',data);
}
