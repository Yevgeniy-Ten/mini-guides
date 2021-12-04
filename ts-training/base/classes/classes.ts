class Typescript {
    version: string

    constructor(v: string) {
        this.version = v
    }

    info(name: string): string {
        return `${name}: typescript vesrion:${this.version}`
    }
}

// class Car{
//     readonly model:string
//     readonly numberOfWheels:number =4
//     constructor(model:string) {
//         this.model = model
//     }
// }
class Car {
    readonly numberOfWheels: number = 4

    constructor(readonly model: string) {
        this.model = model
    }
}

//========

class Animal {
    // свойства которые доступны при работе с классом, но вне класса нету доступа
    protected voice: string = ""
    public color: string = "black"

    // private доступпны только в том классе в котором определнные в  Cat не будет дотупна
    private go() {
        console.log("GO")
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice("typescript")
cat.color = "red"


//====
// abstract используются как шаблоны, но сами не могут быть экземплярами
abstract class Component {
    abstract render(): void

    abstract info(): void
}
class AppComponent extends Component {
    render() {
        console.log("component on render")
    }

    info() {
        return "info"
    }
}