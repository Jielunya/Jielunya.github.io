//genuary2024 - wobbly function day ;
let stars;
let playBool = true;
function setup() {
  cnv = createCanvas(windowWidth * 0.95, windowHeight * 0.95);
  rectMode(CENTER);
  angleMode(DEGREES);
  c = max(width, height);
  nRot = int(random(2, 15));
  stars = [];
  nStars = int(random(c / 5, c * 1.5));
  for (let i = 0; i < nStars; i++) {
    stars[i] = {
      x: randomGaussian(0, c / 4),
      y: randomGaussian(0, c / 4),
      s: randomGaussian(0.2, 1),
      color: color(random(200, 255), random(200, 255), random(200, 255)),
      a: random(-c / 5, c / 5),
      b: random(-c / 5, c / 5),
      c: random(-2, 2),
      d: random(-5, 5)
    };
  }
}

function draw() {
  background(5, 15, 20);

  translate(width / 2, height / 2);
  t = frameCount / 10;
  noStroke();
  for (let i = 0; i < stars.length; i++) {
    for (let j = 0; j < nRot; j++) {
      push();
      rotate((360 / nRot) * j);
      fill(stars[i].color);
      x =
        stars[i].x +
        stars[i].a * sin(stars[i].b * sin(t)) +
        stars[i].b * cos(stars[i].c - (t / 4) * sin((stars[i].c * t) / 10));
      y =
        stars[i].y +
        stars[i].b * cos(stars[i].b * sin(t)) +
        stars[i].a * sin(stars[i].d - (t / 4) * cos((stars[i].d * t) / 10));
      circle(x, y, stars[i].s);
      pop();
    }
  }

  border();
}

function border() {
  noFill();
  stroke(10, 20, 30);
  strokeWeight(4);
  rect(0, 0, width - 20, height - 20);
}

function mousePressed() {
  frameCount = 0;
  setup();
  draw();
}

function keyPressed() {
  if (keyCode === 32 && playBool) {
    playBool = false;
    noLoop();
  } else {
    playBool = true;
    loop();
  }

  //save(cnv,"timewobble",'jpg')
}

function windowResized() {
  resizeCanvas(windowWidth * 0.9, windowHeight * 0.9);
}