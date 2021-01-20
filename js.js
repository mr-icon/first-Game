function startGame() {
    myGamePiece = new component (30, 30,"red", 10, 120);
    myGamePiece.gravity = 0.05;
    myScore = new component("30px","consolas", "black", 280, 40, "text");
    myGameArea.start();
}

var myGameArea = {
    canvas : 
    document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = 
        this.canvas.getContext("2d");

        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

var myGamePiece;

function startGame() {
    myGameArea.start();
    myGamePiece = new component (30, 30,"red", 10, 120);
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}