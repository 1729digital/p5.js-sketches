
var slide;
var sb;
var x;
var newGame;
var para ;
var result;

function setup(){
  x= floor(random(100));
  newGame = createButton('....................New game...............');
  newGame.mousePressed(newgamefunction);

  para = createP('guess '+x);


   slide = createSlider(0,100,50);
   createP('');
   sb = createButton(' .............................. Submit  .............................................');
   sb.mousePressed(sbf);
   createP('');
   result = createP('');

}
function newgamefunction(){
x= floor(random(100));
para.html('guess '+x);
result.html('');
slide.value(50);
}
function sbf(){
  slide.value(50);
  var off = abs((x - slide.value()));

  result.html('you value was '+slide.value()+' you were off by '+off);

}
