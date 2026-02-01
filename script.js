const svg = document.getElementById('svgCanvas');
const colorPicker = document.getElementById('colorPicker');
const undoBtn = document.getElementById('undoBtn');

let isDrawing = false;

// 1. Mouse Event Tracking
svg.addEventListener('mousedown', () => isDrawing = true);
svg.addEventListener('mouseup', () => isDrawing = false);

svg.addEventListener('mousemove', (event) => {
    if (!isDrawing) return;

    // Get mouse coordinates relative to SVG
    const rect = svg.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    drawShape(x, y);
});

// 2. Add Shape Drawing Functionality
function drawShape(x, y) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", "1"); // Small radius for a "line" effect
    circle.setAttribute("fill", colorPicker.value);
    
    svg.appendChild(circle);
}

// 3. Undo Feature
undoBtn.addEventListener('click', () => {
    if (svg.lastChild) {
        svg.removeChild(svg.lastChild);
    }
});