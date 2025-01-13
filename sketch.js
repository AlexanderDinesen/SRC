let a;
let b;
let c;
let d;
let e;
let full;
let p1;
let p2;
let p3;
let p3;
let p4;
let t = 0;

function setup() {
	createCanvas(400, 400)
}

function draw() {
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
	}
	circle(full, 2)
}