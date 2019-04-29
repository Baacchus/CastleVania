export class Monster {

    initialX: number;
    initialY: number;
    constructor(public assetUrl: string, public monsterX: number, public monsterY: number) {
        this.initialX = monsterX;
        this.initialY = monsterY;
    }

}
export class Wolf extends Monster {

    constructor(public monsterX: number, monsterY: number, public amplitude: number = 2, public direction = 1 /* MOVE_RIGHT */) {

        super('assets/wolf.png', monsterX, monsterY)
    }
}