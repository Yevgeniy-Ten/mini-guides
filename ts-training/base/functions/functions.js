function sum(a, b) {
    return a + b;
}
function toUppercase(str) {
    return str.toUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, "default": a.toString() };
    }
    return { x: a, y: b };
}
console.log(position(), "EMPTY");
console.log(position(2213), "ONE ARGUMENT");
console.log(position(2213, 5315), "TWOARGUMENTS");
