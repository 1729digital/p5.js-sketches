function Bubble(x,y){
  this.x = x;
  this.y = y;
  this.lifespan = 255;


  this.display = function() {
    noStroke() ;
    fill(random(255),random(255),random(255),this.lifespan);
    ellipse(this.x,this.y,48,48);
  };
  this.update = function(){
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
    this.lifespan--;
  };


}
