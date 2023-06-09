import * as jabaGame from "./jabagame.js";
import * as playerScript from "./playerScript.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//setup
let rect = new jabaGame.Rect(ctx, 100, 100, 50, 50, "green");
let player = new playerScript.Player(10, 10)
let jaba = new jabaGame.Init(canvas);

//game loop
let clicked = false;
function gameLoop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.main(ctx, jaba.keysDown())
    if (rect.collidePoint(jaba.mousePos().x, jaba.mousePos().y)){
        rect.color = "darkgreen"
        if (jaba.mouseButtonDown()[0] === 1){
            clicked = true;
            rect.color = "red"
        }
        if (jaba.mouseButtonDown()[0] === 0 && clicked === true){
            clicked = false;
            console.log("click")
        }
    }else {
        rect.color = "green"
        clicked = false;
    }
    rect.draw()
}
setInterval(gameLoop, 16.7)

