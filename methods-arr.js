/* for-each обычно используют для перебора массива! this-- обычно используются в обьектах чтобы, передаете этот параметр
и все что в функции будет вызываться через this.... будет выбираться this-- переданный в аргументах функции
во всех переборах массивах this тоже самое
 arr.forEach(item,i,this) нельзя остановить*/
const someArr = ["1", 2, 3, 4, "-5", "item", "kek", "19"];
someArr.forEach((item, i) => {
    console.log(item + " " + i);
})

/*const newArr = arr.filter((item,i,arrr){ }),this) используется для фильтрации массива 
если условие true добавляет элемент, если false не добавляет, в примере ниже проверяем если 
элемент явлется строковым типом добавляем */
const stringSomeArrVals = someArr.filter(item => {
    return typeof (item) === "string";
});

console.log(stringSomeArrVals);

/*const someArr = arr.map((item,i,arrr){ }),this) используется для обработки массива возращает тот
же самый массив только в зависимости от того что мы делаем с айтемом!*/
let i = 0;
const arrAddSerialNumber = someArr.map((item) => {
    ++i;
    return item + ` --${i}`
})
console.log(arrAddSerialNumber)

/*const которое значение(true,false) = arr.every(item,i,this)  используется для проверки 
то есть ставим условие если какой то элемент не такой то вернёт false, если все ок true*/

//узнаем все ли элементы положительные?
const allItemsPositive = someArr.every(item => {
    return item < 0;
})
console.log(allItemsPositive)

/*arr.some() помоему тоже самое что every, только every если если из всех элементов один не подходит
по условию вернёт фалсе, а some если хоть один элемент подходит условию вернёт true! */

const hasOneNegative = someArr.some(item => {
    return item < 0;
})
console.log(hasOneNegative)

/* arr.reduce((total,item)=>{}),totalVal) с начала массива // reduceRight с конца массива
total это возращаемое значение по окончанию цикла, totalVal определяет изначальный total надо указывать!,
а дальше в методе делаем с айтемом все что хотим и можем пушит в totalval можем добавлять без разницы */

const sumSomeArr = someArr.reduce((total, item) => {
    return total + item + " "
}, 0) // если не указать 0 или какое то значение то totalVal станет равным первому айтему, и итерация пропуститься
// вообщем надо указывать

console.log(sumSomeArr)