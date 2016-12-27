
var wave;
var button;
var slider;
var playing=false;

var env;

function setup(){
 createCanvas(100,100);
 
 env = new p5.Env();
 env.setADSR(0.05,0.1,0.25,1);
 env.setRange(1.2,0);
 
 wave = new p5.Oscillator();
 wave.setType('sine');
 wave.start();
 wave.freq(420);
 wave.amp(env);
 
 slider = createSlider(100,1200,440);

 
 button = createButton('play/pause');
 button.mousePressed(toggle);
 
 
}
function draw(){
 wave.freq(slider.value());
 if (playing){
  
  background(255,0,255);
 }else{
  background(51);
 }
 
}
function toggle(){
 env.play();
}