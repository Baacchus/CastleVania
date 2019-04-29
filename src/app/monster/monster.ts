export class Monster {

    initialX: number;
    initialY: number;
    constructor(public assetUrl: string, public monsterX: number, public monsterY: number) {
        this.initialX = monsterX;
        this.initialY = monsterY;
    }
 
 }
 export class Wolf extends Monster {
     
    initY: number = 0;
    initX: number = 0;
 
    constructor(public charX: number, charY: number, public amplitude: number = 2, public direction = 1 /* MOVE_RIGHT */) {
      
        

        super('assets/wolf.png' , charX, charY)

    
    }
}