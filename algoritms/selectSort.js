const array = [5,2,3,6]
let count = 0

function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexMin = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j
            }
            count++;
        }
        let tmp = arr[i]
        arr[i] = arr[indexMin]
        arr[indexMin] = tmp
    }
    return arr
}

console.log(selectSort(array))
console.log(count)
// O(n*n)