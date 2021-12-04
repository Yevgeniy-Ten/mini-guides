const romanToInt = function (s) {
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const nextI = i + 1;
        const firstLetter = s[i];
        let validNumber = null;
        if (nextI < s.length) {
            const secondLetter = s[nextI]
            const thirdI = nextI + 1;
            if (thirdI < s.length) {
                const thirdLetter = s[thirdI]
                validNumber = romanNumerals[secondLetter + thirdLetter]
                if (validNumber) {
                    result += parseInt(romanNumerals[firstLetter]);
                    result += parseInt(validNumber)
                    i += 2;
                    continue;
                }
            }
            validNumber = romanNumerals[firstLetter + secondLetter]
            if (validNumber) {
                result += parseInt(validNumber)
                if (nextI === s.length - 1) {
                    break;
                }
                i++;
                continue;
            }
        }
        result += parseInt(romanNumerals[firstLetter])
    }
    return result
};
const intToRoman = function (s) {
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }
    let result = "";
    s = parseInt(s)
    Object.keys(romanNumerals).forEach(key => {
        while (s >= romanNumerals[key]) {
            result += key
            s = s - romanNumerals[key]
        }
    })
    return result
};
console.log(intToRoman("3"))