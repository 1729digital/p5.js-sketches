let char1;
let char2;
let cookie;
let cookieSize = 20;

let score1 = 0;
let score2 = 0;

function setup() {
  createCanvas(600, 400);

  char1 = new Character(150, height / 2, color(100, 150, 255), 87, 83, 65, 68);  // W, S, A, D
  char2 = new Character(450, height / 2, color(255, 150, 100), UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW);
  spawnCookie();
}

function draw() {
  background(220);

  char1.update(char2.trail);
  char2.update(char1.trail);

  char1.showTrail();
  char2.showTrail();

  char1.show();
  char2.show();

  // Draw cookie
  fill(50, 255, 50);
  ellipse(cookie.x, cookie.y, cookieSize);

  // Check for cookie collision
  if (char1.eat(cookie)) {
    score1++;
    spawnCookie();
  }

  if (char2.eat(cookie)) {
    score2++;
    spawnCookie();
  }

  // Display score
  textSize(20);
  fill(0);
  text(`Player 1 Score: ${score1}`, 10, 30);
  text(`Player 2 Score: ${score2}`, width - 170, 30);
}

function spawnCookie() {
  let x = random(cookieSize / 2, width - cookieSize / 2);
  let y = random(cookieSize / 2, height - cookieSize / 2);
  cookie = createVector(x, y);
}

class Character {
  constructor(x, y, col, upKey, downKey, leftKey, rightKey) {
    this.x = x;
    this.y = y;
    this.prevX = x;
    this.prevY = y;
    this.col = col;
    this.size = 40;
    this.speed = 4;
    this.trail = [];
    this.upKey = upKey;
    this.downKey = downKey;
    this.leftKey = leftKey;
    this.rightKey = rightKey;
  }

  update(opponentTrail) {
    this.move();

    // Check collision with opponent's trail
    for (let pos of opponentTrail) {
      let d = dist(this.x, this.y, pos.x, pos.y);
      if (d < this.size / 2) {
        // Revert to previous position
        this.x = this.prevX;
        this.y = this.prevY;
      }
    }

    this.trail.push({ x: this.x, y: this.y });
    this.prevX = this.x;
    this.prevY = this.y;

    while (this.trail.length > 200) {
      this.trail.shift();
    }
  }

  show() {
    fill(this.col);
    rect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
  }

  showTrail() {
    for (let i = 0; i < this.trail.length; i++) {
      let alpha = map(i, 0, this.trail.length, 0, 255);
      let col = color(red(this.col), green(this.col), blue(this.col), alpha);
      fill(col);
      rect(this.trail[i].x - this.size / 2, this.trail[i].y - this.size / 2, this.size, this.size);
    }
  }

  move() {
    if (keyIsDown(this.upKey)) {
      this.y -= this.speed;
    }
    if (keyIsDown(this.downKey)) {
      this.y += this.speed;
    }
    if (keyIsDown(this.leftKey)) {
      this.x -= this.speed;
    }
    if (keyIsDown(this.rightKey)) {
      this.x += this.speed;
    }

    
    this.x = constrain(this.x, 0 + this.size / 2, width - this.size / 2);
    this.y = constrain(this.y, 0 + this.size / 2, height - this.size / 2);
  }

  eat(target) {
    let d = dist(this.x, this.y, target.x, target.y);
    if (d < this.size / 2 + cookieSize / 2) {
      return true;
    }
    return false;
  }
}
