export class Monster {
    initialX: number;
    initialY: number;
    direction: number
    constructor(public className: string, public monsterX: number, public monsterY: number, public amplitude: number, direction: number) {
        this.initialX = monsterX;
        this.initialY = monsterY;
        this.direction = direction;
    }
}

export class Wolf extends Monster {
    constructor(public monsterX: number, public monsterY: number, public amplitude: number, direction: number) {
        super('wolf', monsterX, monsterY, amplitude, direction)
    }
}

export class Ghost extends Monster {
    constructor(public monsterX: number, public monsterY: number, public amplitude: number, direction: number) {
        super('ghost', monsterX, monsterY, amplitude, direction)
    }

}

export class Beast extends Monster {
    constructor(public monsterX: number, public monsterY: number, public amplitude: number, direction: number) {
        super('beast', monsterX, monsterY, amplitude, direction)
    }
}

