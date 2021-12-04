const isValid = (string) => {
    const brackets = {
        "{": "}",
        "[": "]",
        "(": ")"
    }
    if (brackets[string[0]] === undefined) {
        return false
    }
    let checkedBrackets = []
    let cnt = 0;
    for (let i in string) {
        let bracket = string[i]
        const validBracket = brackets[bracket]
        if (validBracket) {
            checkedBrackets.push(validBracket)
        } else {
            if (checkedBrackets.pop() === bracket) {
                cnt++
            }
        }
    }
    if (string.length / 2 === cnt) {
        return true
    }
    return false
}
console.log(isValid("[({])}"))