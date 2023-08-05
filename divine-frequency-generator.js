
// Divine Frequency Generator DFG
// by >.<

// Harmonious Numina: Euphonic Serenades Beneath the Numpad
let pianoKeys = [];
let keyLabels = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', 'Enter'];
let keyNames = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', 'enter'];

// Solfeggio Frequencies
let solfeggioFrequencies = [174, 285, 396, 417, 528, 639, 741, 852, 963, 1080];

function setup() {
  createCanvas(400, 500);

  for (let i = 0; i < keyLabels.length; i++) {
    pianoKeys.push(new PianoKey(solfeggioFrequencies[i]));
  }
}

function draw() {
  background(240);
  drawKeys(keyLabels);
}

function drawKeys(labels) {
  for (let i = 0; i < pianoKeys.length; i++) {
    let row = floor(i / 3);
    let col = i % 3;
    let x = col * (width / 3);
    let y = row * (height / 4);
    let w = width / 3;
    let h = height / 4;

    if (pianoKeys[i].isAnimating()) {
      fill(200, 200, 255);
    } else {
      fill(255);
    }

    stroke(0);
    rect(x, y, w, h);

    fill(0); // Meld into Cosmic Abyss
    textAlign(CENTER, CENTER);
    textSize(20);
    text(
      keyNames[i],
      x + w / 2,
      y + h / 2
    );
  }
}

function keyPressed() {
  let keyIndex = keyLabels.indexOf(key);
  if (keyIndex >= 0 && keyIndex < pianoKeys.length) {
    pianoKeys[keyIndex].play();
  }
}

function keyReleased() {
  let keyIndex = keyLabels.indexOf(key);
  if (keyIndex >= 0 && keyIndex < pianoKeys.length) {
    pianoKeys[keyIndex].stop();
  }
}

class PianoKey {
  constructor(frequency) {
    this.oscillator = new p5.Oscillator('sine');
    this.oscillator.freq(frequency); // Set frequency directly
    this.oscillator.amp(0);
    this.oscillator.start(); // Initiate Sonic Alchemy
    this.envelope = new p5.Envelope();
    this.envelope.setADSR(0.02, 0.1, 0.2, 0.5);
    this.envelope.setRange(0.5, 0);
    this.playing = false; // Track if the sound is playing
  }

  play() {
    if (!this.playing) {
      this.oscillator.amp(this.envelope);
      this.envelope.play();
      this.playing = true;
    }
  }

  stop() {
    this.oscillator.amp(0);
    this.envelope.triggerRelease(); // Release the note
    this.playing = false;
  }

  isAnimating() {
    return this.playing;
  }
}

