var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Typescript = /** @class */ (function () {
    function Typescript(v) {
        this.version = v;
    }
    Typescript.prototype.info = function (name) {
        return name + ": typescript vesrion:" + this.version;
    };
    return Typescript;
}());
// class Car{
//     readonly model:string
//     readonly numberOfWheels:number =4
//     constructor(model:string) {
//         this.model = model
//     }
// }
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.numberOfWheels = 4;
        this.model = model;
    }
    return Car;
}());
//========
var Animal = /** @class */ (function () {
    function Animal() {
        // свойства которые доступны при работе с классом, но вне класса нету доступа
        this.voice = "";
        this.color = "black";
    }
    // private доступпны только в том классе в котором определнные в  Cat не будет дотупна
    Animal.prototype.go = function () {
        console.log("GO");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.setVoice("typescript");
cat.color = "red";
//====
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log("component on render");
    };
    AppComponent.prototype.info = function () {
        return "info";
    };
    return AppComponent;
}(Component));
