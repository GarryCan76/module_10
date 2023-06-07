
let keysDown = {};

window.addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e){
    delete keysDown[e.keyCode];
}, false);
let x = 0;
let y = 0;
function walk(){

    // console.log(keysDown)

    ctx.fillStyle = "red";
    if (checkCollision(x, y, 69, 69, 200, 200, 69, 69)){
        ctx.fillStyle = "blue";
    }
    ctx.fillRect(200, 200, 69, 69);
    ctx.fillStyle = "green";
    ctx.fillRect(x, y, 69, 69);
}
function checkCollision(x1, y1, w1, h1 , x2, y2, w2, h2){
    return x1 + w1 > x2 && x1 < x2 + w2 && y1 + h1 > y2 && y1 < y2 + h2;
}

class Rect{
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
}
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let rect1 = new Rect(ctx, 300, 300, 50, 50, "green")
let player = new Rect(ctx, 300, 300, 50, 50, "green")
function gameloop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let speed = 1;
    if (keysDown["87"]){
        y = y - speed;
    }if (keysDown["65"]){
        x = x - speed;
    }if (keysDown["83"]){
        y = y + speed;
    }if (keysDown["68"]){
        x = x + speed;
    }

    rect1.draw()
    player.x = x;
    player.y = y;
    player.draw()
    console.log(rect1.collideRect(player.rect()))

}
setInterval(gameloop, 16.7)
