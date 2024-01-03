
//board
let blocksize = 25;
let rows = 20;
let cols = 10;
let board;
let context;

let LblockX = blocksize * 2;
let LblockY = blocksize * 2;


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
    context.fillRect(LblockX, LblockY, blocksize, blocksize);
}
