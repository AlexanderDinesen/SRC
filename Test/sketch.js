let P0 = {x: 50, y: 350, relativX: undefined, relativY: undefined};
let P1 = {x: 100, y: 50, relativX: undefined, relativY: undefined};
let P2 = {x: 300, y: 50, relativX: undefined, relativY: undefined};
let P3 = {x: 350, y: 350, relativX: undefined, relativY: undefined};
let P4 = {x: 350, y: 350, relativX: undefined, relativY: undefined};
let P5 = {x: 350, y: 350, relativX: undefined, relativY: undefined};
let P6 = {x: 350, y: 350, relativX: undefined, relativY: undefined};
let P7 = {x: 350, y: 350, relativX: undefined, relativY: undefined};
let P8 = {x: 350, y: 350, relativX: undefined, relativY: undefined};
let P9 = {x: 350, y: 350, relativX: undefined, relativY: undefined};
let P10 = {x: 350, y: 350, relativX: undefined, relativY: undefined};
let A = {x: undefined, y: undefined};
let B = {x: undefined, y: undefined};
let C = {x: undefined, y: undefined};
let D = {x: undefined, y: undefined};
let E = {x: undefined, y: undefined};
let P = {x: undefined, y: undefined};
let t=0
let pd=20
let goat;
let waittime = false;
let time = 0;

let bezierPoints = [P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10]
let drawbez = [];



function setup() {
  createCanvas(1600, 700);
}

function draw() {
  background(220);
  if (goat == true) {
  for(let t=0; t<1; t+=0.001){
    calcBezier(t);
    drawBezier();
  }
}
  drawPoints()
  supportLines()
  test();
  addpoint();
  word();
  time++;
  if (time > 60) {
    reset();
  }
}


function calcBezier(t){
  A.x=lerp(P0.x,P1.x,t)
  A.y=lerp(P0.y,P1.y,t)
  B.x=lerp(P1.x,P2.x,t)
  B.y=lerp(P1.y,P2.y,t)
  C.x=lerp(P2.x,P3.x,t)
  C.y=lerp(P2.y,P3.y,t)
  D.x=lerp(A.x,B.x,t)
  D.y=lerp(A.y,B.y,t)
  E.x=lerp(B.x,C.x,t)
  E.y=lerp(B.y,C.y,t)
  P.x=lerp(D.x,E.x,t)
  P.y=lerp(D.y,E.y,t)
  //print(t)
}

function beziezes() { //
  for (i = 1; i < bezierPoints.length; i++) {
 
  }
}

function supportLines(){
  for (i = 1; i < bezierPoints.length; i++)
    line(bezierPoints[i-1].x, bezierPoints[i-1].y, bezierPoints[i].x, bezierPoints[i].y)
}

function drawBezier(){
  circle(P.x,P.y,15);
}

function drawPoints(){
  for (i = 0; i < bezierPoints.length; i++) {
    circle(bezierPoints[i].x, bezierPoints[i].y, 10)
}
}


function word() { // min forkortelse af navn skal stå samt splines som gør den flydende
  if(keyIsPressed) {
		if ((key = 'b')) {
      P0 = {x: 106, y: 346}
      P1 = {x: 124, y: 285}
      P2 = {x: 138, y: 236}
      P3 = {x: 182, y: 196}
    }
  }
}





function test() {
      if (keyIsDown(49)) {
        P0 = {x: mouseX, y: mouseY}
        circle(mouseX, mouseY, 10)
        print("p0 : " + mouseX + " , " + mouseY)
       }
      if (keyIsDown(50)) {
        P1 = {x: mouseX, y: mouseY}
        circle(mouseX, mouseY, 10)
        print("p1 : " + mouseX + " , " + mouseY)
      }
      if (keyIsDown(51)) {
        P2 = {x: mouseX, y: mouseY}
        circle(mouseX, mouseY, 10)
        print("p2 : " + mouseX + " , " + mouseY)
      }
      if (keyIsDown(52)) {
        P3 = {x: mouseX, y: mouseY}
        circle(mouseX, mouseY, 10)
        print("p3 : " + mouseX + " , " + mouseY) 
      }
      if (keyIsDown(67)) {
        goat = true;
      }
      }

function addpoint() {
  if (keyIsPressed && time > 60) {
    if (key === 'a' || key === 'A') {
      let point = {x: mouseX, y: mouseY};
      bezierPoints.push(point)
      print(" added point " + bezierPoints.length)
      circle(point.x, point.y, 10)
      time = 0;      
    }
  }
}




let k=0;