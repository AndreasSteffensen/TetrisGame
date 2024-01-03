//board
var blocksize = 25;
var rows = 20;
var cols = 10;
var board;
var context;
var LblockX = blocksize * 2;
var LblockY = blocksize * 2;
window.onload = function () {
    board = document.getElementById("board");
    board.height = rows * blocksize;
    board.width = cols * blocksize;
    context = board.getContext("2d");
    update();
};
function update() {
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);
    context.fillStyle = "green";
    context.fillRect(LblockX, LblockY, blocksize, blocksize);
}
