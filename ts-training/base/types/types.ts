const str: string = "Hello"
// console.log(str)
//tsc types.ts --компилить в js
const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = "heello typescript"

const numberArr: number[] = [1, 1, 2, 3, 5, 7, 8]
const wordsArr: string[] = ["heloo", "string"]
//generic запись
const numArr2: Array<number> = [1, 1, 2, 3, 5, 7, 8]


//Tuple -- когда несколько типов
const contactsArr: [string, number] = ["vladilen", 123125151]

//Any чтобы любой тип подерживался
let variable: any = 42
variable = 'New string'
variable = ["wqert"]

// === void ===undefined ничего не возращается
function sayMyName(name: string): void {
    console.log(name)
}

sayMyName("Хайзеньерг")

// Never ==== функция которая выкидывает ошибку, или никогда не завершится
function throwError(message: string): never {
    throw new Error(message)
}

// function infinity(): never {
//     while (true) {
//
//     }
// }

// Type создаём типы
type Login = string
const login: Login = "admin"
// const login2: Login = 2
type ID = string | number
const id: ID = 123123
const id2: ID = "wqewqrq"

type SomeType = string | null | undefined
