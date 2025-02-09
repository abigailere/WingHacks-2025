import { Graphics } from "pixi.js";

export function createRectangle(){ //should be for start screen
    //graphics - rectangle
const rectangle = new Graphics()
    .rect(200,200,100,150)
    .fill({
        color: 0xffea10,
        alpha: 0.9
    })

    .stroke({
        width: 8, 
        color: 0x00ff00,

    });
    return rectangle
}