var str = "Hello";
// console.log(str)
//tsc
var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = "heello typescript";
var numberArr = [1, 1, 2, 3, 5, 7, 8];
var wordsArr = ["heloo", "string"];
//generic запись
var numArr2 = [1, 1, 2, 3, 5, 7, 8];
//Tuple -- когда несколько типов
var contactsArr = ["vladilen", 123125151];
//Any чтобы любой тип подерживался
var variable = 42;
variable = 'New string';
variable = ["wqert"];
// === void ==== ничего не возращается
function sayMyName(name) {
    console.log(name);
}
sayMyName("Хайзеньерг");
// Never ==== функция которая выкидывает ошибку, или никогда не завершится
function throwError(message) {
    throw new Error(message);
}
var login = "admin";
var id = 123123;
var id2 = "wqewqrq";
