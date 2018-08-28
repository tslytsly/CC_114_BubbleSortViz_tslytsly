// Tom Sealey
// Based on Daniel Shiffman's Coding Challenge
// http://youtube.com/thecodingtrain
// http://codingtra.in

// Coding Challenge #114: Bubble Sort Visualization
// https://youtu.be/67k3I2GxTH8

let values = [];

let loops = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
  for (i = 0; i < width; i++) {
    values[i] = random(height);
	//values[i] = noise(i/100.0)*height;
  }
}

function draw() {
	background(0);

	if (loops < values.length) {
	  for (j = 0; j < values.length-loops-1; j++) {
		let a = values[j];
		let b = values[j+1];
		if (a > b) {
		  swap(values, j, j+1);
		}
	  }
	} else {
	  console.log("finished");
	  noLoop();
	}
	loops++;

	for (i = 0; i < values.length; i++) {
	  stroke(255);
	  line(i, height, i, height - values[i]);
	}
}

swap = function(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}