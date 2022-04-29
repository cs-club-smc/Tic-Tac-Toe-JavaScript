//Tic Tac Toe Club Project

let tictactoeboard = 
[
    ['','',''],
    ['','',''],
    ['','','']
];
let MAX_HEIGHT = 400;
let MAX_WIDTH = 400;


function createGrid()
{
    let height_third = Math.floor(MAX_HEIGHT/3);
    let width_third = Math.floor(MAX_WIDTH/3);
    // height lines
    line(0, height_third, MAX_WIDTH, height_third);
    line(0, 2*height_third, MAX_WIDTH, 2*height_third);
    // width lines
    line(width_third, 0, width_third, MAX_HEIGHT);
    line(2*width_third, 0, 2*width_third, MAX_HEIGHT);
    
}

function setup()
{
    createCanvas(MAX_HEIGHT, MAX_WIDTH);
}

function draw()
{
    background(200);
    createGrid();
    
}