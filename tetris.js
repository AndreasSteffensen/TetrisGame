//board
var blocksize = 25;
var rows = 20;
var cols = 10;
var board;
var context;
var velocity = 1;
var currentShape;
var lockedBottomShape;
//enum??
var numberOfShapes = 7;
var Shape = /** @class */ (function () {
    function Shape(shape, color, id) {
        this.shape = shape;
        this.color = color;
        this.id = id;
    }
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.getShape = function () {
        return this.shape;
    };
    return Shape;
}());
var L = new Shape([[2, 2], [2, 3], [2, 4], [3, 2]], "orange", 0);
var T = new Shape([[2, 2], [2, 3], [2, 4], [3, 3]], "purple", 1);
var Z = new Shape([[2, 2], [2, 3], [3, 3], [3, 4]], "green", 2);
var S = new Shape([[3, 2], [2, 3], [3, 3], [2, 4]], "red", 3);
var J = new Shape([[2, 2], [2, 3], [2, 4], [3, 4]], "pink", 4);
var long = new Shape([[2, 2], [2, 3], [2, 4], [2, 5]], "blue", 5);
var square = new Shape([[2, 2], [2, 3], [3, 2], [3, 3]], "yellow", 6);
window.onload = function () {
    board = document.getElementById("board");
    board.height = rows * blocksize;
    board.width = cols * blocksize;
    context = board.getContext("2d");
    lockedBottomShape = Array(rows).fill(Array(cols));
    console.log(lockedBottomShape);
    currentShape = null;
    setInterval(update, 150); // 100 miliseconds
};
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
        currentShape = null;
    }
}
function getShape() {
    var randId = Math.floor(Math.random() * numberOfShapes);
    var retval;
    switch (randId) {
        case (0): {
            retval = L;
            break;
        }
        case (1): {
            retval = T;
            break;
        }
        case (2): {
            retval = Z;
            break;
        }
        case (3): {
            retval = S;
            break;
        }
        case (4): {
            retval = J;
            break;
        }
        case (5): {
            retval = long;
            break;
        }
        case (6): {
            retval = square;
            break;
        }
    }
    return retval;
}
function addShapeToBottomShape(s) {
    return lockedBottomShape.concat(s.getShape());
}
function borderControl(s) {
    for (var _i = 0, _a = s.getShape(); _i < _a.length; _i++) {
        var i = _a[_i];
        if (i[1] < 0 || i[1] >= cols - 2 || i[0] < 0 || i[0] >= rows - 2) {
            return false;
        }
        else
            return true;
    }
}
function drawBoard(b) {
    context.fillStyle = "black";
    for (var _i = 0, b_1 = b; _i < b_1.length; _i++) {
        var block = b_1[_i];
        for (var _a = 0, block_1 = block; _a < block_1.length; _a++) {
            var item = block_1[_a];
            context.fillRect((item[1]), (item[0]), board.width, board.height);
        }
    }
}
function drawShape(s) {
    for (var _i = 0, _a = s.getShape(); _i < _a.length; _i++) {
        var item = _a[_i];
        context.fillStyle = s.getColor();
        context.fillRect((blocksize * item[1]), (blocksize * item[0]), blocksize, blocksize);
    }
}
function tickDownShape(s) {
    for (var _i = 0, _a = s.getShape(); _i < _a.length; _i++) {
        var item = _a[_i];
        item[0] += velocity;
    }
}
