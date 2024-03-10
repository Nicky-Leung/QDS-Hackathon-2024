let fillWidth2 = 0;
let fillWidth3 = 0;
let fillWidth4 = 0;

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


function drawfillgreen() {
   


    const canvas = document.getElementById('emotion');
    const ctx = canvas.getContext('2d');
    
    // Clear the canvas
    

    // Draw the fill bar

    ctx.fillStyle = '#5DC080'; // green color
    ctx.globalAlpha = 1;
    roundRect(ctx, 0, 0, fillWidth2, canvas.height, 5);
    
    

    // Update the width of the fill bar
    fillWidth2 += 7;

    // If the fill bar has filled the whole canvas, stop the animation
    if (fillWidth2 > canvas.width) {
        return;
    }

    // Call the animateFillBar function again after the browser finishes the current frame
    if (fillWidth2< 250) { 
        requestAnimationFrame(drawfillgreen);

    }
}
function drawfillblue() {


    const canvas = document.getElementById('emotionb');
    const ctx = canvas.getContext('2d');
    
    // Clear the canvas
    

    // Draw the fill bar

    ctx.fillStyle = '#4ABFD3'; // green color
    ctx.globalAlpha = 1;
    roundRect(ctx, 0, 0, fillWidth3, canvas.height, 5);
    
    

    // Update the width of the fill bar
    fillWidth3 += 7;

    // If the fill bar has filled the whole canvas, stop the animation
    if (fillWidth3 > canvas.width) {
        return;
    }

    // Call the animateFillBar function again after the browser finishes the current frame
    if (fillWidth3< 400) { 
        requestAnimationFrame(drawfillblue);

    }
}
function drawfillred() {


    const canvas = document.getElementById('emotionr');
    const ctx = canvas.getContext('2d');
    
    // Clear the canvas
    

    // Draw the fill bar

    ctx.fillStyle = '#F94E56'; // green color
    ctx.globalAlpha = 1;;
    roundRect(ctx, 0, 0, fillWidth4, canvas.height, 5);
    
    

    // Update the width of the fill bar
    fillWidth4 += 7;

    // If the fill bar has filled the whole canvas, stop the animation
    if (fillWidth4 > canvas.width) {
        return;
    }

    // Call the animateFillBar function again after the browser finishes the current frame
    if (fillWidth4< 700) { 
        requestAnimationFrame(drawfillred);

    }
}
drawfillgreen();
drawfillblue();
drawfillred();
