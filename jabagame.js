let keysDown;
let mousePos = {x:0, y:0};
let mouseDown = [0, 0, 0]
export class Init{
    constructor(canvas) {
        keysDown = {};

        window.addEventListener("keydown", function (e) {
            keysDown[e.keyCode] = true;
        }, false);

        addEventListener("keyup", function (e){
            delete keysDown[e.keyCode];
        }, false);
        canvas.addEventListener("mousemove", function (evt) {
            mousePos = getMousePos(canvas, evt);
        }, false);
        function getMousePos(canvas, evt) {
            let rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        }
        mouseDown = [0, 0, 0]
        document.body.onmousedown = function(evt) {
            mouseDown[evt.button] = 1;
        }
        document.body.onmouseup = function(evt) {
            mouseDown[evt.button] = 0;
        }
    }
    keysDown(){return keysDown}
    mousePos(){return mousePos}
    mouseButtonDown(){return mouseDown}
}


export class Rect{
    constructor(surface, x, y, width, height, color) {
        this.surface = surface;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        this.surface.fillStyle = this.color;
        this.surface.fillRect(this.x, this.y, this.width, this.height)
    }
    rect(){
        return [this.x, this.y, this.width, this.height]
    }
    collideRect(rect){
        return this.x + this.width > rect[0] && this.x < rect[0] + rect[2] && this.y + this.height > rect[1] && this.y < rect[1] + rect[3];
    }
    collidePoint(x, y){
        return this.x < x && this.y < y && this.x + this.width > x && this.y + this.width > y;
    }
}