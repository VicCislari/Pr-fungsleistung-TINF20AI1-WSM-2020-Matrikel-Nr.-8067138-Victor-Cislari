/*Victor Cislari (DHBW-Mannheim, Matrikel-Nr.: 8067138)*/

var canvas; //the html-object <canvas>
var canvasHeight;
var canvasWidth;

var c; //the inner structure of the cnavas

var dx = 7; //speed in the x direction (direction vector)
var dy = dx; //speed in the y direction (direction vector)

var size = 150; //size of the image
var y; //starting coordinate but it will be changed later
var x; //starting coordinate but it will be changed later

var img;

var cancel; // = animate();

var scrollBarWidth = 20; //for animate()

function startCanvasAnimation() //it was window.onload before, but i had to change in order to have multiple window.onloads, load.js requires one two
{
    //get the box of where the canvas will appear in
    canvas = document.getElementById("canvas");

    //This is for presize borderControll... in animate there is a section commented borderControll.
    //there it is checked weather the 2d-ball is still inside the canvas borders.
    //more on that in animate()
    canvasHeight = window.innerHeight - document.getElementById("mainContent").clientHeight - scrollBarWidth;
    canvasWidth = window.innerWidth - scrollBarWidth; //-scrollBarWidth because i dont want the ball to go over the scrollbar
    canvas.height = canvasHeight;
    canvas.width = canvasWidth;

    //load image into canvas 2d object
    img = new Image();
    img.src = 'gauss_round.png';
    c = canvas.getContext('2d');

    //set the startingpoints
    y = getCoordinate(canvasHeight);
    x = getCoordinate(canvasWidth);

    //load image into canvas
    img.onload = c.drawImage(img, x, y, size, size);

    startAnimation();
}

function getCoordinate(maxCoordinate) //helper Function
{
    return Math.random() * (maxCoordinate - size); //Math.radom() returns a value from 0 to 1. So multiplying it with the maximum width or length, will give you something between 0 and the maxCoordinate
}

function animate() {
    //I can't explain why this has to be done. I just looked this up on the internet
    //clearely it is to stop the animate() function at one point, but have no idea how this works in depth.
    //also, requestAnimation(animate) has to be used to make the rendering of the image reoccure.
    cancel = requestAnimationFrame(animate);

    //border-controll
    if (x + size > canvasWidth - scrollBarWidth || x < 0) dx = -dx;
    if (y + size > canvasHeight - scrollBarWidth || y < 0) dy = -dy;
    x += dx;
    y += dy;

    //updating the canvas context
    canvas = document.getElementById("canvas");
    c = canvas.getContext('2d');
    c.clearRect(0, 0, canvasWidth, canvasHeight); //update step 1
    c.drawImage(img, x, y, size, size); //update step 2
}

function startAnimation() {
    cancelAnimationFrame(cancel); //this is a JavaScript specific function
    reloadCanvasDimensions(); //To get the propper dimensions any time something happens
    cancel = animate(); //start animating
}

function reloadCanvasDimensions() {
    //literally just gets the new parameters. No new Functionality or Newance added
    canvasHeight = window.innerHeight - document.getElementById("mainContent").clientHeight ;//- scrollBarWidth; //this still doesn't solve the documented glitch
    canvasWidth = window.innerWidth ;//- scrollBarWidth; //still doesn't solve the documented glitch

    canvas.height = canvasHeight;
    canvas.width = canvasWidth;

    x = reloadCoordinates(x + size, canvasWidth) - size;
    y = reloadCoordinates(y + size, canvasHeight) - size;
}

function reloadCoordinates(currentCoordinate, newCoordinate) //helper Function
{
    //will give a new value, if the new coordinate is less than the perviouse one.
    if (currentCoordinate > newCoordinate) return newCoordinate;
    return currentCoordinate;
}
