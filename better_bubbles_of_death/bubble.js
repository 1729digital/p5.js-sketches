function Bubble(x,y){
  this.x = x;
  this.y = y;
  this.r = random(255);
  this.g= random(255);
  this.b = random(255);


  this.lifespan = 255;
//  this.col = color(random(255),random(255),random(255),this.lifespan);


  this.display = function() {
    noStroke() ;
    fill(this.r,this.g,this.b,this.lifespan);
    ellipse(this.x,this.y,42,42);


  }



    ellipse(this.x,this.y,48,48);

  this.update = function(){
    this.x = this.x + random(-2,2);
    this.y = this.y + random(-2,2);
    this.x = this.x + random(-2,2);
    this.y = this.y + random(-2,2);
    this.x = this.x + random(-2,2);
    this.y = this.y + random(-2,2);
    this.x = this.x + random(-2,2);
    this.y = this.y + random(-2,2);
    this.lifespan-=0.5;
  };

  this.isFinished = function(){
    if(this.lifespan<0){return true;}
    else{return false;}
  };


}
