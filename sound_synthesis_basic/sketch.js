
var wave;
var button;
var slider;
var playing=false;

function setup(){
 createCanvas(100,100);
 
 wave = new p5.Oscillator();
 wave.setType('sine');
 wave.start();
 wave.freq(420);
 wave.amp(0);
 
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
 if (!playing){
   
 wave.amp(0.5);
 
  playing = true;
 }else{
  wave.amp(0);
  playing = false;
 }
}