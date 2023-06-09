import * as jabaGame from "./jabagame.js";
import * as playerScript from "./playerScript.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//setup

let rect1 = new jabaGame.Rect(ctx, 100, 100, 50, 50, "green");
let player = new playerScript.Player(10, 10)
let jaba = new jabaGame.Init(canvas);

//game loop
function gameLoop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.main(ctx, jaba.keysDown())
    if (rect1.collidePoint(jaba.mousePos().x, jaba.mousePos().y)){
        console.log(true)
    }
    rect1.draw()
}
setInterval(gameLoop, 16.7)

