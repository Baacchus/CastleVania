export class Monster {
    constructor(public assetUrl: string, public charX: number, public charY: number) {
 
    }
 
 }
 export class Wolf extends Monster {
     
    initY: number = 0;
    initX: number = 0;
 
    constructor(public charX: number, charY: number, public amplitude: number = 2, public direction = 1 /* MOVE_RIGHT */) {
      
        

        super('assets/wolf.png' , charX, charY)

    
    }
 }