let a;
let b;
let c;
let d;
let e;
let f;
let full;
let p1;
let p2;
let p3;
let p4;
let t = 0;
change = 0.005;

function setup() {
	createCanvas(1400, 700)
	background(200, 200, 200)
	p1 = (30, 370);
	p2 = (47, 38);
	p3 = (349, 20);
	p4 = (380, 380);
}

function draw() {
	//randombezier();
	//setbezier();
	handwriting();
}



function randombezier() {
	let circlecolor = [random(0, 255), random(0,255), random(0,255)]
	a = lerp(p1, p2, t)
	b = lerp(p2, p3, t)
	c = lerp(p3,p4,t)
	d = lerp(a,b,t)
	e = lerp(b,c,t)
	full = lerp(d, e, t)
	t += 0.02
	if (t >= 1) {
		t = 0
		print("Reset")
		p1 = random(0, 400)
		p2 = random(0, 400)
		p3 = random(0, 400)
		p4 = random(0, 400)	
	}
	//circle(a, b, 20)
	//circle(b, c, 20)
	//circle(c, d, 20)
	//circle(d, e, 20)
	//circle(e, d, 20)
	fill(circlecolor)
	circle(e, full, 20)
}


function setbezier() {
	a = lerp(p1, p2, t)
	b = lerp(p2, p3, t)
	c = lerp(p3,p4,t)
	d = lerp(a,b,t)
	e = lerp(b,c,t)
	full = lerp(d, e, t)
	t += change
	if(t>=1) {
		change = 0;
		t = 1;
	}
	//if (t >= 1) {
		//t = 0
		//print("Reset")
	//}
	circle(a, b, 5)
	//circle(b, c, 5)
	//circle(c, d, 5)
	//circle(d, e, 5)
	//circle(e, d, 20)
	//circle(e, full, 20)
}
//a



function handwriting() {
	a = lerp(p1, p2, t)
	b = lerp(p2, p3, t)
	c = lerp(p3, p4, t)
	d = lerp(a, b, t)
	e = lerp(b, c, t)
	f = lerp(d, e, t)
	if(keyIsPressed) {
		if ((key = 'h')) {
			p1 = (20, 20)
			p2 = (35, 50)
			p3 = (20, 80)
			p4 = (50, 50)
			noFill();
			
				
			}
		}	
	}




