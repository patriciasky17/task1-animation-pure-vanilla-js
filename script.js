
function connectDivs(div1, div2, color, thickness) {
    var x1 = div1.offsetLeft + div1.offsetWidth / 2;
    var y1 = div1.offsetTop + div1.offsetHeight / 2;
    var x2 = div2.offsetLeft + div2.offsetWidth / 2;
    var y2 = div2.offsetTop; // Use the top of node2 instead of the center

    // Calculate control points for the curve.
    // First control point is in the middle horizontally between div1 and div2, but vertically aligned with div1's center.
    // Second control point is horizontally aligned with div2's center but positioned at the top of div2.
    var cx1 = (x1 + x2) / 2;
    var cy1 = y1;
    var cx2 = x2;
    var cy2 = y2 - 200; // Adjust this value to control the height of the curve

    // Create the path for a quadratic Bezier curve
    var pathData = [
        'M', x1, y1,
        'C', cx1, cy1, cx2, cy2, x2, y2
    ].join(' ');

    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathData);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', color);
    path.setAttribute('stroke-width', thickness);
    path.classList.add('path');

    // Create the <defs> element if it doesn't exist
    var defs = svg.querySelector('defs') || document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    if (!svg.querySelector('defs')) {
        svg.prepend(defs); // Add <defs> as the first child of the SVG
    }

    // Create a linearGradient element
    var gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.setAttribute('id', 'grad1');
    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '100%');
    gradient.setAttribute('x2', '100%');
    gradient.setAttribute('y2', '0%');

    // Define the start of the gradient
    var stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', 'white'); // Start color

    // Define the end of the gradient
    var stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '60%');
    stop2.setAttribute('stop-color', 'rgba(255,255,255,0.5)'); // End color

    var stop3 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', 'rgba(255,255,255,0.1)'); // End color

     // Create filter for the drop shadow (or glow)
    var filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
    filter.setAttribute('id', 'glow');
    filter.setAttribute('x', '-50%');
    filter.setAttribute('y', '-50%');
    filter.setAttribute('width', '200%');
    filter.setAttribute('height', '200%');

    var feGaussianBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
    feGaussianBlur.setAttribute('stdDeviation', '10');
    feGaussianBlur.setAttribute('result', 'coloredBlur');

    var feMerge = document.createElementNS('http://www.w3.org/2000/svg', 'feMerge');
    var feMergeNode_1 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
    feMergeNode_1.setAttribute('in', 'coloredBlur');
    var feMergeNode_2 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
    feMergeNode_2.setAttribute('in', 'SourceGraphic');

    feMerge.appendChild(feMergeNode_1);
    feMerge.appendChild(feMergeNode_2);

    filter.appendChild(feGaussianBlur);
    filter.appendChild(feMerge);

    defs.appendChild(filter);

    // Append the stop elements to the linearGradient element
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    gradient.appendChild(stop3);

    // Append the linearGradient element to the defs element
    defs.appendChild(gradient);

    // Create the path element for path2
    var path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('d', pathData);
    path2.setAttribute('fill', 'none');
    path2.setAttribute('stroke', 'url(#grad1)'); // Use the gradient for the stroke
    path2.setAttribute('stroke-width', thickness);
    path2.setAttribute('filter', 'url(#glow)');
    path2.classList.add('path2');

    var pathway = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathway.setAttribute('d', pathData);
    pathway.setAttribute('fill', 'none');
    pathway.setAttribute('stroke', '#69533F');
    pathway.setAttribute('stroke-width', 1);

    document.getElementById("svg").appendChild(pathway);
    document.getElementById("svg").appendChild(path2);
    
}


// Connect the divs
connectDivs(document.getElementById('main-node'), document.getElementById('node1'), 'white', 2);
connectDivs(document.getElementById('main-node'), document.getElementById('node2'), 'white', 2);
connectDivs(document.getElementById('main-node'), document.getElementById('node3'), 'white', 2);
connectDivs(document.getElementById('main-node'), document.getElementById('node4'), 'white', 2);
connectDivs(document.getElementById('main-node'), document.getElementById('node5'), 'white', 2);
connectDivs(document.getElementById('main-node'), document.getElementById('node6'), 'white', 2);
connectDivs(document.getElementById('main-node'), document.getElementById('node7'), 'white', 2);
connectDivs(document.getElementById('main-node'), document.getElementById('node8'), 'white', 2);
connectDivs(document.getElementById('main-node'), document.getElementById('node9'), 'white', 2);
connectDivs(document.getElementById('main-node'), document.getElementById('node10'), 'white', 2);
connectDivs(document.getElementById('main-node'), document.getElementById('node11'), 'white', 2);
connectDivs(document.getElementById('main-node'), document.getElementById('node12'), 'white', 2);
connectDivs(document.getElementById('main-node'), document.getElementById('node13'), 'white', 2);






