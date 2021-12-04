type projects = Array<{ name: string, age: number }>
type obj = {
    [key: string]: {
        name: string,
        age: number
    }
}

const projects: obj = {
    qwerty: {
        name: "auf",
        age: 42
    },
    twerk: {
        name: "auf2",
        age: 23
    }
}
const w: projects = [{
    name: "auf",
    age: 23
}]

function mergeObjects<T extends object, R>(a: T, b: R): T & R {
    return Object.assign({}, a, b)
}

interface Action<T, P> {
    type: T,
    payload: P
}

const getItems = (): Action<"getClose", "auf"> => {
    return {
        type: "getClose",
        payload: "auf"
    }
}

interface ILength {
    length: number
}

function withCount<T extends ILength>(value: T): {
    value: T,
    count: string
} {
    return {
        value,
        count: `Здесь ${value.length}`
    }
}

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}

/// не даст создаться коллекции из массивов итд итп
class Collection<T extends string | number | boolean> {
    private _items: T[] = []
}

console.log(withCount(["i", "yevgeniy"]))

// console.log(withCount(20)) будет ошибка

interface Car {
    name: string,
    model: number
}

// Partial указывает что тип всё ок не ругайся, этот обьект соотвествует интерфейсу, или возможна запись mers as CAR
const mers: Partial<Car> = {}

const cars: Readonly<Array<string>> = ["Ford", "Auid"]

// cars.shift() будет ошибка т.к readonly
const ford: Readonly<Car> = {
    model: 1999,
    name: "ford"
}
// ford.name="mers" будет ошибка radnoly