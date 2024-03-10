let fillWidth = 0;

function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.arcTo(x + width, y, x + width, y + radius, radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
    ctx.lineTo(x + radius, y + height);
    ctx.arcTo(x, y + height, x, y + height - radius, radius);
    ctx.lineTo(x, y + radius);
    ctx.arcTo(x, y, x + radius, y, radius);
    ctx.closePath();
    ctx.fill();
}

function drawbarElement () {
    const canvas = document.getElementById('emotion');
    const ctx = canvas.getContext('2d');
    ctx.globalAlpha = 1;
    const img = new Image();
    img.src = "../images/grinning-face.svg";
    img, onload = function() {
        ctx.drawImage(img, 0, 0);
    }
}

function animateFillBarGreen() {


    const canvas = document.getElementById('emotion');
    const ctx = canvas.getContext('2d');
    
    // Clear the canvas
    

    // Draw the fill bar

    ctx.fillStyle = '#5DC080'; // green color
    ctx.globalAlpha = 0.5;
    roundRect(ctx, 0, 0, fillWidth, canvas.height, 5);
    
    

    // Update the width of the fill bar
    fillWidth += 7;

    // If the fill bar has filled the whole canvas, stop the animation
    if (fillWidth > canvas.width) {
        return;
    }

    // Call the animateFillBar function again after the browser finishes the current frame
    if (fillWidth< 500) { 
        requestAnimationFrame(animateFillBarGreen);

    }
}
animateFillBarGreen();
