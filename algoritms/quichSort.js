const array = [2, 3, 4, 15, 6, 7, -2, 38, 9]
let count = 0

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let middleIndex = Math.floor(arr.length / 2);
    let middle = arr[middleIndex]
    let less = []
    let greater = []
    for (let i = 0; i < arr.length; i++) {
        if (i === middleIndex) {
            continue
        }
        if (arr[i] < middle) {
            less.push(arr[i])
        } else {
            greater.push(arr[i])
        }
    }
    return [...quickSort(less), middle, ...quickSort(greater)]
}

console.log(quickSort(array))
console.log(count)