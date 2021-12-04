// предназначено для обьектов или классов
interface Rect {
    // readonly нельзя изменять
    readonly id: string,
    // ? даёт понять ну если есть есть короче без разницы будет оно или нет
    color?: string,
    size: {
        width: number,
        height: number
    }
    // новые ключи нельзя добавить
}

const rect1: Rect = {
    id: "message",
    size: {
        width: 315,
        height: 30
    },
    color: "#cc"
}
const rect2: Rect = {
    id: "rect2",
    size: {
        width: 315,
        height: 30
    },
}
rect2.color = "black"
// не можем менять id
// rect1.id = "kek"

// ниже запись говорит о том что эти обьекты типа rect
const rect3 = {} as Rect
const rect4 = <Rect>{}


// ====
// наследуется от Rect, имеет функцию тип функции указывается как ()=> <что она должна вернуть>
interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: "213",
    size: {
        width: 20,
        height: 40,
    },
    // так же указываем что возращает тип number можно и не писать принципе сверху указали
    getArea(): number {
        return this.size.width * this.size.height
    }
}

//======
// конвенция называеться через I=interface
interface IClock {
    time: Date,

    // типа функция должна быть и принимать значение типа date
    setTime(date: Date): void
}

// class типа iclock
class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

//=====
interface Styles {
    // типо мол все ключи данного класса типа String
    [key: string]: string
}

const css: Styles = {
    border: "1px solid black",
    marginTop: "2px",
    borderRadius: "5px"
}