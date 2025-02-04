let P0 = {x: 50, y: 350, relativX: undefined, relativY: undefined};
let P1 = {x: 100, y: 50, relativX: undefined, relativY: undefined};
let P2 = {x: 300, y: 50, relativX: undefined, relativY: undefined};
let P3 = {x: 350, y: 350, relativX: undefined, relativY: undefined};
let P4 = {x: 350, y: 350, relativX: undefined, relativY: undefined};
let A = {x: undefined, y: undefined};
let B = {x: undefined, y: undefined};
let C = {x: undefined, y: undefined};
let D = {x: undefined, y: undefined};
let E = {x: undefined, y: undefined};
let P = {x: undefined, y: undefined};
let t=0
let pd=20

let bezierPoints = [P0,P1,P2,P3,P4,]



function setup() {
  createCanvas(1600, 700);
}

function draw() {
  background(220);
  for(let t=0; t<1; t+=0.001){
    calcBezier(t);
    //drawBezier();
  }
  drawPoints()
  supportLines()
  test();
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
}

function supportLines(){
  line(P0.x,P0.y,P1.x,P1.y);
  line(P1.x,P1.y,P2.x,P2.y);
  line(P2.x,P2.y,P3.x,P3.y);
}

function drawBezier(){
  circle(P.x,P.y,15);
}

function drawPoints(){
  circle(P0.x,P0.y,pd);
  circle(P1.x,P1.y,pd);
  circle(P2.x,P2.y,pd);
  circle(P3.x,P3.y,pd);
}

function letterH() {
  if(keyIsPressed) {
		if ((key = 'h')) {
      P0 = {x: 50, y: 350}
      P1 = {x: 50, y: 350}
      P2 = {x: 50, y: 350}
      P3 = {x: 50, y: 350}

      circle(P0.x, P0.y, 20)
      circle(P1.x, P1.y, 20)
      circle(P2.x, P2.y, 20)
      circle(P3.x, P3.y, 20)

    }      
    }
  }

function test() {
      if (keyIsDown(49)) {
        P0 = {x: mouseX, y: mouseY}
        circle(mouseX, mouseY)
        print("good")
       }
      if (keyIsDown(50)) {
        P1 = {x: mouseX, y: mouseY}
        circle(mouseX, mouseY)
      }
      if (keyIsDown(51)) {
        P2 = {x: mouseX, y: mouseY}
        circle(mouseX, mouseY)
      }
      if (keyIsDown(52)) {
        P3 = {x: mouseX, y: mouseY}
        circle(mouseX, mouseY) 
      }
      }




let k=0;




