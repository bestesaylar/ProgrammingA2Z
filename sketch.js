var button;

var fr = 10
// Array of words
var words = [];

// Word count
var word_count = {};

var p = document.querySelector('p');

var regex = /New York/gi;

var canvas;

function preload(){
  p=loadStrings('ny.txt');
  loadStrings('ny.txt', count);
}

function setup(){
frameRate(fr);
h1=createElement('h1','New York to Istanbul')
canvas = createCanvas(windowWidth,windowHeight);
canvas.position(0,0);
textAlign(CENTER, CENTER);
// createP(p);
createP(join(p,"<br/>"));
button=createButton("Istanbul");
button.mousePressed(Istanbul);
}


function Istanbul(){
    // h1.html("Istanbul")
    createP(p.toString().replace(regex,'Istanbul'));
}

// function mousePressed(){
// Istanbul();
// }


//CANVAS

function draw() {
  // h1.position(x,y);
  // x=x+random(-5,5);
  clear();
  // background('white');
  for (let word in word_count) {
    textSize(word_count[word] * 10);
    fill('black');
    text(word, random(10, width - 10), random(10, height - 10));
  }
  // noLoop();
}

function count(data) {
  // Go line by line
  for (let d of data) {
    // Turn each line into an array of words
    let line = splitTokens(d);
    // Add it to 1 big array
    words = words.concat(line);
  }

  // Clean up all the words
  for (let w in words) {
    let word = words[w];
    // Remove punctuation
    word = word.replace(/[\-_:;.,!?\(\)]/g, "");
    // Make it all lowercase
    word = word.toLowerCase();
    // Get rid of whitespace around the word
    word = word.trim();
    // If nothing is left, get rid of it
    if (word.length < 1) words.splice(w, 1);
    // Otherwise put cleaned up word back in array
    else words[w] = word;
  }

  // Index the words
  for (let word of words) {
    if (word in word_count) word_count[word]++;
    else word_count[word] = 1;
  }
}




// //Oldu
// var p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// var regex = /dog/gi;


// function setup(){
// createP(p.replace(regex, 'ferret'));
// }

