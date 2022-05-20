//Tic Tac Toe Club Project
const MAX_HEIGHT = 400;
const MAX_WIDTH = 400;

/**
 * @param {p5.Vector} vector - a vector representing a center point
 * This class represents each box of the tictactoe board.
 * - center is the center coordinate 
 * - state should either  be an X or an O or blank if not in play yet
 */
class Box {
    constructor(vector) {
        this.center = vector;
        this.state = "";
    }
}

/**
 * Creates the tictactoe grid.
 * @returns {Array[Array[Box]]} Grid
 */
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

    // Create our box objects, starting stateless
    const boxes = [
        [new Box(createVector(width_third/2, height_third/2)), new Box(createVector(MAX_WIDTH/2, height_third/2)), new Box(createVector(5*MAX_WIDTH/6, height_third/2))],
        [new Box(createVector(width_third/2, MAX_HEIGHT/2)), new Box(createVector(MAX_WIDTH/2, MAX_HEIGHT/2)), new Box(createVector(5*MAX_WIDTH/6, MAX_HEIGHT/2))],
        [new Box(createVector(width_third/2, 5*MAX_HEIGHT/6)), new Box(createVector(MAX_WIDTH/2, 5*MAX_HEIGHT/6)), new Box(createVector(5*MAX_WIDTH/6, 5*MAX_HEIGHT/6))]
    ]

    // to be deleted later: but for now, set a point 10 pixels wide in diameter
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

/**
 * Function that runs on the start up of our session
 */
function setup()
{
    createCanvas(MAX_HEIGHT, MAX_WIDTH);
}

/**
 * Function that runs continously to draw on our canvas.
 */
function draw()
{
    background(200);
    const ticTacToeBoard = createGrid(); // a 2d array of the Box class
}

/* TODO:
Frontend:
- have squares be buttons
- show Xs or Os on squares (this is already set up to be reflected as a state in a class)

Backend:
- logic of the game
- the computer player
*/