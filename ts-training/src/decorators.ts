// function Log(constructor: Function) {
//     console.log(constructor)
// }
//
// function Log2(target: any, propName: string | Symbol) {
//
// }
//
// function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
//
// }
//
// @Log
// class Component {
//     @Log2
//     name: string
//     @Log3
//     get componentName(){
//         return this.name
//     }
//     constructor(name: string) {
//         this.name = name
//     }
//
//     @Log3
//     logName(): void {
//         console.log(this.name)
//     }
// }
interface IComponentDecorator {
    selector: string,
    template: string
}

function Component(config: IComponentDecorator) {
    return <T extends { new(...args: any[]): object }>(Consturctor: T) => {
        return class extends Consturctor {
            constructor(...args: any[]) {
                super(...args);
            }
        }
    }
}


const binder = (_: any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor => {
    const oroginal = descriptor.value
    return {
        configurable: true,
        enumerable: false,
        get() {
            return oroginal.bind(this)
        }
    }
}

@Component({
    selector: "Yevgeniy",
    template: "<div> Card Content </div>"
})
class CarComponent {
    constructor(public name: string) {
    }

    @binder
    logName(): void {
        console.log(this.name)
    }
}

const card = new CarComponent("Card")

interface IValidatorConfig {
    prop: string
}

const validators = {}

function Required(target: any, propName: string) {

}


class Form {
    @Required
    public email: string | void

    constructor(email?: string) {
        this.email = email
    }
}