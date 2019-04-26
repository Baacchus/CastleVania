export class Monster {
    constructor(public assetUrl: string, public charX: number, public charY: number) {
 
    }
 
 }
 export class Wolf extends Monster {
 
    constructor(public charX: number, charY: number, public amplitude: number = 2, public direction = 1 /* MOVE_RIGHT */) {
 
        super('assets/wolf.png' , charX, charY)
    }
 }