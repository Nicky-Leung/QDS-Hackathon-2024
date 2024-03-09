// Get a reference to the canvas element
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Initial position of the line
let x = 0;

function animateLine() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the line
    ctx.beginPath();
    ctx.moveTo(x, canvas.height / 2);
    ctx.lineTo(x + 100, canvas.height / 2);
    ctx.stroke();

    // Update the position of the line
    x += 1;

    // If the line has moved off the edge of the canvas, reset its position
    if (x > canvas.width) {
        x = 0;
    }

    // Call the animateLine function again after the browser finishes the current frame
    requestAnimationFrame(animateLine);
}

// Start the animation
animateLine();