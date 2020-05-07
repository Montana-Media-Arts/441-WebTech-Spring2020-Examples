let shapes = [];
let shape_places = [];

let canvas_size = [800,800];
let directions = [];

function preload() {
    shapes[0] = loadImage('blobs.png');
    shapes[1] = loadImage('squares.png');
    shapes[2] = loadImage('circles.png');
    shapes[3] = loadImage('polygon.png');
    shapes[4] = loadImage('bolts.png');
}

function setup() {
    createCanvas(canvas_size[0], canvas_size[1]);
    for(var i = 0; i < shapes.length; i++){
        // Generate random X and Y locations
        var rand_x = random(0,400); // TODO: Generate random number
        var rand_y = random(0,400); // TODO: Generate random number
        
        // Save locations and display shapes
        shape_places[i] = [rand_x,rand_y];
        image(shapes[i],rand_x,rand_y);
        
        // Set each shape group's direction
        directions[i] = [1,1];

        // Give even numbers a negative direction
        if(i%2 == 0){ directions[i] = [-1,-1] }
    }
    
}

function draw(){
    clear();
    
    // Loop over each object
    for(var i = 0; i < shapes.length; i++){
        
        // Calculate next X & Y positions
        var next_x = shape_places[i][0] + directions[i][0];
        var next_y = shape_places[i][1] + directions[i][1]; 
        
        // Reverse direction if next position is out of bounds
        if(next_x >= canvas_size[0] || next_x <= 0){ directions[i][0] *= -1; } 
        if(next_y >= canvas_size[1] || next_y <= 0){ directions[i][1] *= -1; } 
        
        // Update positions
        shape_places[i][0] += directions[i][0];
        shape_places[i][1] += directions[i][1];

        // Draw at new positions
        image(shapes[i],shape_places[i][0],shape_places[i][1]);
    }
}