let guitarStrings = [];
let frequencies = [];
let keys = "abcdefghijklmnopqrstuvwxyz0123456789";
let keyPressedFlags = new Array(36).fill(false);

// Recording variables
let recorder;
let soundFile;
let recording = false;
let recordButton, saveButton;

let row1 = "1234567890";
let row2 = "qwertyuiop";
let row3 = "asdfghjkl";
let row4 = "zxcvbnm";
let allRows = [row1, row2, row3, row4];
let keyWidths = [50, 60, 70, 80];  // Slightly wider keys for each row
let rowStarts = [100, 70, 120, 170];  // Adjusted starting x-positions for each row

function setup() {
  createCanvas(800, 300);
  noLoop();

  // Guitar string setup using oscillators for a plucked sound
  let baseFrequency = 130.81;  // C3 in Hz
  
  for (let i = 0; i < 36; i++) {
    frequencies[i] = baseFrequency * Math.pow(2, i / 12);
    
    let guitarString = {
      osc: new p5.Oscillator('triangle'),  // Using a triangle wave oscillator
      env: new p5.Envelope(0.001, 0.5, 0, 0.5)  // Quick attack and release for a plucked sound
    };
    
    guitarString.osc.freq(frequencies[i]);
    guitarString.osc.amp(guitarString.env);
    guitarString.osc.start();
    
    guitarStrings.push(guitarString);
  }

  // Recorder setup
  recorder = new p5.SoundRecorder();
  soundFile = new p5.SoundFile();

  // UI buttons
  recordButton = createButton('Start Recording');
  recordButton.position(10, 260);
  recordButton.mousePressed(toggleRecording);

  saveButton = createButton('Save Recording');
  saveButton.position(130, 260);
  saveButton.mousePressed(saveSoundFile);
}

function draw() {
  background(220);
  drawKeyboard();
}

function drawKeyboard() {
  let yPosition = 50;
  for (let r = 0; r < allRows.length; r++) {
    let xPosition = rowStarts[r];
    for (let char of allRows[r]) {
      let index = keys.indexOf(char);
      if (keyPressedFlags[index]) {
        fill(150, 150, 255);  // Color for a pressed key
      } else {
        fill(255);  // Default key color
      }
      // Drawing each key with rounded edges
      rect(xPosition, yPosition, keyWidths[r] - 2, 40, 5);  // Last parameter is for rounded corners
      
      fill(0);  // Text color
      textAlign(CENTER, CENTER);  // Centering the text both horizontally and vertically
      text(char.toUpperCase(), xPosition + keyWidths[r] / 2, yPosition + 20);  // Convert char to uppercase for display
      xPosition += keyWidths[r];
    }
    yPosition += 50;
  }
}

function keyPressed() {
  let index = keys.indexOf(key.toLowerCase());
  playNote(index);
}

function playNote(index) {
  if (index >= 0 && index < 36) {
    guitarStrings[index].env.play();
    keyPressedFlags[index] = true;
    redraw();
    setTimeout(() => {
      keyPressedFlags[index] = false;
      redraw();
    }, 100);
  }
}

function toggleRecording() {
  if (!recording) {
    recorder.record(soundFile);
    recordButton.html('Stop Recording');
  } else {
    recorder.stop();
    // A slight delay to ensure the recording is fully processed before we allow saving or doing anything with it
    setTimeout(() => {
      recordButton.html('Start Recording');
    }, 100);
  }
  recording = !recording;
}

function saveSoundFile() {
  if (soundFile && soundFile.duration() > 0) {  // Check if there's any recorded content
    saveSound(soundFile, 'myRecording.wav');
  } else {
    alert("No recorded sound to save!");
  }
}
