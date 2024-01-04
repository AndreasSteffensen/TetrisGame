//board
let blocksize = 25;
let rows = 20;
let cols = 10;
let board;
let context;
let velocity = 1;
let currentShape;
let lockedBottomShape;


//enum??
let numberOfShapes = 7;

type Block = number[];

class Shape {
    shape: Block[];
    color: string;
    id: number;
    constructor(shape: Block[], color:string, id:number) {
        this.shape = shape;
        this.color = color;
        this.id = id;
    }
    getColor() {
        return this.color;
    }
    getShape() {
        return this.shape;
    }
}

let L: Shape = new Shape ([[2, 2], [ 2, 3 ], [ 2, 4 ], [ 3, 2 ]], "orange", 0);
let T: Shape = new Shape ([[2, 2], [ 2, 3 ], [ 2, 4 ], [ 3, 3 ]], "purple", 1);
let Z: Shape = new Shape ([[2, 2], [ 2, 3 ], [ 3, 3 ], [ 3, 4 ]], "green", 2);
let S: Shape = new Shape ([[3, 2], [ 2, 3 ], [ 3, 3 ], [ 2, 4 ]], "red", 3);
let J: Shape = new Shape ([[2, 2], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ]], "pink", 4);
let long: Shape = new Shape ([[2, 2], [ 2, 3 ], [ 2, 4 ], [ 2, 5 ]], "blue", 5);
let square: Shape = new Shape ([[2, 2], [ 2, 3 ], [ 3, 2 ], [ 3, 3 ]], "yellow", 6);

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blocksize;
    board.width = cols * blocksize;
    context = board.getContext("2d");

    lockedBottomShape = Array(rows).fill(Array(cols));
    console.log(lockedBottomShape);
    currentShape = null;

    setInterval(update, 150); // 100 miliseconds
}

function update() {
    drawBoard(lockedBottomShape);
    if (currentShape === null) {
        currentShape = getShape();
    }

    if (borderControl(currentShape)) {
        drawShape(currentShape);
        tickDownShape(currentShape);
    }
    else {
        drawShape(currentShape);
        addShapeToBottomShape(currentShape);
        currentShape = null
    }
}

function getShape(): Shape {
    let randId: number = Math.floor(Math.random() * numberOfShapes);
    let retval: Shape;
    switch (randId) {
        case (0): { retval = L; break;}
        case (1): { retval = T; break;}
        case (2): { retval = Z; break;}
        case (3): { retval = S; break;}
        case (4): { retval = J; break;}
        case (5): { retval = long; break;}
        case (6): { retval = square; break;}
    }
    return retval;
}

function addShapeToBottomShape(s: Shape): [] {
    return lockedBottomShape.concat(s.getShape());
}

function borderControl(s: Shape): boolean {
    for (var i of s.getShape()) {
        if (i[1] < 0 || i[1] >= cols-2 || i[0] < 0 || i[0] >= rows-2) {
            return false;
        }
        else
            return true;
    }
}

function drawBoard(b:[]) {
    context.fillStyle = "black";

    for (var block of b) {

        for (var item of block) {
            context.fillRect((item[1]), (item[0]), board.width, board.height);
        }
    }
}

function drawShape(s: Shape) {
    for (var item of s.getShape()) {
        context.fillStyle = s.getColor();
        context.fillRect((blocksize * item[1]),(blocksize * item[0]), blocksize, blocksize);
    }
}

function tickDownShape(s: Shape) {
    for (var item of s.getShape()) {
        item[0] += velocity;
    }
}