const arrNumbers: Array<number> = [123, 13531, 21312321, 531]
const arrStrings: Array<string> = ["kek", "kek", "kek"]

// два вида записи number[] массив из чисел и Array<number>
// W это типа разные виды массивов, ну по идее буква может быть любая
// w какаята штука из массивов
function reverse<W>(arr: W[]): W[] {
    return arr.reverse()
}

reverse<number>(arrNumbers)
reverse(arrStrings)