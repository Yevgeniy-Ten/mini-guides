const strs = ["cir", "car"]
const strss = ["aa", "ab"]

const longestCommonPrefix = (strs = []) => {
    let result = "";
    if (!strs.length) {
        return result
    }
    let longWord = strs[0];
    strs.forEach(item => {
        if (item.length > longWord.length) {
            longWord = item;
        }
    })
    for (let i = 0; i < longWord.length; i++) {
        let validLetters = 0;
        strs.forEach((item) => {
            if (item[i] === longWord[i]) {
                validLetters++;
            }
        })
        if (validLetters === strs.length) {
            result += longWord[i];
        } else {
            break
        }
    }
    return result
}
console.log(longestCommonPrefix(strs))