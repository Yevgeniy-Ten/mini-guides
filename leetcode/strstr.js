// const strStr = function (haystack, needle) {
//     if (haystack === "" && needle === "") {
//         return 0
//     }
//     let indexStrStr = haystack.indexOf(needle)
//
//     return indexStrStr
// };
// console.log(strStr("aaaaa", "bba"))

const lengthOfLastWord = function (s) {
    if (!s.length || s === " ") {
        return 0
    }
    let lastIndex = s.length - 1
    let resultLength = 0;
    let lastLetter = s[lastIndex]
    while (!lastLetter.length) {
        lastIndex -= 1
        lastLetter = s[lastIndex]
    }
    console.log(lastIndex)
    while (lastLetter.length) {
        lastIndex -= 1
        lastLetter = s[lastIndex]
        resultLength++
    }
    return resultLength
};
console.log(lengthOfLastWord("a "))