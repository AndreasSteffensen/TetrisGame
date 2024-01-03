//board
var blocksize = 25;
var rows = 20;
var cols = 10;
var board;
var context;
var blockL = [{ x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 2 }];
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
    drawShape(blockL);
}
function drawShape(s) {
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var item = s_1[_i];
        context.fillRect((blocksize * item.y), (blocksize * item.x), blocksize, blocksize);
    }
}
