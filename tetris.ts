
//board
let blocksize = 25;
let rows = 20;
let cols = 10;
let board;
let context;

type Block = number[];

type Shape = Block[];

let L: Shape = [[2, 2], [ 2, 3 ], [ 2, 4 ], [ 3, 2 ]];
let T: Shape = [[2, 2], [ 2, 3 ], [ 2, 4 ], [ 3, 3 ]];
let Z: Shape = [[2, 2], [ 2, 3 ], [ 3, 3 ], [ 3, 4 ]];
let RZ: Shape = [[3, 2], [ 2, 3 ], [ 3, 3 ], [ 2, 4 ]];
let RL: Shape = [[2, 2], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ]];
let long: Shape = [[2, 2], [ 2, 3 ], [ 2, 4 ], [ 2, 5 ]];
let square: Shape = [[2, 2], [ 2, 3 ], [ 3, 2 ], [ 3, 3 ]];

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
    drawShape(square);

}

function drawShape(s: Shape) {
    for (var item of s) {
        context.fillRect((blocksize * item[1]),(blocksize * item[0]), blocksize, blocksize);
    }
}