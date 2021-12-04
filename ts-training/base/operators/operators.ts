interface Person {
    name: string,
    age: number
}

type PersonKeys = keyof Person //у переменных типа Personkeys значение может быть или name или age

let key: PersonKeys = "name"
key = "age"
// key = "wqewqe" // будет ошибка
type User = {
    _id: number
    name: string,
    email: string,
    date: Date,
}

type UserKeysNoMeta = Exclude<keyof User, "_id" | "date"> // исключить поля id date
type UserKeysNoMeta2 = Pick<User, "name" | "email"> // забрать поля name email, по сути тоже самое что Exclude
let user1: UserKeysNoMeta = "name"
const user2: UserKeysNoMeta2 = {
    name: "kek",
    email: "auf"
}
// user1 = "_id"