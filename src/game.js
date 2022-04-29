//Tic Tac Toe Club Project

const MAX_HEIGHT = 400;
const MAX_WIDTH = 400;

class Box {
    constructor(vector) {
        this.center = vector;
        this.state = "";
    }
}

function createGrid()
{
    const height_third = MAX_HEIGHT/3;
    const width_third = MAX_WIDTH/3;
    // height lines
    line(0, height_third, MAX_WIDTH, height_third);
    line(0, 2*height_third, MAX_WIDTH, 2*height_third);
    // width lines
    line(width_third, 0, width_third, MAX_HEIGHT);
    line(2*width_third, 0, 2*width_third, MAX_HEIGHT);

    const boxes = [
        [new Box(createVector(width_third/2, height_third/2)), new Box(createVector(MAX_WIDTH/2, height_third/2)), new Box(createVector(5*MAX_WIDTH/6, height_third/2))],
        [new Box(createVector(width_third/2, MAX_HEIGHT/2)), new Box(createVector(MAX_WIDTH/2, MAX_HEIGHT/2)), new Box(createVector(5*MAX_WIDTH/6, MAX_HEIGHT/2))],
        [new Box(createVector(width_third/2, 5*MAX_HEIGHT/6)), new Box(createVector(MAX_WIDTH/2, 5*MAX_HEIGHT/6)), new Box(createVector(5*MAX_WIDTH/6, 5*MAX_HEIGHT/6))]
    ]
    push();
    strokeWeight(10);
    for (let i = 0; i < 3; i++)
    {
        for (let j = 0; j < 3; j++)
        {
            point(boxes[i][j].center);
        }
    }
    pop();
    return boxes;
    
}

function setup()
{
    createCanvas(MAX_HEIGHT, MAX_WIDTH);
}

function draw()
{
    background(200);
    const ticTacToeBoard = createGrid(); // a 2d array of the Box class
}