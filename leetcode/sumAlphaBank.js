function sum (num){
    let result = num
    console.log(result)
    return function sum2(newNum){
        result +=newNum
        console.log(result)
        return sum2
    }
}
sum(1)(2)(3)