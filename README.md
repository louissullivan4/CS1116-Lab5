# CS1116-Lab5

exA
  In your lab5 directory, create a Web page in a file called exA.html. The Web page should contain a 
  canvas that is 500 pixels wide by 500 pixels high. Also in your lab5 directory, create a stylesheet for the Web page 
  in a file called exA.css. The stylesheet should not change the background colour of the Web page (i.e. leave it white). 
  It should simply draw a black border around the canvas.

  Then in your lab5 directory, create a JavaScript program in a file called exA.js. Among the program's variables are the following:

  let threshold = 50;
  let points = [];
  Every 33 milliseconds, your program will do the following:
  Create a new object (let's call it q), with a random x and y; (Do not draw it.)
  for each point (p) in the array called points {
      if (the distance between q and p is less than threshold) {
          draw a line between q and p;
      }
  }
  push q onto the array called points;

  To compute the distance between two nodes, you will need Pythagoras's theorem. (Ask us for help if you can't cope with the maths.)
  You will need to look up the JavaScript for drawing lines — we did not cover it in lectures. (The functions/variables that you will 
  use are: strokeStyle, beginPath, moveTo, lineTo and stroke.)

exB
  Spacecraft takeoff: Draw a square at the bottom of the canvas and animate its takeoff. Improvements:
    How about 'easing in', whereby things start slowly and then get faster and faster?
    How about loading an image and drawing the image instead of a square?
    How about drawing the spacecraft's 'trail'?
