class Engine {
    constructor(engineType:any) { }
}

class Tiers {
    constructor(tiersNumber:any) { }
}

// class Car {
//     engine: any;
//     tiers: any;
//     constructor() {
//         this.engine = new Engine(); //break
//         this.tiers = new Tiers();
//     }
// }

class Car {
    engine: any;
    tiers: any;
    constructor(engine:any,tiers:any) {
        this.engine = engine //break
        this.tiers = tiers
    }
}
