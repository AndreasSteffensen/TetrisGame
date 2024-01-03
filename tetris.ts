
//board
let blocksize = 25;
let rows = 20;
let cols = 10;
let board;
let context;

interface Block {
    x: number;
    y: number;
}

type Shape = Block[];

let blockL: Shape = [{ x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 2 }];

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blocksize;
    board.width = cols * blocksize;
    context = board.getContext("2d");

    update();
}

function update() {
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "green";
    drawShape(blockL);
}

function drawShape(s: Shape) {
    for (var item of s) {
        context.fillRect((blocksize * item.y),(blocksize * item.x), blocksize, blocksize);
    }
}