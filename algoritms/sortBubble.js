const array = [2, 3, 4, 15, 6, 7, -2, 38, 9]
let count = 0

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j + 1] < arr[j]) {
                let tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
            count++
        }
    }
    return arr
}
console.log(bubbleSort(array))
console.log(count)
// O(n*n)