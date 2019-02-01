// RANDOM ART LEVELS START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let paintTool = {
    x: cnv.width / 2,
    y: cnv.height / 2,
    w: 25,
    h: 25
};

let level = 1;

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    if (level == 1) {
        // Level 1 Logic
        paintTool.x += Math.random() * 20 - 10;
        paintTool.y += Math.random() * 20 - 10;

        // Draw Level 1
        ctx.strokeStyle = "rgba(100, 0, 100, 0.3)";
        ctx.beginPath();
        ctx.arc(paintTool.x, paintTool.y, paintTool.w / 2, 0, 2 * Math.PI);
        ctx.stroke();
    } else if (level == 2) {
        // Level 2 Logic
        paintTool.x += Math.random() * 40 - 20;

        // Draw Level 2
        ctx.fillStyle = "rgba(200, 180, 0, 0.2)";
        ctx.fillRect(paintTool.x, paintTool.y, paintTool.w, paintTool.h);
    } else if (level == 3) {
        // Level 3 Logic
        paintTool.x = Math.random() * cnv.width;
        paintTool.y = Math.random() * cnv.height;

        // Draw Level 3
        ctx.fillStyle = "rgba(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ", 0.4)";
        ctx.beginPath();
        ctx.arc(paintTool.x, paintTool.y, paintTool.w / 2, 0, 2 * Math.PI);
        ctx.fill();
    }
    
    // Request another Animation Frame
    requestAnimationFrame(draw);
}

// Mouse & Keyboard Events
document.addEventListener("keydown", keydownHandler);
document.addEventListener("mousedown", mousedownHandler);

function keydownHandler(event) {
    if (event.code == "ArrowRight") {
        // Go to next level, loop if needed
        level++;
        if (level > 3) {
            level = 1;
        }

        // Draw Background for New Level
        if (level == 1) {
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, cnv.width, cnv.height);
        } else if (level == 2) {
            ctx.fillStyle = "rgb(85, 85, 85)";
            ctx.fillRect(0, 0, cnv.width, cnv.height);
        } else if (level == 3) {
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, cnv.width, cnv.height);            
        }
    } else if (event.code == "ArrowLeft") {
        // Go to previous level, loop if needed
        level--;
        if (level < 1) {
            level = 3;
        }

        // Draw Background for New Level
        if (level == 1) {
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, cnv.width, cnv.height);
        } else if (level == 2) {
            ctx.fillStyle = "rgb(85, 85, 85)";
            ctx.fillRect(0, 0, cnv.width, cnv.height);
        } else if (level == 3) {
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, cnv.width, cnv.height);            
        }
    }
}

function mousedownHandler(event) {
    // Get rectangle info about canvas location
    let cnvRect = cnv.getBoundingClientRect();

    // Calc mouse coordinates using mouse event and canvas location info
    let mouseX = Math.round(event.clientX - cnvRect.left);
    let mouseY = Math.round(event.clientY - cnvRect.top);

    // Set paint tool to position of mouse
    paintTool.x = mouseX;
    paintTool.y = mouseY;
}