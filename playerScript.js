import * as jabaGame from "./jabagame.js";
export class Player {
    constructor(surface, x, y) {
        this.x = x;
        this.y = y;
        this.playerRect = new jabaGame.Rect(surface, this.x, this.y, 50, 50, "green")
    }
    main(surface, keysDown){
        this.move(keysDown)
        this.playerRect = new jabaGame.Rect(surface, this.x, this.y, 50, 50, "green")
        this.playerRect.draw()
    }
    move(keysDown){
        let speed
        if (keysDown["16"]){
            speed = 3;
        }else {
            speed = 1
        }
        if (keysDown["87"]){
            this.y = this.y - speed;
        }if (keysDown["65"]){
            this.x = this.x - speed;
        }if (keysDown["83"]){
            this.y = this.y + speed;
        }if (keysDown["68"]){
            this.x = this.x + speed;
        }
    }
}