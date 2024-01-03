//board
var blocksize = 25;
var rows = 20;
var cols = 10;
var board;
var context;
var L = [[2, 2], [2, 3], [2, 4], [3, 2]];
var T = [[2, 2], [2, 3], [2, 4], [3, 3]];
var Z = [[2, 2], [2, 3], [3, 3], [3, 4]];
var RZ = [[3, 2], [2, 3], [3, 3], [2, 4]];
var RL = [[2, 2], [2, 3], [2, 4], [3, 4]];
var long = [[2, 2], [2, 3], [2, 4], [2, 5]];
var square = [[2, 2], [2, 3], [3, 2], [3, 3]];
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
    drawShape(square);
}
function drawShape(s) {
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var item = s_1[_i];
        context.fillRect((blocksize * item[1]), (blocksize * item[0]), blocksize, blocksize);
    }
}
