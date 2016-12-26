var song;
var button;
var amp;

function setup(){
 createCanvas(200,200);
 song = loadSound("magic.mp3",loaded);
 amp = new p5.Amplitude();

 background(51);
 
}

function loaded(){
 console.log('loaded');
  button = createButton('play');
 button.mousePressed(togglePlaying);
 song.setVolume(0.3);
}
function draw(){
 background(51);
 fill(255,0,255);
 var vol = amp.getLevel();
 var dam = map(vol,0,0.3,10,200);
 ellipse(width/2,height/2,dam,dam);
}
function togglePlaying(){
 if (! song.isPlaying()){
  song.play();
  button.html('pause');
 }
 else{
  song.pause();
  button.html('play')
 }
}