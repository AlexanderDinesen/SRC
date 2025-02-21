let kurve = [];
let t = 0;
let speed = 0.005;
let nuværendekurve = 0;
let P0;
let P1;
let P2;
let P3;
let A = {};
let B = {}; 
let C = {}; 
let D = {};
let E = {}; 
let P = {};
let helevej = [];

function setup() {
  createCanvas(550, 400);
  pushalle(); // igangsættelse
  opdaterkurve();
}

function draw() {
  background(255);
  line(0, height / 2 + 100, width, height / 2 + 100); // Linje bogstaver skal stå på
  for (i = 0; i < helevej.length; i++) { // tegner
    circle(helevej[i].x, helevej[i].y, 3)
  }

  if (t >= 0 && t <= 1) { // beregner
    calcBezier(t);
    //drawBezier();
    t += speed;
  } 
  
  if (t > 1) { // sørger for ikke at opdatere hele tiden
    t = 0;
    nuværendekurve++;
    if (nuværendekurve < kurve.length) {
      opdaterkurve();
    } else {
      stop(); // virker ikke
    }
  }
}


function pushalle() { // pusher
  kurve.push([50, 300, 100, 50, 155, 50, 170, 300]);
  kurve.push([170, 300, 170, 195, 110, 210, 55, 210]); // A
  kurve.push([55, 210, 10, 230, 235, 230, 215, 100]);
  
  kurve.push([215, 100, 200, 60, 160, 365, 230, 290]); // L
  
  kurve.push([230, 290, 265, 255, 255, 215, 335, 205]);
  kurve.push([335, 205, 395, 195, 325, 90, 280, 160]); // E
  kurve.push([280, 160, 270, 200, 260, 350, 360, 280]);
  
  kurve.push([360, 280, 415, 245, 460, 195, 495, 155]);
  kurve.push([495, 155, 510, 145, 460, 255, 405, 150]); // X
  kurve.push([405, 150, 430, 190, 480, 260, 510, 300]);
}

function opdaterkurve() { // opdatere
  if (nuværendekurve < kurve.length) {
    let bezier = kurve[nuværendekurve];
    P0 = {x: bezier[0], y: bezier[1]};
    P1 = {x: bezier[2], y: bezier[3]};
    P2 = {x: bezier[4], y: bezier[5]};
    P3 = {x: bezier[6], y: bezier[7]};
  }
}

function calcBezier(t) { // beregner
  A.x = lerp(P0.x, P1.x, t);
  A.y = lerp(P0.y, P1.y, t);
  B.x = lerp(P1.x, P2.x, t);
  B.y = lerp(P1.y, P2.y, t);
  C.x = lerp(P2.x, P3.x, t);
  C.y = lerp(P2.y, P3.y, t);
  D.x = lerp(A.x, B.x, t);
  D.y = lerp(A.y, B.y, t);
  E.x = lerp(B.x, C.x, t);
  E.y = lerp(B.y, C.y, t);
  P.x = lerp(D.x, E.x, t);
  P.y = lerp(D.y, E.y, t);
  helevej.push({x: P.x, y: P.y});
}

function drawBezier() {
  //fill(0);
  //noStroke();
  //let pos = sti.shift();
  //circle(pos.x, pos.y, 5);
}