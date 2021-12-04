function sum(a: number, b: number): number {
    return a + b
}

function toUppercase(str: string): string {
    return str.toUpperCase()
}


// функция которая работает с различными параметрами
interface MyPosition {
    x: number | undefined,
    y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
    default: string
}

// типа возращает обьект
function position(): MyPosition


function position(a: number, b: number): MyPosition
function position(a?: number, b?: number) {
    if (!a && !b) {
        return {x: undefined, y: undefined}
    }
    if (a && !b) {
        return {x: a, y: undefined, default: a.toString()}
    }
    return {x: a, y: b}
}

console.log(position(), "EMPTY")
console.log(position(2213, 5315), "TWOARGUMENTS")