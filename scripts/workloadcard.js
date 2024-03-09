// Get a reference to the canvas element



// Initial width of the fill bar
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

function drawbarGreen () {

    const canvas = document.getElementById('taskscomplete');
    const ctx = canvas.getContext('2d');


    
    ctx.fillStyle = '#5DC080'; // green color
    ctx.globalAlpha = 0.5;
    
    roundRect(ctx, 0, 0, 150, canvas.height/2,5);


}

function animateFillBarGreen() {


    const canvas = document.getElementById('taskscomplete');
    const ctx = canvas.getContext('2d');
    // Clear the canvas
    ctx.globalAlpha = 1;

    // Draw the fill bar

    ctx.fillStyle = '#5DC080'; // green color
    
    roundRect(ctx, 0, 0, fillWidth, canvas.height/2, 5);
    

    // Update the width of the fill bar
    fillWidth += 1;

    // If the fill bar has filled the whole canvas, stop the animation
    if (fillWidth > canvas.width) {
        return;
    }

    // Call the animateFillBar function again after the browser finishes the current frame
    if (fillWidth< 100) { 
        requestAnimationFrame(animateFillBarGreen);

    }
}

function drawbarRed() {

    const canvas = document.getElementById('tasksongoing');
    const ctx = canvas.getContext('2d');

    
    ctx.fillStyle = '#F94E56'; // green color
    ctx.globalAlpha = 0.5;
    
    roundRect(ctx, 0, 0, 150, canvas.height/2,5);


}

function animateFillBarRed() {

    const canvas = document.getElementById('tasksongoing');
    const ctx = canvas.getContext('2d');
    // Clear the canvas

    // Draw the fill bar

    ctx.fillStyle = '#F94E56'; // green color
    ctx.globalAlpha = 1;
    
    roundRect(ctx, 0, 0, fillWidth, canvas.height/2, 5);
    

    // Update the width of the fill bar
    fillWidth += 1;

    // If the fill bar has filled the whole canvas, stop the animation
    if (fillWidth > canvas.width) {
        return;
    }

    // Call the animateFillBar function again after the browser finishes the current frame
    if (fillWidth< 30) { 
    requestAnimationFrame(animateFillBarRed);

    }
}

function drawbarYellow() {

    const canvas = document.getElementById('tasksnotstarted');
    const ctx = canvas.getContext('2d');

    
    ctx.fillStyle = '#FEB734'; // green color
    ctx.globalAlpha = 0.5;
    
    roundRect(ctx, 0, 0, 150, canvas.height/2,5);


}

function animateFillBarYellow() {

    const canvas = document.getElementById('tasksnotstarted');
    const ctx = canvas.getContext('2d');
    // Clear the canvas

    // Draw the fill bar

    ctx.fillStyle = '#FEB734'; // green color
    ctx.globalAlpha = 1;
    
    roundRect(ctx, 0, 0, fillWidth, canvas.height/2, 5);
    

    // Update the width of the fill bar
    fillWidth += 1;

    // If the fill bar has filled the whole canvas, stop the animation
    if (fillWidth > canvas.width) {
        return;
    }

    // Call the animateFillBar function again after the browser finishes the current frame
    if (fillWidth< 90) { 
    requestAnimationFrame(animateFillBarYellow);

    }
}

// Start the animation
drawbarGreen();
drawbarRed();
drawbarYellow();
animateFillBarGreen();
animateFillBarRed();
animateFillBarYellow();
